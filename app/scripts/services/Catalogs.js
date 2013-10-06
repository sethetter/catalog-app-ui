'use strict';

angular.module('catalogApp')
  .service('Catalogs', function Catalogs() {
    var Catalogs = {};

    Catalogs.find = function () {
      return [
        {
          "name": "Item 1",
          "description": "Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah",
          "imageUrl": "http://i01.i.aliimg.com/wsphoto/v0/658903483/Baby-clothes-spring-and-autumn-summer-super-man-style-romper-newborn-clothing-summer-baby-bodysuit-male.jpg"
        },
        {
          "name": "Item 1",
          "description": "Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah",
          "imageUrl": "http://image.dhgate.com/albu_271894335_00-1.0x0/baby-clothes-girl-dresses-abbigliamento-girls.jpg"
        },
        {
          "name": "Item 1",
          "description": "Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah",
          "imageUrl": "http://cdn1.disneybaby.com/images/2012/07/Baby-Activity-Book.jpg"
        },
        {
          "name": "Item 1",
          "description": "Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah",
          "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWl9QZGjGqfXPa9bnYOgoulCq6K5jhf4YzyyqENqgDTKOvSqBacg"
        }
      ];
    }

    return Catalogs;
  });