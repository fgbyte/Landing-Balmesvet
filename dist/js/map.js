let marker, map;

function initMap() {

    //define position
    const position = {
        lat: 41.39791869289706,
        lng: 2.1512747415398557
    }

    //map printed on the page
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
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