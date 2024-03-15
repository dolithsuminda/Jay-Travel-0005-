// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

//validate form input
function validateForm() {
    let w = document.forms["myForm"]["Fname"].value;
    if (w == "") {
      alert("Name must be filled out");
      return false;
    }
    let x = document.forms["myForm"]["Lname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["Emall"].value;
    if (y == "") {
      alert("Email must be filled out");
      return false;
    }

    let z = document.forms["myForm"]["Phone"].value;
    if (z == "") {
      alert("Description must be filled out");
      return false;
    }
  }

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})