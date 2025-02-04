export default class Slide {
  constructor(slide,wrapper){
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }
  onStart(event){
    event.preventDefault();
  }

  onMove(event){

  }

  onEnd(event){
    this.wrapper.removeEventListener('mousedown', this.onStart);
  }
  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  bindEvents(){
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }
  init(){
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}