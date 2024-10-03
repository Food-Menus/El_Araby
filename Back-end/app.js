const mobile = document.querySelector('.menu-toggle');
const mobileOff = document.querySelector('.menu-off');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function() {
  mobile.classList.toggle("is-active");
  mobileLink.classList.toggle("active");
});
mobileOff.addEventListener("click", function() {
  mobile.classList.remove("is-active");
  mobileLink.classList.remove("active");
});

const highlightWrapper = document.querySelector('.highlight-wrapper');
const highlightCards = document.querySelectorAll('.highlight-card');
let isDragging = false;
let startX;
let scrollLeft;

highlightWrapper.addEventListener('mousedown', handleStart);
highlightWrapper.addEventListener('touchstart', handleStart);
highlightWrapper.addEventListener('mousemove', handleMove);
highlightWrapper.addEventListener('touchmove', handleMove);
highlightWrapper.addEventListener('mouseup', handleEnd);
highlightWrapper.addEventListener('touchend', handleEnd);

function handleStart(e) {
  isDragging = true;
  if (e.type === 'touchstart') {
    startX = e.touches[0].clientX;
  } else {
    startX = e.clientX;
  }
  scrollLeft = highlightWrapper.scrollLeft;
}
function handleMove(e) {
  if (!isDragging) return;
  if (e.type === 'touchmove') {
    e.preventDefault(); // لمنع التمرير الطبيعي للصفحة
    highlightWrapper.scrollLeft = scrollLeft - (e.touches[0].clientX - startX);
  } else {
    highlightWrapper.scrollLeft = scrollLeft - (e.clientX - startX);
  }
}
function handleEnd() {
  isDragging = false;
}


const scrollableContainer = document.querySelector('.filter-wrapper');
const cards = document.querySelectorAll('.filter-card');
let isScrolling = false;
let initialTouchPosition;
let scrollPosition;

scrollableContainer.addEventListener('mousedown', handleScrollStart);
scrollableContainer.addEventListener('touchstart', handleScrollStart);
scrollableContainer.addEventListener('mousemove', handleScrollMove);
scrollableContainer.addEventListener('touchmove', handleScrollMove);
scrollableContainer.addEventListener('mouseup', handleScrollEnd);
scrollableContainer.addEventListener('touchend', handleScrollEnd);

function handleScrollStart(event) {
  isScrolling = true;
  if (event.type === 'touchstart') {
    initialTouchPosition = event.touches[0].clientX;
  } else {
    initialTouchPosition = event.clientX;
  }
  scrollPosition = scrollableContainer.scrollLeft;
}
function handleScrollMove(event) {
  if (!isScrolling) return;
  if (event.type === 'touchmove') {
    event.preventDefault();
    scrollableContainer.scrollLeft = scrollPosition - (event.touches[0].clientX - initialTouchPosition);
  } else {
    scrollableContainer.scrollLeft = scrollPosition - (event.clientX - initialTouchPosition);
  }
}
function handleScrollEnd() {
  isScrolling = false;
}



var scrolling = true;
var currentIndex = 0; 
var stepFilter;
var step ; 

$(window).on('resize', function() {
    step = $(window).width() ; // نعرض 4 عناصر في كل مرة
}); 
$(window).trigger('resize');
$(".back").click(function(e) {
    e.preventDefault();
    currentIndex = Math.max(0, currentIndex - 1); // تأكد أن المؤشر لا يقل عن صفر
    $(".highlight-wrapper").animate({
        scrollLeft: currentIndex * step 
    });
});
$(".next").click(function(e) {
    e.preventDefault();
    currentIndex = Math.min(currentIndex + 1, $(".highlight-card").length - 1); // تأكد أن المؤشر لا يتجاوز عدد العناصر
    $(".highlight-wrapper").animate({
        scrollLeft: currentIndex * step
    });
});
$(window).on('resize', function() {
    stepFilter = $(window).width()  ; // نعرض 4 عناصر في كل مرة
});
$(window).trigger('resize');
$(".back-menus").bind("click" , function(e){
    e.preventDefault();
    currentIndex = Math.max(0, currentIndex - 1);
    $(".filter-wrapper").animate({
        scrollLeft: currentIndex * step 
    })
});
$(".next-menus").bind("click" , function(e){
    e.preventDefault();
    currentIndex = Math.min(currentIndex + 1, $(".highlight-card").length - 1); // تأكد أن المؤشر لا يتجاوز عدد العناصر
    $(".filter-wrapper").animate({
        scrollLeft: currentIndex * step 
    });
});


const button = document.getElementById('myButton');
const messageBox = document.getElementById('messageBox');

button.addEventListener('click', () => {
  messageBox.classList.toggle('hidden');
  messageBox.classList.toggle('show');
});

menuBtn.addEventListener("click", (e) => {
navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});









