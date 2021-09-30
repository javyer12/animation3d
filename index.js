const buttonCar = document.querySelector('#buttonCar');
const buttonBus = document.querySelector('#buttonBus')
const buttonMartillo = document.querySelector('#buttonMartillo');

const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__content--close')

//Car modal
buttonCar.addEventListener('click', () => {

    modal.classList.remove('hidden')
    modal.classList.add('visible')

})

//Bus Modal
buttonBus.addEventListener('click', () => {

    modal.classList.remove('hidden')
    modal.classList.add('visible')

})

//Martillo Modal
buttonMartillo.addEventListener('click', () => {

    modal.classList.remove('hidden')
    modal.classList.add('visible')

})

closeModal.addEventListener('click', () => {
console.log('cliked')
    modal.classList.remove('visible')
    modal.classList.add('hidden')

})


function openNav() {
    alert('hey')
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  alert('hey')

}
   

