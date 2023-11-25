// replace big image with small images when clicked
const bigImage = document.querySelector('.large-image-container > img')
const smallImages = document.querySelectorAll('.small-image > img')

smallImages.forEach(smallImage => {
    smallImage.addEventListener('click', ()=>{
        removeActiveClass(smallImages, 'active')
        smallImage.parentElement.classList.add('active')
        bigImage.src = smallImage.src
    })
})







// remove active class
const removeActiveClass = (items, className)=>{
    items.forEach(item => {
        item.parentElement.classList.remove(className)
        console.log(className);
    });
}