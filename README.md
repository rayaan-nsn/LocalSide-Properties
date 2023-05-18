https://localside.netlify.app/

Property Search Web Application
This is a client-side web application that allows users to search for properties based on various criteria such as type, price, number of bedrooms, date added, and postcode area. The application is built using HTML5 and jQuery UI widgets to ensure consistency, reliability, and accessibility.
Features
Search properties by type, price, number of bedrooms, date added, and postcode area
Display search results in an effective and pleasant way with pictures, short descriptions, and prices
View property details including large image, thumbnail images, short description, long description, floor plan, and Google map
Add properties to a favorites list by dragging the property to a favorites list on the side or by pressing a "favorite" button or icon
Remove properties from the favorites list by dragging it out of the list or by pressing a delete button
Clear the favorites list
Display the favorites list on the search page
Responsive design with two layouts for large screens and smaller screens
Technologies Used
HTML5
CSS3
JavaScript
jQuery UI
JSON
Getting Started
To run the application, simply open the index.html file in your web browser. The application does not require any server-side setup as it uses a JSON file to store the property data.
Adding Properties
To add additional properties to the application, simply add them to the properties.json file in the following format:
json

Copy

{
  "type": "house",
  "price": 500000,
  "bedrooms": 3,
  "dateAdded": "2022-01-01",
  "postcodeArea": "BR1",
  "": "images/property1.jpg",
  "thumbnailImages": [
    "images/property1-thumb1.jpg",
    "images/property1-thumb2.jpg",
    "images/property1-thumb3.jpg"
  ],
  "shortDescription": "Beautiful 3 bedroom house in Bromley",
  "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.",
  "floorPlan": "images/floorplan1.jpg",
  "googleMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.893764238758!2d-0.01787468422903222!3d51.41080257962622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603d7c7d7d6d7%3A0x3c5d77d7d7d7d7d!2sBromley%20South%20Railway%20Station!5e0!3m2!1sen!2suk!4v1653039477649!5m2!1sen!2suk"
}
Screenshots
Search PageDownload
Property Details PageDownload
Credits
This application was created as part of a coding challenge and was built by Rayaan.
