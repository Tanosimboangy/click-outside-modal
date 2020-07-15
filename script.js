const cardButtons = document.querySelectorAll('.card button');

const modalInner = document.querySelector('.modal-inner');

const modalOuter = document.querySelector('.modal-outer'); 

const handleCardButtonClick = (event) => {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const name = document.querySelector('h2').textContent;

    modalInner.innerHTML = `
    <img height="600" width="600" src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}<p/>
    `;

    // show the modal
    modalOuter.classList.add('open');
}
const closeModal = () => {
    modalOuter.classList.remove('open');
}
modalOuter.addEventListener('click', event => {
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
        modalOuter.classList.remove('open'); 
    }
});
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
})
cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick ));

const newButton = document.querySelector('.openModal');
const handleButton = () => {
    modalInner.innerHTML = `
    <div class="card">
        <h1>HELLO EVERYONE</h1>
        <p>Thank you for your last email, it was so nice ot see where you are now and how is eveything going there<p/>
        <img src="https://picsum.photos/" alt="beautiful"/>
    </div>
    `;
    modalOuter.classList.add('open');
}

newButton.addEventListener('click', handleButton);


