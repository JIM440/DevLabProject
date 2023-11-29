// replace big image src when small image is clicked
const bigImages = $('.large-image-container > img');
const smallImages = $('.small-image > img');

smallImages.each((index, smallImage) => {
  $(smallImage).on('click', () => {
    removeActiveClassParent(smallImages, 'active');
    removeActiveClass(bigImages, 'visible');
    $(smallImage).parent().addClass('active');

    bigImages.each((idx, bigImage) => {
      if ($(bigImage).attr('src') == $(smallImage).attr('src')) {
        $(bigImage).addClass('visible');
      }        

        var translateVal = index * -100;
        var newTranslate = 'translateX('+ translateVal + '%)'
        $(bigImage).css('transform', newTranslate)
    });
  });
});

// wishlist
const addWishlist = $('.add-wishlist');

addWishlist.on('click', () => {
  addWishlist.toggleClass('active');
});

// tabs for product page
const tabBtns = $('.tab-btn');
const tabContents = $('.tab-content');

tabBtns.each((index, tabBtn) => {
  $(tabBtn).on('click', () => {
    removeActiveClass(tabBtns, 'active');
    removeActiveClass(tabContents, 'active');
    $(tabBtn).addClass('active');
    $($(tabBtn).data('tabTarget')).addClass('active');
  });
});

// rating, updated star color when clicked
const stars = $('.add-review-form .stars > i');

stars.each((index, star) => {
  $(star).on('click', () => {
    stars.each((preIdx, preStar) => {
      if (preIdx <= index) {
        $(preStar).addClass('active');
      } else {
        $(preStar).removeClass('active');
      }
    });
  });
});

// add reviews
const reviewContainer = $('.add-review-container');
const showReviewContainer = $('.add-review');
const closeReviewContainer = $('.close-review');

showReviewContainer.on('click', () => {
  reviewContainer.addClass('active');
});

closeReviewContainer.on('click', () => {
  const textareaReview = $('.add-review-form textarea');
  reviewContainer.removeClass('active');
  removeActiveClass(stars, 'active');
  textareaReview.val('');
});


//
// add review element
// 

const reviewForm = document.querySelector('.add-review-form')
const submitReview = document.querySelector('.add-review-form button')
// form on submit
reviewForm.addEventListener('submit', (e)=>{
// prevent form default behaviour
e.preventDefault()
const reviewStarsSubmit = document.querySelectorAll('form .bi-star-fill.active')
const textareaReviewSub = document.querySelector('.add-review-form textarea');

if(reviewStarsSubmit.length == 0){
  console.log("no star rating chosen");
}

else{
// user profile
// user name
const userName = document.createElement("p")
userName.innerText = 'Maja Salvador'
userName.classList.add('name')
// user letter
const userLetter = document.createElement('div')
userLetter.innerText = userName.innerText[0]
userLetter.classList.add('letter')
// add to user profile
const userProfile = document.createElement('div')
userProfile.classList.add('user-details')
userProfile.append(userLetter, userName)


// rating text
  const description = document.createElement('p')
  description.innerText = textareaReviewSub.value
  description.classList.add('rating-text')

// date rated
const currentDate = new Date()
  const dateRated = document.createElement('p')
  dateRated.innerText = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`
  dateRated.classList.add('date-rated')
  
  // number of stars
  const stars = document.createElement('div')
  // create actve star elements
for (let i = 0; i < reviewStarsSubmit.length; i++){
  var star = document.createElement('i')
  star.classList.add('bi')
  star.classList.add('bi-star-fill')
  stars.append(star)
}
// create inactive star elements
for (let i = 0; i < 5 - reviewStarsSubmit.length; i++){
  var star = document.createElement('i')
  star.classList.add('bi')
  star.classList.add('bi-star-fill')
  star.classList.add('inactive')
  stars.append(star)
}
stars.classList.add('stars-review')

// rating
const rating = document.createElement('div')
rating.classList.add('rating')
rating.append(stars, dateRated)

const ratingContent = document.createElement('div')
ratingContent.classList.add('rating-content')
const reviewBox = document.createElement('div')
reviewBox.classList.add('rating-review-box')
// add children to rated content

ratingContent.append(rating, description)

// add children to rated box

reviewBox.append(userProfile, ratingContent)

const ratingReviewContainer = document.querySelector('.rating-review-container')
ratingReviewContainer.appendChild(reviewBox)

alert('review added')

  const textareaReview = $('.add-review-form textarea');
  reviewContainer.removeClass('active');
  removeActiveClass(stars, 'active');
  textareaReview.val('');
}

})

// const ratingReviewContainer = $('.rating-review-container')








// general functions
// remove active class
const removeActiveClassParent = (items, className) => {
  items.each((index, item) => {
    $(item).parent().removeClass(className);
  });
};

const removeActiveClass = (items, className) => {
  items.each((index, item) => {
    $(item).removeClass(className);
  });
};