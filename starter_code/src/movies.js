/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const turnHoursToMinutes = (moviesArray) => {
	return moviesArray.map(function(movie){
		var duration = 0;

		if(movie.duration.indexOf('h') > 0) {
			var time = movie.duration.split('h');

			duration = parseInt(time[0]) * 60;

			if(time.length > 1 && time[1].length > 0) {
				duration += parseInt(time[1].trim().replace('min', ''));
			}
		} else {
			duration = parseInt(movie.duration.replace('min', ''));
		};

		console.log(movie);
		console.log(duration);

		return Object.assign({}, movie, { duration: duration });
	});
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
