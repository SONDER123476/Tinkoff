
/*const sectionlist = document.querySelector('')*/
const list = document.querySelector('.ics-white-panel');

list.addEventListener('click', (evt)=>{
    evt.preventDefault();
    const contetnt = evt.target.parentNode.nextElementSibling.lastElementChild;
    contetnt.classList.toggle('visible');
});
