//1.- Defino get con promesas, arreglas llamada
/*
axios.get('https://api.themoviedb.org/3/movie/popular')
	.then((respuesta) => {
		console.log(respuesta.data.result[1].title)
	})
	.catch((error) => {
		console.log(error);
	})
*/

//2.- definimos una función asincrona llamada obtenerPeliculas
//el resultado de la petición asincrona lo guardes en respuesta
//en axios podemos pasar los parametros de la URL
//los headers nos va a permitir autentificarnos con el servidor, en este caso estoy utilizando un token.
//Si utilizo los token la api_key ya no es necesaria
//me tengo que identificar en la pagina https://developer.themoviedb.org/reference/intro/authentication#api-key-quick-start para obtener los valores de api key o los token
const obtenerPeliculas = async() => {
	try {
		const respuesta = await axios.get('https://api.themoviedb.org/3/movie/popular', {
			params: {
				// api_key: '192e0b9821564f26f52949758ea3c473',
				language: 'es-MX'
			},
			headers: {
				'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTJlMGI5ODIxNTY0ZjI2ZjUyOTQ5NzU4ZWEzYzQ3MyIsInN1YiI6IjYxODQyMWZlOGVkMDNmMDAyZDA4ZjZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nrCdKCx2dZQ7d0WaJpXJaPO_De2iP2rYg9bPon1O3V0'
			}
		})

		console.log(respuesta);
	} catch(error){
		console.log(error);
	}
	
}

//aqui es donde llamo a la funcin obtenerPeliculas
obtenerPeliculas();