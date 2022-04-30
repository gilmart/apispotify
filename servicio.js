//PASOS PARA CONSUMIR UN API CON JS PURO

// PASO1: PARA DONDE VOY?

const URI="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=US"

// PASO2: QUE VAS A HCER POR ALLA? 
// CONSTRUIR LOS PARAMETROS DE  LA PETICION
// - METODO
// - CABECERA
// -EL BODY O CUERPO (SI ES NECESARIO)

const TOKEN = "Bearer BQBEGfffBOCZ5K5qKiF8LhSpxlUH_VV93rdGPrttIg37_kUuazQ6Ya6d9gku1858B4oT-j_XYHE3lPUY2LsqBZ-znQnR-wyFc5FSFxz4qt_Qo9_3zsT43Cb-UObU_FsQVLRlXCwSBqNVUy2GJoS-Zrtl3OqGE4g"

let parametrosPeticion = {
    method:"GET",
    headers: {Authorization: TOKEN}
}

//PASO3: ACTIVAR LA PETICION/CONSUMIR EL API/IR AL SERVIDOR A PEDIR LA RESPUESTA - PEDIR TAXI 
//FETCH: EVOLUCION DE AJAX. CALLBACK: FUNCION ESPECIAL Q PERMITE HACE MAS DE 2 COSAS. ASYN AWAY

fetch(URI,parametrosPeticion)
.then(function(respuesta){
    return(respuesta.json()) //VERIFICO QUE RESPUESTA ESTÉ EN JSON
})
.then(function(respuesta){ //HAGO LO Q QUIERA CON LA RESPUESTA
    console.log(respuesta.tracks.forEach(function(cancion){
       console.log(cancion.preview_url)
       console.log(cancion.album.images[0].url)
       console.log(cancion.name)
       console.log(cancion.popularity)
    }))
})
.catch(function(respuesta){
    console.log(respuesta);
})