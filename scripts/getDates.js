const copyright_year = document.getElementById("year");

const dateY = new Date().getFullYear();

copyright_year.innerHTML = dateY;


const last_modified = document.getElementById("lastModified");

const dateTime = new Date().toLocaleString();;

last_modified.innerHTML = dateTime;


