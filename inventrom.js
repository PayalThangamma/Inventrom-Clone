function togNav() {
  var a = document.getElementById("myTogNav");
  var b = document.getElementById("togBtn");
  if (x.style.display === "block") {
  	b.innerHTML = "<i class='fa fa-bars fa-lg'></i>";
    a.style.display = "none";
  } else {
    b.innerHTML = "<i class='fa fa-times fa-lg' aria-hidden='true'></i>";
    a.style.display = "block";
  }
}