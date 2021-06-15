function openNav(){
    document.getElementById('side-nav').style.width="250px"
}
function closeNav(){
    document.getElementById('side-nav').style.width="0"
}
function initMap() {
    const trzebnica = { lat: 51.372292, lng: 17.086189 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: trzebnica,
    });
    const marker = new google.maps.Marker({
      position: trzebnica,
      map: map,
    });
  }