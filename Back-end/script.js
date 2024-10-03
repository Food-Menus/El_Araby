const menuItems = document.querySelectorAll('.menu-item');
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const counter = document.querySelector('.counter span');
const counterElement = document.querySelector('.counter');
const clearCartButton = document.getElementById('clearCart');

function updateCounter() {
    counter.textContent = `عدد العناصر المحددة : ${cartItems.length}`;
    counterElement.style.display = cartItems.length > 0 ? 'block' : 'none';
}

function addToCart(itemName , itemprice) {
    cartItems.push({name: itemName , price: itemprice});
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCounter();
    alert(`${itemName} تمت إضافته إلى السلة`);
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // الحصول على قيمة النص داخل h4
        const itemName = item.querySelector('h4').textContent;
        const itemprice = item.querySelector('p').textContent;
        // إضافة العنصر إلى السلة مع قيمة النص
        addToCart(itemName , itemprice);
    });
});

// تحديث العداد عند تحميل الصفحة
updateCounter();


// دالة لتحديث قيم البيانات
function updateDataAttributes() {
  menuItems.forEach(item => {
    // الحصول على عناصر h4 داخل العنصر الحالي
    const h4Elements = item.querySelectorAll('h4');
    // تعيين قيم البيانات
    item.dataset.name = h4Elements[0].textContent;
    item.dataset.price = h4Elements[1].textContent;
  });
}

// استدعاء الدالة لتحديث البيانات
updateDataAttributes();

///////////////////////////////////
///////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////









// const menuItems = document.querySelectorAll('.menu-item');
// const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
// const counter = document.querySelector('.counter span');
// const counterElement = document.querySelector('.counter');
// const clearCartButton = document.getElementById('clearCart');

// function updateCounter() {
//     counter.textContent = `عدد العناصر المحددة : ${cartItems.length}`;
//     counterElement.style.display = cartItems.length > 0 ? 'block' : 'none';
// }

// function addToCart(item) {
//     cartItems.push(item);
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     updateCounter();
//     alert(`${item} تمت إضافته إلى السلة`);
// }

// menuItems.forEach(item => {
//     item.addEventListener('click', () => {
//         // الحصول على قيمة النص داخل h4
//         const itemName = item.querySelector('h4').textContent;
//         // إضافة العنصر إلى السلة مع قيمة النص
//         addToCart(itemName);
//     });
// });

// // تحديث العداد عند تحميل الصفحة
// updateCounter();

