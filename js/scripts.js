$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    const flavors = ["Chocolate", "Orange Sherbet", "Cookie's & Cream", "Strawberry", "Vanilla"]
    flavors.forEach(function(flavor) {
      $("ul").append("<li>" + flavor + "</li>");
    });
  });
  $("#form2").submit(function(event) {
    event.preventDefault();
    $("li").remove();
  });
});