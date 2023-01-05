

// Scroll w/ click functionality



const coffeeUpArrow = document.querySelector('.coffee.slot .guide.up')
const coffeeDownArrow = document.querySelector('.coffee.slot .guide.down')

const pastryUpArrow = document.querySelector('.pastry.slot .guide.up')
const pastryDownArrow = document.querySelector('.pastry.slot .guide.down')

const coffeeSlot = document.querySelector('.coffee.slot');
const pastrySlot = document.querySelector('.pastry.slot');

const slotHeight = coffeeSlot.offsetHeight;
let coffeeSlotScrollTop = coffeeSlot.scrollTop;
let pastrySlotScrollTop = coffeeSlot.scrollTop;

const coffeeOptionQty = document.querySelectorAll('.coffee.slot article').length;

let coffeeScrollStart = 0;



coffeeDownArrow.addEventListener('click', function() {
    checkSlotScroll('down', 'coffee')
})
coffeeUpArrow.addEventListener('click', function() {
    checkSlotScroll('up', 'coffee')
})


pastryDownArrow.addEventListener('click', function() {
    checkSlotScroll('down', 'pastry')
})
pastryUpArrow.addEventListener('click', function() {
    checkSlotScroll('up', 'pastry')
})



coffeeSlot.addEventListener('scroll', function() {
    coffeeSlotScrollTop = coffeeSlot.scrollTop;
})

pastrySlot.addEventListener('scroll', function() {
    pastrySlotScrollTop = pastrySlot.scrollTop;
})



function checkSlotScroll(side, type) {

    if(type == 'coffee') {
        if(side == 'down') {
            coffeeSlot.scrollTop = coffeeSlotScrollTop + slotHeight
        } else if(side == 'up') {
            coffeeSlot.scrollTop = coffeeSlotScrollTop - slotHeight
        }
    } else if(type == 'pastry') {
        if(side == 'down') {
            pastrySlot.scrollTop = pastrySlotScrollTop + slotHeight
        } else if(side == 'up') {
            pastrySlot.scrollTop = pastrySlotScrollTop - slotHeight
        }
    }
}


// const subscriptionBt = document.querySelector('.subscribe_bt')
// const subscriptionStepsCtnr = document.querySelector('.subscription_steps_ctnr');

// const returnBt = document.querySelector('.return_bt')

// const step1 = document.querySelector('.subscription_steps_ctnr .step:nth-child(1)')
// const step2 = document.querySelector('.subscription_steps_ctnr .step:nth-child(2)')


// subscriptionBt.addEventListener('click', function() {
//     subscriptionStepsCtnr.scrollLeft = window.innerWidth

//     setTimeout(() => {
//         subscriptionStepsCtnr.style.maxHeight = `${step2.scrollHeight}` + 'px'
//     }, 700);
// })
