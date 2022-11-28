//Open the modal 
const modalButton = document.querySelector('.jsModalButton');

modalButton.addEventListener('click', event => {
    document.body.classList.add('modal-is-open')
})

//Close the modal

const modalCloseButton = document.querySelector('.jsModalClose')

modalCloseButton.addEventListener('click', event => {
    document.body.classList.remove('modal-is-open')
})

//detect whether a user has clicked outside of the modal
const modalOverlayClick = document.querySelector('.modal-overlay')

modalOverlayClick.addEventListener('click', event => {
   if (!event.target.closest('.modal')) {
    //close modal
    document.body.classList.remove('modal-is-open')
   }
})