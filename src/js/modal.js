// Obtener elementos del modal y botones
var api_key = "f363c7f847ff3862e66e9336f55534d2";
var modal = document.getElementById("modal");
var modalTitle = document.getElementById("modal-title");
var modalOverview = document.getElementById("modal-overview");
var addToWatchedBtn = document.getElementById("add-to-watched");
var addToQueueBtn = document.getElementById("add-to-queue");


// Función para marcar una película como guardada o quitarla si ya está guardada
function toggleMovieSavedStatus(movieId) {
    var savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || {};
    if (savedMovies[movieId]) {
        delete savedMovies[movieId];
    } else {
        savedMovies[movieId] = true;
    }
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
}

// Función para agregar una película a la cola
function addToQueue(movieId) {
    var queue = JSON.parse(localStorage.getItem("queue")) || [];
    var index = queue.indexOf(movieId);
    if (index !== -1) {
        queue.splice(index, 1); // Eliminar la película de la lista
    } else {
        queue.push(movieId);
    }
    localStorage.setItem("queue", JSON.stringify(queue));
    console.log("Cola actualizada:", queue);
}


// Función para verificar si una película está guardada
function isMovieSaved(movieId) {
    var savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || {};
    return !!savedMovies[movieId];
}

// Mostrar el modal al hacer clic en una película
document.addEventListener("click", function(event) {
    if (event.target.matches("img")) {
        var img = event.target;
        var movieId = img.getAttribute("data-id");

        fetch(
                "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + api_key + "&language=en-US"
            )
            .then(response => response.json())
            .then(movieData => {
                modal.style.display = "block";
                modalTitle.textContent = movieData.title;
                modalOverview.textContent = movieData.overview;

                var isSaved = isMovieSaved(movieId);
                if (isSaved) {
                    addToWatchedBtn.style.backgroundColor = "orange";
                } else {
                    addToWatchedBtn.style.backgroundColor = "";
                }

                // Marcar o desmarcar la película al hacer clic en "Add to Watched"
                addToWatchedBtn.onclick = function() {
                    toggleMovieSavedStatus(movieId);
                    isSaved = isMovieSaved(movieId);
                    if (isSaved) {
                        addToWatchedBtn.style.backgroundColor = "orange";
                    } else {
                        addToWatchedBtn.style.backgroundColor = "";
                    }
                };

                // Agregar la película a la cola al hacer clic en "Add to Queue"
                addToQueueBtn.onclick = function() {
                    addToQueue(movieId);
                };
            })
            .catch(error => console.error(error));
    }
});

var closeModalBtn = document.getElementById("close-modal");
var modal = document.getElementById("modal");

function closeModal() {
    modal.style.display = "none";
}

closeModalBtn.addEventListener("click", closeModal);



function removeFromQueueList(movieId) {
    var queueList = JSON.parse(localStorage.getItem("queueList")) || [];
    var index = queueList.indexOf(movieId);
    if (index !== -1) {
        queueList.splice(index, 1);
    }
    localStorage.setItem("queueList", JSON.stringify(queueList));
    console.log("Queue List:", queueList);
}


// Agregar la película a la cola al hacer clic en "Add to Queue"
addToQueueBtn.onclick = function() {
    addToQueue(movieId);
    addToQueueBtn.style.backgroundColor = "orange";
    addToQueueList(movieId);
};

// Mostrar la lista de la cola por consola al cargar la página
window.onload = function() {
    var queueList = JSON.parse(localStorage.getItem("queueList")) || [];
    console.log("Queue List:", queueList);
};

initializeQueue();