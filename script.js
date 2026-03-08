// Data
const products = [
    {
        id: 1,
        name: "Smartphone Samsung Galaxy A54 5G 8/256GB",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        price: 1999,
        originalPrice: 2499,
        rating: 4.8,
        reviews: 2456,
        brand: "Samsung",
        isNew: false
    },
    {
        id: 2,
        name: "Colchão Ortopédico Sleep&Fly Classic 160x200",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
        price: 899,
        originalPrice: 1450,
        rating: 4.5,
        reviews: 890,
        brand: "Sleep&Fly",
        isNew: false
    },
    {
        id: 3,
        name: "Máscara Capilar Restauradora Kerastase 500ml",
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop",
        price: 250,
        originalPrice: 450,
        rating: 4.9,
        reviews: 15234,
        brand: "Kerastase",
        isNew: false
    },
    {
        id: 4,
        name: "Travesseiro Ortopédico Memory Foam",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop",
        price: 120,
        originalPrice: 200,
        rating: 4.3,
        reviews: 567,
        brand: "Memory Foam",
        isNew: false
    },
    {
        id: 5,
        name: "Barbeador Elétrico Philips Series 9000 com SkinIQ",
        image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
        price: 899,
        originalPrice: 1200,
        rating: 4.7,
        reviews: 3421,
        brand: "Philips",
        isNew: true
    },
    {
        id: 6,
        name: "Realme P3 Lite 8/128GB NFC Smartphone",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
        price: 1100,
        originalPrice: 1400,
        rating: 4.5,
        reviews: 678,
        brand: "Realme",
        isNew: false
    },
    {
        id: 7,
        name: "Whey Protein 2kg Chocolate",
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop",
        price: 250,
        originalPrice: 350,
        rating: 4.6,
        reviews: 4532,
        brand: "Gold Standard",
        isNew: false
    },
    {
        id: 8,
        name: "Gerador de Oxigênio Doméstico",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
        price: 3000,
        originalPrice: 5500,
        rating: 4.4,
        reviews: 234,
        brand: "OxyGen",
        isNew: false
    }
];

const categories = [
    { icon: "pill", label: "Farmácia", color: "bg-green-100 text-green-600" },
    { icon: "sparkles", label: "Beleza", color: "bg-pink-100 text-pink-600" },
    { icon: "gift", label: "Ofertas", color: "bg-red-100 text-red-600" },
    { icon: "shopping-bag", label: "Roupas", color: "bg-purple-100 text-purple-600" },
    { icon: "laptop", label: "Eletrônicos", color: "bg-blue-100 text-blue-600" },
    { icon: "home", label: "Casa", color: "bg-orange-100 text-orange-600" },
    { icon: "baby", label: "Infantil", color: "bg-cyan-100 text-cyan-600" },
    { icon: "shirt", label: "Masculino", color: "bg-slate-100 text-slate-600" },
];

const categoryColors = {
    "pill": "#dcfce7|#16a34a",
    "sparkles": "#fce7f3|#db2777",
    "gift": "#fee2e2|#dc2626",
    "shopping-bag": "#f3e8ff|#9333ea",
    "laptop": "#dbeafe|#2563eb",
    "home": "#ffedd5|#ea580c",
    "baby": "#cffafe|#0891b2",
    "shirt": "#f1f5f9|#475569"
};

// Functions
function renderCategories() {
    const container = document.getElementById('categories-container');
    container.innerHTML = categories.map(cat => {
        const [bg, color] = categoryColors[cat.icon].split('|');
        return `
            <button class="category-item">
                <div class="category-icon" style="background-color: ${bg}; color: ${color};">
                    <i data-lucide="${cat.icon}"></i>
                </div>
                <span class="category-label">${cat.label}</span>
            </button>
        `;
    }).join('');
}

function renderProductCard(product) {
    const discount = product.originalPrice 
        ? Math.round((1 - product.price / product.originalPrice) * 100) 
        : 0;

    return `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${discount > 0 ? `<span class="badge badge-discount">-${discount}%</span>` : ''}
                ${product.isNew ? `<span class="badge badge-new">Novidade</span>` : ''}
                <button class="fav-btn">
                    <i data-lucide="heart" width="16" height="16"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="price-row">
                    <span class="price">R$ ${product.price.toLocaleString('pt-BR')}</span>
                    ${product.originalPrice ? `<span class="old-price">R$ ${product.originalPrice.toLocaleString('pt-BR')}</span>` : ''}
                </div>
                <p class="brand">${product.brand}</p>
                <h3 class="product-name">${product.name}</h3>
                <div class="rating-row">
                    <i data-lucide="star" class="rating-star"></i>
                    <span class="rating-val">${product.rating}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <button class="add-btn" onclick="sendOrder('${product.name}', ${product.price})">
                    <i data-lucide="shopping-cart" width="16" height="16"></i>
                    Adicionar
                </button>
            </div>
        </div>
    `;
}

function renderProducts() {
    const recommendedContainer = document.getElementById('recommended-products');
    const popularContainer = document.getElementById('popular-products');

    // Render all products in recommended
    recommendedContainer.innerHTML = products.map(renderProductCard).join('');

    // Render reversed products in popular for variety
    popularContainer.innerHTML = [...products].reverse().map(renderProductCard).join('');
}

function sendOrder(name, price) {
    // Integração com Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
        const data = {
            items: [{ name: name, price: price }],
            total: price
        };
        window.Telegram.WebApp.sendData(JSON.stringify(data));
    } else {
        alert(`Produto adicionado: ${name} - R$ ${price}`);
        console.log("Telegram WebApp not detected. Data:", { name, price });
    }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    lucide.createIcons();
    
    // Notify Telegram that the WebApp is ready
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    }
});