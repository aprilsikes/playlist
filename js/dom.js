$(document).ready(function () {
  // $("#buttony").click(function() {
    var getter = $.ajax({
      url: "https://lit-fortress-6467.herokuapp.com/object",
      method: "GET",
      dataType: "json"
    });

    getter.done(function(response) {
      var array = [];
      for (var i = 0; i < 3; i++) {
        var resultsNum = Math.floor( (Math.random() * response["results"].length) );
        var image = response["results"][resultsNum]["cover_art"];
        array.push(image);
      }
      // return array;
      console.log(array);
    });

    getter.fail(function() {
      console.log("Fail");
    });
  // });
});


// function getThreeImages (results) {
//   var array = [];
//   for (var i = 0; i < results.length; i++) {
//     if (array.length < 3) {
//       array.push(results[i]);
//     };
//   }; return array;
// };
//
// console.log(getThreeImages());
