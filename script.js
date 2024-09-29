
const menuItems = document.querySelectorAll('.menu-item');
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // تحميل العناصر المخزنة مسبقًا
const counter = document.querySelector('.counter span');
const counterElement = document.querySelector('.counter');
const clearCartButton = document.getElementById('clearCart'); // تحديد الزر

function updateCounter() {
  counter.textContent = `عدد العناصر المحددة : ${cartItems.length}`;
  counterElement.style.display = cartItems.length > 0 ? 'block' : 'none';

}

function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCounter();
  alert(`${itemName} تمت إضافته إلى السلة`);
}




menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const itemName = item.dataset.name;
    const itemPrice = item.dataset.price;
    addToCart(itemName, itemPrice);
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

