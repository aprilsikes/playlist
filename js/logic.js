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
$(document).ready(function() {
  var getter = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/post",
    method: "POST",
    data: {goo: "bar"}
  });

  getter.done(function(payload) {
    // return response.data;
    console.log(payload);
  });
});
