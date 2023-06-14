let text = document.getElementById('text');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');
let treesLeft = document.getElementById('tree-left');
let treesRight = document.getElementById('tree-right');
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    gateLeft.style.translateY = 
    text.style.marginTop = value * 2 + 'px';
    treesLeft.style.left = value * -1.5 + 'px';
    treesRight.style.left = value * 1.5 + 'px';
    gateLeft.style.left = value * 0.4 + 'px';
    gateRight.style.left = value * -0.4 + 'px';
});
