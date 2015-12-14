$(document).ready(function () {
  // $("#buttony").click(function() {
    var getter = $.ajax({
      url: "https://lit-fortress-6467.herokuapp.com/object",
      method: "GET",
      dataType: "json"
    });

    getter.done(function(response) {
      var array = []; //shuffleTracks splash page
      for (var i = 0; i < 3; i++) {
        var resultsNum = Math.floor( (Math.random() * response["results"].length) );
        var image = response["results"][resultsNum]["cover_art"];
        // array.push(image);
        $("#imagine").append('<img src=images/' + image + ' style="width: 170px; height: 170px;"/>');
      };

      var albumDiv = [];
      for (var i = 0; i < response["results"].length; i++) {
        var coverArt = response["results"][i]["cover_art"];
        var albumId = response["results"][i]["id"];
        albumDiv.push(coverArt);
        $("#allAlbums").append('<img id=" ' + albumId[i] + ' "style="width: 75px; height: 75px;" src=images/' + albumDiv[i] + '></img>');
      };



    });



    getter.fail(function() {
      console.log("Fail");
    });
  // });
});
