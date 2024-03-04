var api_key = "f363c7f847ff3862e66e9336f55534d2";

fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        api_key +
        "&language=en-US"
    )
    .then((response) => response.json())
    .then((genreData) => {
        fetch(
                "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
                api_key +
                "&language=en-US&page=1"
            )
            .then((response) => response.json())
            .then((data) => {
                var movieContainer = document.getElementById("movie-container");

                data.results.forEach((movie) => {
                    var movieLi = document.createElement("li");

                    var img = document.createElement("img");
                    img.src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
                    img.setAttribute("data-id", movie.id); // Agrega el ID de la película como un atributo data en la imagen
                    movieLi.appendChild(img);

                    var title = document.createElement("p");
                    title.className = "movie-title";
                    title.textContent = movie.title;
                    movieLi.appendChild(title);

                    var mainGenres = movie.genre_ids.slice(0, 2).map((id) => {
                        return genreData.genres.find((genre) => genre.id === id).name;
                    });

                    var releaseYearAndGenres = document.createElement("p");
                    releaseYearAndGenres.className = "release-year-genres";
                    releaseYearAndGenres.textContent =
                        mainGenres.join(", ") + " | " + movie.release_date.substring(0, 4);
                    movieLi.appendChild(releaseYearAndGenres);
                    movieContainer.appendChild(movieLi);
                });
            })
            .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));