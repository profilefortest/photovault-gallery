# PhotoVault - Modern Image Gallery

A beautiful, responsive image gallery built with vanilla HTML, CSS, and JavaScript. Features filtering, search functionality, and a modern design.

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Image Filtering** - Filter by categories (Nature, City, Portrait)
- **Search Functionality** - Search images by title or description
- **Modal Preview** - Click images for full-size preview
- **Modern UI** - Beautiful gradients and animations
- **Fast Loading** - Optimized performance with lazy loading
- **Accessibility** - Keyboard navigation and screen reader friendly

## 🚀 Demo

Visit the live demo: [PhotoVault Gallery](https://profilefortest.github.io/photovault-gallery)

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins)

## 📦 Installation & Running Locally

1. Clone the repository:
```bash
git clone https://github.com/profilefortest/photovault-gallery.git
```

2. Navigate to the project directory:
```bash
cd photovault-gallery
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The gallery will open in your browser at `http://localhost:8080`

**For PowerShell users:** The commands work perfectly in PowerShell without needing `&&` operators.

## 🔧 Customization

### Adding Your Own Images

Replace the `imageData` array in `script.js` with your own images:

```javascript
const imageData = [
    {
        id: 1,
        url: "your-image-url.jpg",
        title: "Your Image Title",
        description: "Your image description",
        category: "nature" // or "city", "portrait"
    },
    // Add more images...
];
```

### Styling

Customize colors and styles in `styles.css`. Key CSS variables:

- Primary gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Main color: `#667eea`
- Font family: `'Poppins', sans-serif`

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com)

---

**Made with ❤️ by profilefortest**