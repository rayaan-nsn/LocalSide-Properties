var propertyData = {
    "property": [
        {
            "id": "prop1",
            "type": "House",
            "title": "Woronzow Road, St Johns Wood, London, NW8",
            "bedrooms": 5,
            "postcode": "NW8",
            "price": 17000000,
            "tenure": "Freehold",
            "shortDescription": "This 1860s villa in St John's Wood, London has a large entertaining space, principal suite with en suite bathroom, and four additional bedrooms. It also has a secluded garden with swimming pool and pool house, off-street parking, and the potential for extension. Located near St John's Wood High Street and underground station.",
            "description": "A lateral stucco detached villa built circa 1860 (not listed), set behind a walled and gated entrance, with a secluded 113 ft rear garden, off street parking quietly located on the East side of St John's Wood adjacent to Norfolk Road. This low built house, laid out mainly across two floors, is not listed and provides an opportunity to extend (subject to appropriate planning consents).\n" + "\n" +
                "The house extends to approximately 4805 sq ft featuring a large entertaining space with a drawing room, second reception room, dining room and kitchen/breakfast room. The ground floor also provides a guest cloakroom/WC, storage and boot room/utility.\n" + "\n" +
                "The principal suite is located on the first floor with a dressing room, en suite bathroom and access to a roof terrace overlooking the gardens (also with the opportunity to extend subject to the appropriate planning consents). There are four further bedrooms and three bath/shower rooms (two en suite).\n" + "\n" +
                "This private mature rear garden features a swimming pool with pool house, plant and changing rooms.\n" + "\n" +
                "Woronzow Road is located on the East side of St. John's Wood. St John's Wood High Street has a distinctly English village feel yet enjoys a cosmopolitan population and mix of restaurants and shops. St John's Wood underground station (Jubilee Line) is just two stops from Bond Street and in the heart of the West End.",
            "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15820.820780988846!2d80.44546061433462!3d7.552590684503509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae337d49d8afe6d%3A0xa66b2faa1cc3f606!2sIbbagamuwa!5e0!3m2!1sen!2slk!4v1673078318502!5m2!1sen!2slk",
            "picture1": "./images/prop1/prop1Img1.jpeg",
            "picture2": "./images/prop1/prop1Img2.jpeg",
            "picture3": "./images/prop1/prop1Img3.jpeg",
            "picture4": "./images/prop1/prop1Img4.jpeg",
            "picture5": "./images/prop1/prop1Img5.jpeg",
            "picture6": "./images/prop1/prop1Img6.jpeg",
            "picture7": "./images/prop1/prop1Img7.jpeg",
            "picture8": "./images/prop1/prop1Img8.jpeg",
            "floorPlan": "./images/prop1/prop1FloorPlan.jpeg",
            // "url": "properties/prop1.html",
            "added": {
                "month": "September",
                "day": 14,
                "year": 2021
            }
        },
        {
            "id": "prop2",
            "type": "Flat",
            "bedrooms": 2,
            "postcode": "NW1",
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
            "postcode": "NW1",
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
            "postcode": "NW1",
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
            "postcode": "NW1",
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


/* <<<--------------------------- Search Page --------------------------->>> */
$(document).ready(function () {  //Onclick submit button
    $('#submitBtn').click(searchProp);
});


function searchProp() {

    const filteredList = [];

    const type = $('#propertyType').val();
    const minPrice = $('#minPrice').val();
    const maxPrice = $('#maxPrice').val();
    const minBedrooms = $('#minBedrooms').val();
    const maxBedrooms = $('#maxBedrooms').val();
    const postcode = $('#postCode').val();

    // Use $.each() to iterate over the elements in the propertyData.property array
    $.each(propertyData.property, function (index, property) {
        // Check if the current element meets the search criteria
        if ((type === 'Any' || property.type === type) && (minPrice === '' || property.price >= minPrice) &&
            (maxPrice === '' || property.price <= maxPrice) && (minBedrooms === '' || property.bedrooms >= minBedrooms) &&
            (maxBedrooms === '' || property.bedrooms <= maxBedrooms) && (postcode === '' || property.postcode === postcode)) {
            console.log(property);
            // If the element meets the search criteria, add it to the filteredList array
            filteredList.push(property);
            console.log(filteredList);
        }
    });
    const stringifiesFilteredList = JSON.stringify(filteredList); //Only strings can be stored in localstorage
    localStorage.setItem('filteredList', stringifiesFilteredList);    //storing the stringifies objects into the localstorage
    window.open('result.html');
}

/* <<<--------------------------- Result Page --------------------------->>> */

const filteredListBack = JSON.parse(localStorage.getItem('filteredList'));   //read back the object from localstorage

$.each(filteredListBack, function (index, property) {    // Loop through the array of filtered listings using the jQuery each() function

    // Create a new property ad element using template literals and the current property object
    const $propertyAd = $(`
                <div class="propAdBox">
                    <img class="propMainImg" src="${property.picture1}" alt="${property.type}"/>
                    <div>
                        <h2>${property.title}</h2>
                        <h4>${property.bedrooms} Bedrooms</h4>
                        <h5>${property.postcode}</h5>
                        <p>${property.shortDescription}</p>
                        <h3>${property.price}</h3>
                        <p class="seeMore">see more...</p>
                        <!--<button class="seeMore" style="color: rgb(0, 153, 255)">see more...</button>-->
                    </div>
                </div>
  `);
    $('#filtered-properties-container').append($propertyAd);    // Append the property ad element to the page

    $propertyAd.click(function () {
        const stringifiesObject = JSON.stringify(property); //Only strings can be stored in localstorage
        localStorage.setItem('property', stringifiesObject);    //storing the stringifies objects into the localstorage
        window.open('property.html');
    });
});


/* <<<--------------------------- Property Page --------------------------->>> */
$( function() {
    $( "#propInfoTabs" ).tabs();
} );

const backToProperty = JSON.parse(localStorage.getItem('property' ));   //read back the object from localstorage
propertyPage(backToProperty);

function propertyPage(selectedProperty) {

    $('.propImg1').append(`<img src="${selectedProperty.picture1}" alt="">`);
    $('.propImg2').append(`<img src="${selectedProperty.picture2}" alt="">`);
    $('.propImg3').append(`<img src="${selectedProperty.picture3}" alt="">`);
    $('.propImg4').append(`<img src="${selectedProperty.picture4}" alt="">`);
    $('.propImg5').append(`<img src="${selectedProperty.picture5}" alt="">`);
    $('.propImg6').append(`<img src="${selectedProperty.picture6}" alt="">`);

    $('.propPic1').append(`<img class="propImageSelector" src="${selectedProperty.picture1}" onclick="currentSlide(1)" alt="">`);
    $('.propPic2').append(`<img class="propImageSelector" src="${selectedProperty.picture2}" onclick="currentSlide(2)" alt="">`);
    $('.propPic3').append(`<img class="propImageSelector" src="${selectedProperty.picture3}" onclick="currentSlide(3)" alt="">`);
    $('.propPic4').append(`<img class="propImageSelector" src="${selectedProperty.picture4}" onclick="currentSlide(4)" alt="">`);
    $('.propPic5').append(`<img class="propImageSelector" src="${selectedProperty.picture5}" onclick="currentSlide(5)" alt="">`);
    $('.propPic6').append(`<img class="propImageSelector" src="${selectedProperty.picture6}" onclick="currentSlide(6)" alt="">`);

    $(`.propDetails`).append(selectedProperty.description);
    $(`.propFloorPlan`).append(`<img src="${selectedProperty.floorPlan}" alt="">`);
    $(`.propLocation`).append(`<iframe src="${selectedProperty.location}"></iframe>`);
}

// <-------- SlideShow begins ------->
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //let i;
    let slides = $(".propLargeImage");
    let dots = $(".propImageSelector");
    //let captionText = $("#caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    slides.css("display", "none");
    dots.removeClass("active");
    $(slides[slideIndex - 1]).css("display", "block");
    $(dots[slideIndex - 1]).addClass("active");
    //captionText.html(dots[slideIndex-1].alt);
}

// <-------- SlideShow ends ------->




