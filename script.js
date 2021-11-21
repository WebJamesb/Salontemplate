function initMap() {
    const uluru = { lat: 53.235046, lng: -1.421629 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: uluru, 
    });

    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}