$(document).ready(function () {
  // $("#buttony").click(function() {
    var getter = $.ajax({
      url: "https://lit-fortress-6467.herokuapp.com/object",
      method: "GET",
      dataType: "json"
    });

    getter.done(function(response) {
      var newArray = [];
      // var covers = [];
      for (var i = 0; i < response["results"].length; i++) {
        newArray.push(response["results"][i]);
      }; console.log(newArray);
      // } console.log(newArray);
      // return newArray;
      // }; $("#allAlbums").append('<img src="'+image+'" style="width: 170px; height:170px;"/>');
      var resulty = newArray[i]["artist"];
      for (var i = 0; i < newArray.length; i++) {
        $("#albumLists").append("resulty");
      };
    });



    //   for (var i = 0; i < newArray.length; i++) {
    //     var coverShow = covers.push(newArray[i]["cover_art"]);
    //   }; $("#allAlbums").append('<img src="'+coverShow+'"style="width: 75px; height: 75px;"/>')
    // });
    getter.fail(function() {
      console.log("Fail");
    });
  // });
});
