class Scroll {
    constructor({ element, top, unit }) {
        if(typeof element == 'string') {
            this.item = document.querySelector(element)
        }else if( element instanceof HTMLElement) {
            this.item = element
        }
        this.range = top
        this.unit = unit
        this.item.style.position = 'fixed'
        this.item.style.top = this.getUnit() + 'px'
        
        window.addEventListener('scroll', () => this.move())
    }
    
    getUnit() {
        if(this.unit == 'px') {
            return this.range > 0 ? this.range : 0
        }else if(this.unit == '%' || this.unit == undefined) {
            return window.innerHeight / 100 * this.range
        }
    }
    
    move() {
        // scrollY - Отдает колличество px проскроленных сверху от сайта
        
        this.size = this.getUnit()
        
       if(this.size - scrollY > 0) {
            this.item.style.top = this.size - scrollY + 'px'
       }else {
            this.item.style.top = 0
       }
    }
    
    
}

let myScroll = new Scroll({
    element: '.header__nav',
    top: 100,
})



class Hover {
    constructor(element) {
        this.item = document.querySelector(element)
        this.item.addEventListener('mouseover', () => this.move())
        this.width = this.item.offsetWidth 
        this.height = this.item.offsetHeight
    }
    
    move() {
        this.item.style.position = 'absolute';
        this.item.style.left = randNum(0,x) + 'px';
        this.item.style.top = randNum(0,y) + 'px';
    }
    
}

let item = new Hover('.header__content')

let y = window.innerHeight - item.height;
let x = window.innerWidth - item.width;



function randNum(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min)
}






