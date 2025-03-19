//   regedit uncheck jasteb script aplikasi panel vps suntik nokos up-payment jasa-push 

const products = [
    { name: "Roxy Joki", description: "Penyedia Jasa Push Kontak", categories: ["jasa-push"], url: "https://roxy-joki.vercel.app/" },
    { name: "Lyu Hosting", description: "Penyedia Script Dan Panel", categories: ["panel", "script"], url: "https://lyu-host.vercel.app" },
    { name: "Farhan Store", description: "Penyedia Layanan Jasteb Dan Uncheck", categories: ["jasteb", "uncheck"], url: "https://farhan-str.vercel.app/" },
    { name: "Manzzy Host", description: "Penyedia VPS, Panel, Script, Aplikasi", categories: ["vps", "panel", "script", "aplikasi"], url: "https://manzzy-host.vercel.app/" }
];

function loadProducts(category = "all") {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";

    const filteredProducts = category === "all" 
        ? products 
        : products.filter(product => product.categories.includes(category));

    filteredProducts.forEach(product => {
        const productCard = `
            <div class="product-card">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <button class="product-button" data-url="${product.url}">Lihat Toko</button>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });

    const detailButtons = document.querySelectorAll('.product-button');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
}

function setupCategoryFilter() {
    const categoryButtons = document.querySelectorAll(".category-button");
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const category = button.getAttribute("data-category");
            loadProducts(category);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    setupCategoryFilter();
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    const navbarMenu = document.querySelector('.navbar-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    navbarMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault();
    }

    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
    }

    if (e.keyCode === 123) {
        e.preventDefault();
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); 
});

document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});