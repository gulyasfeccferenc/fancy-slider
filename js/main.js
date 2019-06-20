const articles = document.querySelectorAll('article[data-item]');
const paginator = document.querySelectorAll('li[data-item]');
const SLIDE_INTERVAL = 3000;
var current = 0;

/**
 * Will remove all active class
 */
function resetSlide() {
  articles.forEach(v => {
    v.classList.remove('active');
  })
}

/**
 * This snippet in charge of sliding to the next image
 */
function slideImage() {
  let currentItem = articles[current];
  current = (current < articles.length - 1) ? current : -1;

  let next = articles[++current];

  if (currentItem) {
    currentItem.classList.remove('active');
  }
  if (next) {
    next.classList.add('active');
  }
}

/**
 * Pagination will be handled here
 *
 * @param e - Event
 */
function handlePaginatorClick(e) {
  let newItemNumber = e.target.getAttribute('data-item') - 1;

  if (newItemNumber != null && (0 <= newItemNumber && newItemNumber <= articles.length)) {
    current = newItemNumber;
    resetSlide();
    articles[current].classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const timer = setInterval(slideImage, SLIDE_INTERVAL);
});

paginator.forEach(function (e) {
  e.addEventListener("click", function (e) {
    handlePaginatorClick(e);
  });
});
