function generateId() {
  var counter = 0;
  return function count() {
    var x = counter;
    counter = counter + 1;
    return x;
  };
}
var id = generateId();
////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////
function makerestaurant(Name, Localisation, CuisineType, openningTime, image) {
  return {
    Name: Name,
    Localisation: Localisation,
    CuisineType: CuisineType,
    openningTime: openningTime,
    image: image,
    id: id(),
  };
}

////////////////////////////////////////////////////

var restaurantslist = function () {
  return {
    numberOfrestaurants: 0,
    restaurants: [],
    addrestaurant: addrestaurant,
    removerestaurents: removerestaurents,
    displayAllRestaurants: displayAllRestaurants,
    UpdateRestaurant: UpdateRestaurant,
  };
};

///////////////////////////////////////////////////////////////

$(".adding-rest").hide();
$(".update-rest").hide();

$(".add-btn").on("click", function () {
  $(".adding-rest").show();
  $(".add-btn").hide();
});
$("#add-btn").on("click", function () {
  var Name = $("#name").val();
  var Localisation = $("#localisation").val();
  var CuisineType = $("#Cuisinetype").val();
  var openningTime = $("#openningtime").val();
  var image = $("#picture-link").val();
  $(".adding-rest").hide();
  $(".add-btn").show();
  class1.addrestaurant();
  class1.displayAllRestaurants();
});

//////////////////////////////////////////////////////

var addrestaurant = function () {
  var Name = $("#name").val();
  var Localisation = $("#localisation").val();
  var CuisineType = $("#Cuisinetype").val();
  var openningTime = $("#openningtime").val();
  var image = $("#picture-link").val();

  this.restaurants.push(
    makerestaurant(Name, Localisation, CuisineType, openningTime, image)
  );

  this.numberOfrestaurants = this.restaurants.length;
};

// events
/////////////////////////////////////////////////////////////////////////////////
var displayAllRestaurants = function () {
  $(".restaurentslist").empty();
  for (var i = 0; i < class1.restaurants.length; i++) {
    $(".restaurentslist").append(
      `<div class="restaurant-card">

        <img src=${class1.restaurants[i].image} alt="Restaurant Image" class="restaurant-img">
        <div class="restaurant-info">
            <h3 class="restaurant-name">${class1.restaurants[i].Name}</h3>
            <p class="opening-time">Heures d'ouverture : ${class1.restaurants[i].openningTime}</p>
            <p class="cuisine-type">Cuisine : ${class1.restaurants[i].CuisineType}</p>
            <p class="cuisine-type">Location : ${class1.restaurants[i].Localisation}</p>
            <button class="update-btn" data-id="${this.restaurants[i].id}">update</button>
            <button class="remove-btn" data-id="${this.restaurants[i].id}">remove</button>
        </div>
    </div>`
    );
  }
};
////////////////
// Immediately display all restaurants after adding a new one

/////////////////////////////////////////////////////////////////////

var removerestaurents = function (id) {
  for (let i = 0; i < this.restaurants.length; i++) {
    if (this.restaurants[i].id === id) {
      this.restaurants.splice(i, 1);
      console.log(this.restaurants);
    }
  }
  this.numberOfrestaurants = this.restaurants.length;
  this.displayAllRestaurants();
};
/////////////////////////////////
// Add event listener for remove buttons
// $(".remove-btn").on("click", function () {

// });

//////////////////////////////////////////////////////////////////////////////////

function each(arr, f) {
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      f(arr[i], i);
    }
  } else {
    for (var key in arr) {
      f(arr[key], key);
    }
  }
}
////////

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}
//////////

var restaurants = [
  {
    name: "Le Gourmet",
    type: "Française",
    localisation: "Paris",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/ec/fc/99/caption.jpg?w=1200&h=-1&s=1&cx=640&cy=370&chk=v1_03fe5c156914602bc202",
  },
  {
    name: "Pasta Mania",
    type: "Italienne",
    localisation: "Rome",
    image:
      "https://static.actu.fr/uploads/2023/12/il-carpaccio-royal-monceau-960x640.jpg",
  },
  {
    name: "Sushi World",
    type: "Japonaise",
    localisation: "Tokyo",
    image:
      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002459/img/basic/a0002459_main.jpg",
  },
  {
    name: "Taco Fiesta",
    type: "Mexicaine",
    localisation: "Mexico",
    image:
      "https://fr.newtable.com/uploads/medias/restaurants/images/thumbs/6094-photo1.jpg",
  },
];

$("#searchg").on("click", function () {
  var SearchVal = $(".Search").val();
  console.log(SearchVal);
  class1.restaurants = filter(class1.restaurants, function (element) {
    return element.CuisineType === SearchVal;
  });
  console.log(class1.restaurants);
  class1.displayAllRestaurants();
});

function searchCuisineType() {
  var arr = filter(data, function (element) {
    return element.CuisineType === searched.val();
  });

  data = arr;

  displayData();
  searched.val("");
}

////////////////update
//1-1 function to store all the data of the restaurent in the input of html

var UpdateRestaurant = function (id) {
  console.log(
    $("#updatename").val(),
    $("#updatelocalisation").val(),
    $("#updateCuisinetype").val(),
    $("#updateopenningtime").val(),
    $("#updatepicture-link").val()
  );

  for (i = 0; i < this.restaurants.length; i++) {
    if (this.restaurants[i].id === id) {
      //putting the data in the html input
      this.restaurants[i].Name = $("#updatename").val();
      this.restaurants[i].Localisation = $("#updatelocalisation").val();
      this.restaurants[i].CuisineType = $("#updateCuisinetype").val();
      this.restaurants[i].openningTime = $("#updateopenningtime").val();
      this.restaurants[i].image = $("#updatepicture-link").val();
      // store the id of the edited restaurent
      $(".update-btn").data("restaurant-id", id);
      this.displayAllRestaurants();
    }
  }
};

var saveData = function (id) {
  this.displayAllRestaurants();
};
var id_restaurant;

//event for upload data for editing
$(document).on("click", ".update-btn", function () {
  $(".update-rest").show();
  id_restaurant = $(this).data("id");

  for (let i = 0; i < class1.restaurants.length; i++) {
    if (class1.restaurants[i].id === id_restaurant) {
      //save the details in the array (update the new input value)
      $("#updatename").val(class1.restaurants[i].Name);
      $("#updatelocalisation").val(class1.restaurants[i].Localisation);
      $("#updateCuisinetype").val(class1.restaurants[i].CuisineType);
      $("#updateopenningtime").val(class1.restaurants[i].openningTime);
      $("#updatepicture-link").val(class1.restaurants[i].image);
    }
  }
});
$(document).on("click", ".remove-btn", function () {
  var restaurentsId = $(this).data("id");
  class1.removerestaurents(restaurentsId);
});

$(document).on("click", "#update-btn", function () {
  class1.UpdateRestaurant(id_restaurant);

  $(".save").show();
  $(".update-rest").hide();

  $(".update-btn").hide();
});

var class1 = restaurantslist();

class1.displayAllRestaurants();
