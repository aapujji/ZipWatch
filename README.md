# ZipWatch REST API and Web Application
ZipWatch is a project created and managed by Hunter College computer science students. The aim of the project is to aid those who are looking to buy or rent a home by analyzing and rating each neighborhood in New York City. The web app uses Monk (to communicate with a MongoDB database), Express.js and Node.js. The front end is written entirely in HTML, CSS, and Javascript/JQuery.

# File Descriptions
<b>Package.json</b> - Contains meta data about the web app. Defines the list of dependencies that are requierd to be installed for this app to run on a node.js server.

<b>Server.js</b> - Contains all the controllers, models, and middlewares. Defines the error handlers, settings, and routes to other files.

<b>Routes (File Folder)</b> - Contains data.js - Contains all the route handlers for the JSON objects

<b>Views (File Folder)</b> - Contains all the html files: index.html (home page) and template.html (Zip code search page)

<b>Public (File Folder)</b>:<br />
&emsp;&emsp;img (File Folder) - contains all images used for the UI of the webapp<br />
&emsp;&emsp;&emsp;&emsp;bg4.jpeg - home page image<br />
&emsp;&emsp;&emsp;&emsp;location-pin.png, magnifier.png, two-houses.png - vector icons used on home page<br />
&emsp;&emsp;&emsp;&emsp;pattern.png - pattern image used on home page and template page<br />
&emsp;&emsp;css (File Folder) - contains all css used for the UI of the webapp<br />
&emsp;&emsp;&emsp;&emsp;main.css - css for home page and header on both pages<br />
&emsp;&emsp;&emsp;&emsp;template.css - css for the template page<br />
&emsp;&emsp;js (File Folder) - contains all javascript and JQuery used for the UI of the webapp<br />
&emsp;&emsp;&emsp;&emsp;bin (File Folder) - contains js files for the gauge on the home page<br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;justgage.js<br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;raphael-2.1.4.min.js<br />
&emsp;&emsp;&emsp;&emsp;index.js - Main js file for the home page<br />
&emsp;&emsp;&emsp;&emsp;main.js - Main js file for the template page<br />
&emsp;&emsp;&emsp;&emsp;menu.js - jQuery for the responsive menu bar<br />
&emsp;&emsp;&emsp;&emsp;curr_location.js - Obtains current location for button on home page
    
