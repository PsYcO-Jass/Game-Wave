const getElementbyId = (id) => document.getElementById(id);

console.log(">>>>>>>>>",getElementbyId("navBarToggle"));

// EVENT listeners
getElementbyId("hamBurger").addEventListener("click", function() {
    console.log("CLICK")
    getElementbyId("hamBurger").classList.toggle("d-none");
    getElementbyId("nav-bar").classList.remove('navBar')
    getElementbyId("closeHamBurger").classList.remove('d-none')
    getElementbyId("nav-bar").classList.toggle("navBar_active");
});

getElementbyId("closeHamBurger").addEventListener("click", function() {
    getElementbyId("nav-bar").classList.remove('navBar_active')
    getElementbyId("nav-bar").classList.add('navBar')
    getElementbyId("closeHamBurger").classList.add('d-none')
    getElementbyId("hamBurger").classList.remove("d-none");
});