// Sample image data - replace with your own images or API
const imageData = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        title: "Mountain Sunset",
        description: "A breathtaking view of mountains during golden hour",
        category: "nature"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80",
        title: "City Lights",
        description: "Urban skyline illuminated at night",
        category: "city"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        title: "Portrait Beauty",
        description: "Professional portrait photography",
        category: "portrait"
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
        title: "Forest Path",
        description: "A serene walk through the forest",
        category: "nature"
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        title: "Modern Architecture",
        description: "Contemporary building design",
        category: "city"
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        title: "Confident Smile",
        description: "A warm and engaging portrait",
        category: "portrait"
    },
    {
        id: 7,
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        title: "Misty Mountains",
        description: "Mountains shrouded in morning mist",
        category: "nature"
    },
    {
        id: 8,
        url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        title: "Urban Street",
        description: "Busy city street scene",
        category: "city"
    }
];

// DOM elements
const gallery = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close');
const loading = document.getElementById('loading');

// State
let currentFilter = 'all';
let searchTerm = '';

// Initialize the gallery
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        loading.classList.add('hidden');
        renderGallery();
    }, 1500);
});

// Render gallery function
function renderGallery() {
    const filteredImages = filterImages();
    
    if (filteredImages.length === 0) {
        gallery.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: white;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>No images found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    gallery.innerHTML = filteredImages.map(image => `
        <div class="gallery-item" data-id="${image.id}">
            <img src="${image.url}" alt="${image.title}" loading="lazy">
            <div class="gallery-item-overlay">
                <h3 class="gallery-item-title">${image.title}</h3>
                <p class="gallery-item-description">${image.description}</p>
            </div>
        </div>
    `).join('');
    
    // Add click event listeners to gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const imageId = parseInt(this.dataset.id);
            openModal(imageId);
        });
    });
    
    // Add animation to gallery items
    animateGalleryItems();
}

// Filter images based on current filter and search term
function filterImages() {
    return imageData.filter(image => {
        const matchesFilter = currentFilter === 'all' || image.category === currentFilter;
        const matchesSearch = searchTerm === '' || 
            image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            image.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        return matchesFilter && matchesSearch;
    });
}

// Animate gallery items
function animateGalleryItems() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Filter button event listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Update current filter
        currentFilter = this.dataset.filter;
        
        // Re-render gallery
        renderGallery();
    });
});

// Search functionality
searchInput.addEventListener('input', function() {
    searchTerm = this.value;
    renderGallery();
});

// Modal functionality
function openModal(imageId) {
    const image = imageData.find(img => img.id === imageId);
    if (image) {
        modalImage.src = image.url;
        modalImage.alt = image.title;
        modalTitle.textContent = image.title;
        modalDescription.textContent = image.description;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Modal event listeners
closeModal.addEventListener('click', closeModalFunction);

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModalFunction();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModalFunction();
    }
});

// Smooth scrolling for navigation
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Lazy loading optimization
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
}

// Performance optimization: Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to search
const debouncedSearch = debounce(() => {
    renderGallery();
}, 300);

searchInput.addEventListener('input', function() {
    searchTerm = this.value;
    debouncedSearch();
});

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero');
    if (hero) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        hero.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.1) 0%, transparent 50%)`;
    }
});

// Console welcome message
console.log('%c🎨 PhotoVault Gallery Loaded! 📸', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('Built with modern web technologies for the best user experience.');