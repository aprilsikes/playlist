$(document).ready(function () {
  // $("#buttony").click(function() {
    var getter = $.ajax({
      url: "https://lit-fortress-6467.herokuapp.com/object",
      method: "GET",
      dataType: "json"
    });

    getter.done(function(response) {
      var newArray = [];
      for (var i = 0; i < response["results"].length; i++) {
        newArray.push(response["results"][i]);
      } console.log(newArray);
      // return newArray;

    });

    getter.fail(function() {
      console.log("Fail");
    });
  // });
});
