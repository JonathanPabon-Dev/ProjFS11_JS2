!function(){var e=document.getElementById("goitLink"),n=document.getElementById("myModal"),t=document.querySelectorAll(".student"),d=Math.ceil(t.length/2),c=1;function o(e){var n=2*(e-1),d=n+2;t.forEach((function(e){e.style.display="none"}));for(var c=n;c<d;c++)t[c]&&(t[c].style.display="block");document.getElementById("currentPage").textContent="Page "+e}o(c),e.onclick=function(e){e.preventDefault(),n.classList.remove("is-hidden")},document.getElementsByClassName("close")[0].onclick=function(){n.classList.add("is-hidden")},window.onclick=function(e){e.target==n&&n.classList.add("is-hidden")},window.onkeydown=function(e){"Escape"===e.key&&n.classList.add("is-hidden")},document.getElementById("nextPage").onclick=function(){c<d?(o(++c),document.getElementById("prevPage").disabled=!1):document.getElementById("nextPage").disabled=!0},document.getElementById("prevPage").onclick=function(){c>1?(o(--c),document.getElementById("nextPage").disabled=!1):document.getElementById("prevPage").disabled=!0}}();
//# sourceMappingURL=index.c7ded620.js.map