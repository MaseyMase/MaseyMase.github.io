/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function initMap(){
  //map options
  var options = {
    zoom:9,
    center:{lat:52.37783, lng:4.87995}
  }
  //new map
  var map = new google.maps.Map(document.getElementById('map'), options);


  //add marker
  var marker = new google.maps.Marker({
    position:{lat:52.37783, lng:4.87995},
    map:map,
    icon: {
        url: "https://pre05.deviantart.net/4c9a/th/pre/i/2011/230/7/c/goku_chibi_by_maffo1989-d470max.png",
        scaledSize: new google.maps.Size(32, 32) // pixels
    }

  });

  var infoWindow = new google.maps.infoWindow({
    content: '<h1>MaseyMase</h1>'
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
