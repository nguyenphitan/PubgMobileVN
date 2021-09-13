// Mobile
// page 3:
// contentPageThree
let map = document.querySelector('.contentPageThree')
let mapSlider = document.querySelector('.contentPageThree .threeItem1')

let pressed = false;
let startx;
let x;

map.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - mapSlider.offsetLeft;
    map.style.cursor = 'grabbing'
});

map.addEventListener('mouseenter', () => {
    map.style.cursor = 'grab'
});

map.addEventListener('mouseup', () => {
    map.style.cursor = 'grab'
});

window.addEventListener('mouseup', () => {
    pressed = false
});

map.addEventListener('mousemove', (e) => {
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX
    mapSlider.style.left = `${x - startx}px`;

    checkboundary()
});

function checkboundary() {
    let outer = map.getBoundingClientRect();
    let inner = mapSlider.getBoundingClientRect();

    if(parseInt(mapSlider.style.left) > 0) {
        mapSlider.style.left = '0px';
    }
    else if(inner.right < outer.right) {
        mapSlider.style.left = `-${inner.width - outer.width}px`
    }
}


