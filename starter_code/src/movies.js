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

		return Object.assign({}, movie, { duration: duration });
	});
}


// Get the average of all rates with 2 decimals 
const ratesAverage = (moviesArray) => {
	var total = moviesArray.reduce(function(acc, item){
		return (item.rate != '') ? acc + parseFloat(item.rate) : acc;
	}, 0);

	return parseFloat(total / moviesArray.length);
}


// Get the average of Drama Movies
const dramaMoviesRate = (moviesArray) => {
	var dramaMoviesArray = moviesArray.filter(function(item){
		return item.genre.indexOf('Drama') >= 0;	
	});

	var total = dramaMoviesArray.reduce(function(acc, item){
		return (item.rate !== '') ? acc + parseFloat(item.rate) : acc;
	}, 0);

	return (dramaMoviesArray.length <= 0) ? undefined : parseFloat((total / dramaMoviesArray.length).toFixed(2));
}


// Order by time duration, in growing order
const orderByDuration = (moviesArray) => {
	return moviesArray.sort(function(a, b) {
		if(a.duration == b.duration) {
			return a.title.localeCompare(b.title);
		}

		return a.duration - b.duration;
	});
}


// How many movies did STEVEN SPIELBERG
const howManyMovies = (moviesArray) => {
	if(moviesArray.length == 0) return undefined;

	var dramaMoviesArray = moviesArray.filter(function(item){
		return item.genre.indexOf('Drama') >= 0 && item.director == 'Steven Spielberg';
	});

	return `Steven Spielberg directed ${dramaMoviesArray.length} drama movies!`;
}


// Order by title and print the first 20 titles
const orderAlphabetically = (moviesArray) => {
	var titledMovies = moviesArray.map(function(movie){
		return movie.title;
	});

	var sortedMovies = titledMovies.sort(function(a, b) {
		return a.localeCompare(b);
	});

	sortedMovies.splice(20, sortedMovies.length);

	return sortedMovies;
}


// Best yearly rate average
const bestYearAvg = (moviesArray) => {
	if(moviesArray.length == 0) return undefined;

	let years = [];

	moviesArray.forEach(function(item) {
		if(years.indexOf(item.year) < 0){
			years.push(item.year);
		}
	});

	let yearsRate = years.map(function(year){
		let yearMovies = moviesArray.filter(function(movie){
			return movie.year == year;
		});

		let yearTotal = yearMovies.reduce(function(acc, item){
			return acc + parseFloat(item.rate);
		}, 0);

		let yearAvg = yearTotal / yearMovies.length;

		return {
			year: year, rate: yearAvg
		};
	});

	yearsRate.sort(function(a, b){
		if(a.rate == b.rate) {
			return a.year - b.year;
		}

		return b.rate - a.rate;
	});

	return `The best year was ${yearsRate[0].year} with an average rate of ${yearsRate[0].rate}`;
}

