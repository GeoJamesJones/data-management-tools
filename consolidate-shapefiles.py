import os
import arcpy

top_directory = arcpy.GetParameterAsText(0)
out_directory = arcpy.GetParameterAsText(1)

walk = arcpy.da.Walk(top_directory, datatype="FeatureClass")

arcpy.AddMessage("Discovering features...")
for dirpath, dirnames, filenames in walk:
    for filename in filenames:
        current_file = os.path.join(dirpath, filename)
        out_file = os.path.join(out_directory, filename)
        if arcpy.Exists(current_file) == True:
            arcpy.AddMessage("Copying {0} to {1}".format(filename, out_directory))
            arcpy.CopyFeatures_management(current_file, out_file)

arcpy.AddMessage("Completed copy of data")