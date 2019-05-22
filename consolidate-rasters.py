import arcpy
import os

workspace = arcpy.GetParameterAsText(0)
out_directory = arcpy.GetParameterAsText(1)
mosaic_dataset = arcpy.GetParameterAsText(2)
raster_type = arcpy.GetParameterAsText(3)
cache_location = arcpy.GetParameterAsText(4)

walk = arcpy.da.Walk(workspace, topdown=True, datatype="RasterDataset")

arcpy.AddMessage("Discovering Items...")

for dirpath, dirnames, filenames in walk:
    # Disregard any folder named 'back_up' in creating list of rasters
    for filename in filenames:
        if "thumb" not in filename:
            in_file = os.path.join(dirpath, filename)
            out_file = os.path.join(out_directory, filename + ".tif")
            if arcpy.Exists(out_file) == False:
                arcpy.AddMessage("Copying {0} to {1}".format(filename, out_directory))
                arcpy.CopyRaster_management(in_file, out_file)
            else: 
                arcpy.AddMessage(" {0} already exists in {1}, passing".format(filename, out_directory))

arcpy.AddMessage('Completed copy of data, beginning update of Mosaic Dataset.')

arcpy.AddRastersToMosaicDataset_management(
     mosaic_dataset, raster_type=raster_type, 
     out_directory, "UPDATE_CELL_SIZES", "UPDATE_BOUNDARY",
     "UPDATE_OVERVIEWS", "2", "#", "#", "#",
     "*.tif", "SUBFOLDERS", "EXCLUDE_DUPLICATES",
     "NO_PYRAMIDS", "NO_STATISTICS", "BUILD_THUMBNAILS", 
     "", "","NO_STATISTICS", "", "USE_PIXEL_CACHE", cache_location=cache_location)

arcpy.AddMessage("Completed update of Mosaic Dataset")