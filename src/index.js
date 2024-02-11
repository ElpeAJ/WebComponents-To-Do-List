class ToDos extends HTMLElement{
  constructor(){
    super();
    this.innerHTML = `${this.getAttribute('name')}`;
  }

}

window.customElements.define('list-item', ToDos);

// function changeColor(){
//   this.textContent = this.textContent === '✅' ? " ": '✅'
// ;}
const liButton = document.querySelector('.button');
liButton.addEventListener('click', changeColor);