# data-management-tools

Installation

1. Ensure IIS is up and running on your machine. If not, hit the windows key and type in "Turn Windows Features On or Off" and then tick the box next to Internet Information Services
2. Extract repository to C:\inetpub\wwwroot
3. Convert data-management-tools to an application in the IIS Manager console
4. On the newly converted application, double clikc MIME Types
5. Under the "Actions" panel on the right side, click "Add..."
6. For File name extension: type in ".wasm", and for MIME type: type in "application/wasm"
7. Browse to application under "http://localhost/data-management-tools/"