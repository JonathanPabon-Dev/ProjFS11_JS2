// Obtener el enlace y el modal
var goitLink = document.getElementById("goitLink");
var modal = document.getElementById("myModal");
var studentList = document.querySelectorAll(".student"); // Obtener todos los elementos de estudiante

// Calcular el número total de páginas (asumiendo que hay 2 estudiantes por página)
var numPages = Math.ceil(studentList.length / 2);
var currentPage = 1;

// Mostrar los estudiantes para la página actual
function showStudents(page) {
  var start = (page - 1) * 2; // Índice de inicio del grupo de estudiantes para la página actual
  var end = start + 2; // Índice final del grupo de estudiantes para la página actual

  // Ocultar todos los estudiantes
  studentList.forEach(function(student) {
    student.style.display = "none";
  });

  // Mostrar solo los estudiantes para la página actual
  for (var i = start; i < end; i++) {
    if (studentList[i]) {
      studentList[i].style.display = "block";
    }
  }

  // Actualizar el número de página actual en el HTML
  document.getElementById("currentPage").textContent = "Page " + page;
}

// Mostrar la primera página al cargar el modal
showStudents(currentPage);

// Manejar el clic en el enlace GoIT Students
goitLink.onclick = function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  modal.style.display = "block";
}

// Obtiener el elemento de cierre del modal
var span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en el elemento de cierre, oculta el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Manejar clics en los botones de paginación
document.getElementById("prevPage").onclick = function() {
  if (currentPage > 1) {
    currentPage--;
    showStudents(currentPage);
    // Habilitar el botón "nextPage"
    document.getElementById("nextPage").disabled = false;
  } else {
    // Deshabilitar el botón "prevPage"
    document.getElementById("prevPage").disabled = true;
  }
};

document.getElementById("nextPage").onclick = function() {
  if (currentPage < numPages) {
    currentPage++;
    showStudents(currentPage);
    // Habilitar el botón "prevPage"
    document.getElementById("prevPage").disabled = false;
  } else {
    // Deshabilitar el botón "nextPage"
    document.getElementById("nextPage").disabled = true;
  }
};
