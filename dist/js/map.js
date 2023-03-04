let marker, map;

function initMap() {

    //define position
    const position = {
        lat: 39.4697500,
        lng: -0.3773900
    }

    //map printed on the page
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: position
    })

    //map marker
    const marker = new google.maps.Marker({
        position,
        map,
        title: 'Posicion Inicial'
    })


    //* Accediendo a la Geolocalizacion del Navegador *//
    //1. Obtener la gelolocalizacion
    //2. que se ponga el marker en nuestra position
    // geoPosiciona()
}