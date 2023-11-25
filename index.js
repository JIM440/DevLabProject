// replace big image with small images when clicked
const bigImage = document.querySelector('.large-image-container > img')
const smallImages = document.querySelectorAll('.small-image > img')

smallImages.forEach(smallImage => {
    smallImage.addEventListener('click', ()=>{
        removeActiveClassParent(smallImages, 'active')
        smallImage.parentElement.classList.add('active')
        bigImage.src = smallImage.src
    })
})
// // full size image
// const fullscreen = document.querySelector('.expand')
// fullscreen.addEventListener('click', () => {
    
// })

// add reviews
const reviewContainer = document.querySelector('.add-review-container')

const addReview = document.querySelector('.add-review')

const closeReview = document.querySelector('.close-review')

addReview.addEventListener('click', () =>{
    reviewContainer.classList.add('active')
})
closeReview.addEventListener('click', () =>{
    reviewContainer.classList.remove('active')
})

// tabs for product page
const tabBtns = document.querySelectorAll('.tab-btn')
const tabContents = document.querySelectorAll('.tab-content')

tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
         removeActiveClass(tabBtns, 'active')
         removeActiveClass(tabContents, 'active')
        tabBtn.classList.add('active')
        document.querySelector(tabBtn.dataset.tabTarget).classList.add('active')
        })
})




// general functions
// remove active class
const removeActiveClassParent = (items, className)=>{
    items.forEach(item => {
        item.parentElement.classList.remove(className)
    });
}
const removeActiveClass = (items, className)=>{
    items.forEach(item => {
        item.classList.remove(className)
    });
}