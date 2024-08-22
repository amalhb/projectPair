/*function makerestaurant(
  Restaurantbuffet,
  Bistrot,
  Foodtruck,
  Restaurantdespécialités
) {
  return {
    Restaurantbuffet: Restaurantbuffet,
    Bistrot: Bistrot,
    Foodtruck: Foodtruck,
    Restaurantdespécialités,

    id: id(),
  };
}
  */
///////////////////////////////////////////
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

///////////////////////////////////////////////////////////////
var restaurantslist = function () {
  return {
    numberOfrestaurants: 0,
    restaurants: [],
    addrestaurant: addrestaurant,
    removeRestaurant: removerestaurents,
    displayAllRestaurants: displayAllRestaurants,
    // UpdateRestaurant: UpdateRestaurant,
  };
};
//////////////////////////////////////////////////////
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
var addrestaurant = function () {
  var Name = $("#name").val();
  var Localisation = $("#localisation").val();
  var CuisineType = $("#Cuisinetype").val();
  var openningTime = $("#openningtime").val();
  var image = $("#IMAGE").val();

  this.restaurants.push(
    makerestaurant(Name, Localisation, CuisineType, openningTime, image)
  );
  this.numberOfrestaurants = this.restaurants.length;
};

// events
$("#add").on("click", function () {
  class1.addrestaurant();
});
///////////////
// $(document).ready(function () {
//   $("#add").on("click", function () {
//     $(".form-container").show();
//   });

//   $(document).on("click", ".cancel-btn", function () {
//     $(".form-container").hide();
//   });
// });
/////////////////////////////////////////////////////////////////////////////////
var displayAllRestaurants = function () {
  $("#restaurantslist").empty();
  for (var i = 0; i < this.restaurants.length; i++) {
    $("#restaurantslist").append(
      `<div class="rest" data-id="${this.restaurents[i].id}">
          <p>Name: ${this.restaurents[i].Name}</p>
          <p>:Localisation ${this.restaurents[i].Localisation}</p>
          <p>CuisineType: ${this.restaurents[i].CuisineType}</p>
          <p>:openningTime ${this.restaurents[i].openningTime}</p>
          <p>: image ${this.restaurents[i].image}</p>
          <button class="remove-btn" data-id="${this.restaurents[i].id}">Remove rest</button>
        </div>`
    );
  }
};
////////////////
// Immediately display all restaurants after adding a new one

/////////////////////////////////////////////////////////////////////
var removerestaurents = function (id) {
  for (let i = 0; i < this.restaurents.length; i++) {
    if (this.restaurents[i].id === id) {
      this.restaurents.splice(i, 1);
      console.log(this.restaurents);
    }
  }
  this.numberOfrestaurants = this.restaurents.length;
  this.displayAllRestaurants();
};
/////////////////////////////////
// Add event listener for remove buttons
$(".remove-btn").on("click", function () {
  var restaurentsId = $(this).data("id");
  class1.removerestaurents(restaurenttId);
});
var class1 = restaurantslist();

class1.displayAllRestaurants();

var class1 = restaurantslist();
