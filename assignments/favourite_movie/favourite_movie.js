const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    if (operation!=="remove"){
        movies.push(movie)
    }else{
        movies.pop()
    }
    return movies
}

module.exports = favouriteMovie;
