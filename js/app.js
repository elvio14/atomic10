function openMenu(evt, submenu) {
    var i;
    var x = document.getElementsByClassName("submenu-list");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" clicked-highlight", "");
  }
  document.getElementById(submenu).style.display = "block";
  evt.currentTarget.className += " clicked-highlight";
  }

