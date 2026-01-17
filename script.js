// تفعيل الموقع عند التحميل
document.addEventListener('DOMContentLoaded', function () {

    /* ===============================
       السنة الحالية في التذييل
    =============================== */
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ===============================
       قائمة الجوال
    =============================== */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            mainNav.classList.toggle('active');
        });
    }

    /* ===============================
       التنقل السلس
    =============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const targetElement = document.querySelector(href);
            if (!targetElement) return;

            e.preventDefault();
            mainNav.classList.remove('active');

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    /* ===============================
       توليد قسم الحقائب النسائية
    =============================== */
    const womenContainer = document.getElementById("womenProducts");

    if (womenContainer) {

        const imagePath = "Image/imageWomen/";
        const imagePrefix = "IMG-20260115-WA";

        const startNumber = 5;   // أول صورة
        const endNumber = 16;    // آخر صورة

        // أسعار أول 12 منتج
        const prices = [
            11000, 14000, 6000, 11500,
            12000, 7500, 8000, 6000,
            12000, 11000, 10000, 11000
        ];

        const defaultPrice = 8000;

        for (let i = startNumber; i <= endNumber; i++) {

            const index = i - startNumber; // 0,1,2...
            const number = i.toString().padStart(4, "0");

            const price = prices[index] ?? defaultPrice;

            womenContainer.innerHTML += `
                <div class="product-card">
                    <div class="product-img-container">
                        <img src="${imagePath}${imagePrefix}${number}.jpg"
                             alt="حقيبة نسائية"
                             loading="lazy">
                    </div>

                    <h3 class="product-name">حقيبة نسائية</h3>
                    <div class="price">${price} ريال</div>
                    <button class="btn">عرض</button>
                </div>
            `;
        }
    }

    /* ===============================
       زر عرض (يعمل مع العناصر الديناميكية)
    =============================== */
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn')) {
            const card = e.target.closest('.product-card');
            if (!card) return;

            const name = card.querySelector('.product-name').textContent;
            const price = card.querySelector('.price').textContent;

            alert(`تفاصيل المنتج:\n\nالاسم: ${name}\nالسعر: ${price}`);
        }
    });

});
