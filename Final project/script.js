function openNav(){
    document.getElementById('side-nav').style.width="250px"
}
function closeNav(){
    document.getElementById('side-nav').style.width="0"
}
function initMap() {
    const komorowo = { lat: 51.372292, lng: 17.086189 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: komorowo,
    });
    const marker = new google.maps.Marker({
      position: komorowo,
      map: map,
    });
  }
  