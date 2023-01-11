const openModal = document.querySelector('.open__modal');
const closeModal = document.querySelector('.modal_close');
const modal = document.querySelector('.modal');


openModal.addEventListener('click', ()=> {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close()
})

modal.addEventListener('click', (e)=> {
    if(e.target === modal) {
        modal.close()
    };
})
