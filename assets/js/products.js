const products = [
    {
        name: "Switch",
        category: "Red",
        price: 19.99,
        img_url: "https://m.media-amazon.com/images/I/71pRPDdY1SL._AC_SX416_CB1169409_QL70_.jpg"
    },
    {
        name: "Router",
        category: "Red",
        price: 12.50,
        img_url: "https://m.media-amazon.com/images/I/51FvsWw1oGL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        name: "Server",
        category: "PC",
        price: 500.00,
        img_url: "https://m.media-amazon.com/images/I/61QB2Uya4IL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        name: "Portatil",
        category: "PC",
        price: 1225.95,
        img_url: "https://m.media-amazon.com/images/I/61vw+DV946L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        name: "Ratón",
        category: "Periférico",
        price: 24.87,
        img_url: "https://m.media-amazon.com/images/I/51WmJULWbHL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        name: "Teclado",
        category: "Periférico",
        price: 16.50,
        img_url: "https://m.media-amazon.com/images/I/61qIsibRybL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        name: "Pulsera antiestática",
        category: "Herramienta",
        price: 7.99,
        img_url: "https://m.media-amazon.com/images/I/71vFRH2IrrL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        name: "Destornillador de precisión",
        category: "Herramienta",
        price: 12.95,
        img_url: "https://m.media-amazon.com/images/I/81Wyfm2xSjL._AC_UL480_FMwebp_QL65_.jpg"
    }

];

function renderProducts() {
    const container = document.getElementById('product-grid');
    
    // Limpiamos el contenedor por si acaso
    container.innerHTML = '';

    products.forEach(product => {
        // Creamos el elemento de la carta
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.img_url}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <span class="category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="price">${product.price.toFixed(2)}€</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', renderProducts);