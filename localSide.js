var filteredList = [
    //Temporary
    {
        "id": "prop1",
        "type": "House",
        "bedrooms": 3,
        "postcode" : "NW1",
        "price": 750000,
        "tenure": "Freehold",
        "description": "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
        "location": "PetsWood Road, Pets Wood, Orpington",
        "picture": "images/prop1pic1small.jpg",
        "url": "properties/prop1.html",
        "added": {
            "month": "October",
            "day": 12,
            "year": 2022
        }
    },
    {
        "id": "prop2",
        "type": "Flat",
        "bedrooms": 2,
        "postcode" : "NW1",
        "price": 399995,
        "tenure": "Freehold",
        "description": "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
        "location": "Crofton Road Orpington BR6",
        "picture": "images/prop2pic1small.jpg",
        "url": "properties/prop2.html",
        "added": {
            "month": "September",
            "day": 14,
            "year": 2022
        }
    },
    {
        "id": "prop3",
        "type": "Condo",
        "bedrooms": 1,
        "postcode" : "NW1",
        "price": 225000,
        "tenure": "Leasehold",
        "description": "This charming one bedroom condo is located in the heart of downtown, just steps away from all the best restaurants, shops, and entertainment. The unit features an open floor plan with plenty of natural light, a fully equipped kitchen, and a private balcony with city views. The bedroom has a comfortable queen size bed and plenty of storage space. The building offers a variety of amenities including a fitness center, pool, and rooftop terrace. Don't miss this opportunity to live in the heart of the city!",
        "location": "123 Main Street, Anytown USA",
        "picture": "images/prop3pic1small.jpg",
        "url": "properties/prop3.html",
        "added": {
            "month": "August",
            "day": 20,
            "year": 2022
        }
    },
    {
        "id": "prop4",
        "type": "Apartment",
        "bedrooms": 2,
        "postcode" : "NW1",
        "price": 475000,
        "tenure": "Leasehold",
        "description": "This spacious two bedroom apartment is located in a prestigious building with a 24-hour doorman and concierge service. The unit features a modern kitchen with stainless steel appliances and granite countertops, a large living room with floor-to-ceiling windows, and a private balcony with city views. The building offers a variety of amenities including a fitness center, pool, and outdoor terrace. Conveniently located near public transportation and all the best shopping and dining options.",
        "location": "456 Park Avenue, Anytown USA",
        "picture": "images/prop4pic1small.jpg",
        "url": "properties/prop4.html",
        "added": {
            "month": "July",
            "day": 25,
            "year": 2022
        }
    },
    {
        "id": "prop5",
        "type": "Townhouse",
        "bedrooms": 3,
        "postcode" : "NW1",
        "price": 625000,
        "tenure": "Freehold",
        "description": "This beautiful three bedroom townhouse is located in a desirable neighborhood with excellent schools and a sense of community. The unit features a modern kitchen with stainless steel appliances and granite countertops, a formal dining room, and a large living room with a fireplace. The second floor has three bedrooms, including a spacious master suite with a walk-in closet and en-suite bathroom. The finished basement offers additional living space and a half bathroom. The property also has a private backyard and a two car garage.",
        "location": "789 Maple Street, Anytown USA",
        "picture": "images/prop5pic1small.jpg",
        "url": "properties/prop5.html",
        "added": {
            "month": "June",
            "day": 30,
            "year": 2022
        }
    }
    //Temporary , should be like var filteredList = []; only
    ];

var propertyData = {
    "property": [
        {
            "id": "prop1",
            "type": "House",
            "bedrooms": 3,
            "postcode" : "NW1",
            "price": 750000,
            "tenure": "Freehold",
            "description": "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
            "location": "PetsWood Road, Pets Wood, Orpington",
            "picture": "images/prop1pic1small.jpg",
            "url": "properties/prop1.html",
            "added": {
                "month": "October",
                "day": 12,
                "year": 2022
            }
        },
        {
            "id": "prop2",
            "type": "Flat",
            "bedrooms": 2,
            "postcode" : "NW1",
            "price": 399995,
            "tenure": "Freehold",
            "description": "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
            "location": "Crofton Road Orpington BR6",
            "picture": "images/prop2pic1small.jpg",
            "url": "properties/prop2.html",
            "added": {
                "month": "September",
                "day": 14,
                "year": 2022
            }
        },
        {
            "id": "prop3",
            "type": "Condo",
            "bedrooms": 1,
            "postcode" : "NW1",
            "price": 225000,
            "tenure": "Leasehold",
            "description": "This charming one bedroom condo is located in the heart of downtown, just steps away from all the best restaurants, shops, and entertainment. The unit features an open floor plan with plenty of natural light, a fully equipped kitchen, and a private balcony with city views. The bedroom has a comfortable queen size bed and plenty of storage space. The building offers a variety of amenities including a fitness center, pool, and rooftop terrace. Don't miss this opportunity to live in the heart of the city!",
            "location": "123 Main Street, Anytown USA",
            "picture": "images/prop3pic1small.jpg",
            "url": "properties/prop3.html",
            "added": {
                "month": "August",
                "day": 20,
                "year": 2022
            }
        },
        {
            "id": "prop4",
            "type": "Apartment",
            "bedrooms": 2,
            "postcode" : "NW1",
            "price": 475000,
            "tenure": "Leasehold",
            "description": "This spacious two bedroom apartment is located in a prestigious building with a 24-hour doorman and concierge service. The unit features a modern kitchen with stainless steel appliances and granite countertops, a large living room with floor-to-ceiling windows, and a private balcony with city views. The building offers a variety of amenities including a fitness center, pool, and outdoor terrace. Conveniently located near public transportation and all the best shopping and dining options.",
            "location": "456 Park Avenue, Anytown USA",
            "picture": "images/prop4pic1small.jpg",
            "url": "properties/prop4.html",
            "added": {
                "month": "July",
                "day": 25,
                "year": 2022
            }
        },
        {
            "id": "prop5",
            "type": "Townhouse",
            "bedrooms": 3,
            "postcode" : "NW1",
            "price": 625000,
            "tenure": "Freehold",
            "description": "This beautiful three bedroom townhouse is located in a desirable neighborhood with excellent schools and a sense of community. The unit features a modern kitchen with stainless steel appliances and granite countertops, a formal dining room, and a large living room with a fireplace. The second floor has three bedrooms, including a spacious master suite with a walk-in closet and en-suite bathroom. The finished basement offers additional living space and a half bathroom. The property also has a private backyard and a two car garage.",
            "location": "789 Maple Street, Anytown USA",
            "picture": "images/prop5pic1small.jpg",
            "url": "properties/prop5.html",
            "added": {
                "month": "June",
                "day": 30,
                "year": 2022
            }
        }
    ]
};

/* <<<--------- Search Page --------->>> */
$(document).ready(function() {  //Onclick submit button
    $('#submitBtn').click(searchProp);
});

function searchProp(){

    //filteredList = []; try at the end

    var type = $('#propertyType').val();
    var minPrice = $('#minPrice').val();
    var maxPrice = $('#maxPrice').val();
    var minBedrooms = $('#minBedrooms').val();
    var maxBedrooms = $('#maxBedrooms').val();
    var postcode = $('#postCode').val();

    for (var i=0; i<propertyData.property.length; i++){
        var p = propertyData.property[i];
        if (type == 'Any' || type == p.type){
            if (minPrice <= p.price && p.price <= maxPrice){
                if (minBedrooms <= p.bedrooms && p.bedrooms <= maxBedrooms){
                    if (postcode == '' || postcode == p.postcode) {
                        filteredList.push(p)
                        //console.log(i + " " + p.type + " " + p.price + " " + p.bedrooms);

                    }
                }
            }
        }
    }
    // console.log(filteredList[0].type);
}



/* <<<--------- Result Page --------->>> */
$(document).ready(function() {
    for (let i = 0; i < filteredList.length; i++) {
        // Replace the placeholders in the template with the actual data from the object
        var renderedHtml = $(template).html()
            .replace('${propID}', filteredList[i].id)
            .replace('${name}', filteredList[i].type)
            .replace('${description}', filteredList[i].description);

        $('#resultContainer').append(renderedHtml); // Append the rendered HTML to the container element
    }
});

// *** Onclick adCard div ***


$(document).ready(function() {
    $('.adCard').click(function() {
        const adTitle = $(this).find('h6').text();
        var selectedAd = filteredList.find(ad => ad.id === adTitle);
        if (selectedAd) {
            // const renderHtml = $('#tempPropD').replace('${title}', selectedAd.type);
            // $('#detailsContainer').append(renderHtml);
            // window.location.href = 'property.html';
            console.log(selectedAd.type);
            // const renHTML = $(tempPropD).html().replace('${ad.title}', selectedAd.type);
            // $('#detailsContainer').append(renHtml);
        }
        // // Get the template from the HTML page and replace the placeholder with the desired string
        // const renderHtml = $('#tempPropD').replace('${title}', selectedAd.type);
        //
        // // Append the rendered HTML to the container element
        // $('#detailsContainer').append(renderHtml);
        myFunction(selectedAd);
    });
});
function myFunction(selectedAd) {
    console.log(selectedAd.type);
}






// selectedAd can now be accessed and used outside of the $(document).ready() function





/* <<<--------- Property Page --------->>> */

// for (let i = 0; i < filteredList.length; i++) {
//     // Replace the placeholders in the template with the actual data from the object
//     const renderedHtml = $(tempPropD).html().replace('${name}', filteredList[i].type)
//         .replace('${description}', filteredList[i].description);
//
//     // Append the rendered HTML to the container element
//     $('#detailsContainer').append(renderedHtml);
//     //generatePage(renderedHtml);
// }

function generatePage(html) {
    // Create a new window object
    const page = window.open();

    // Write the HTML content to the new window
    page.document.write(html);

    // Close the document stream, which will cause the page to be displayed
    page.document.close();
}




