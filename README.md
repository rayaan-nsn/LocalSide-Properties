
# Localside - Property Search Web Application

https://localside.netlify.app/


This is a client-side web application that allows users to search for properties based on various criteria such as type, price, number of bedrooms, date added, and postcode area. The application is built using HTML5 and jQuery UI widgets to ensure consistency, reliability, and accessibility.




## Features

- Search properties by type, price, number of bedrooms, date added, and postcode area.
- Display search results in an effective and pleasant way with pictures, short descriptions, and prices.
- View property details including large image, thumbnail images, short description, long description, floor plan, and Google map.
- Add properties to a favorites list by dragging the property to a favorites list on the side or by pressing a "favorite" button or icon.
- Remove properties from the favorites list by dragging it out of the list or by pressing a delete button.
- Clear the favorites list.
- Display the favorites list on the search page.
- Responsive design.


## Technologies Used

HTML5, CSS3, JavaScript, jQuery UI, JSON




## Installation

To run the application, simply open the home.html file in your web browser. The application does not require any server-side setup as it uses a JavaScript Array to store the property data.
    
## Adding Properties

To add additional properties to the application, simply add them to the localside.js file inside the "var propertyData" in the following format:

```javascript
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
  "floorPlan": "images/img1.jpg",
  "googleMap": "https://www.google.com/maps/embed?xxx"
}
```


