# 🛍️ VELOURA - Fashion Store

A modern, fully-featured e-commerce fashion store built with **Next.js 16** and
**React 19**. Browse premium fashion items, manage your shopping cart, and
complete purchases with an intuitive, responsive interface.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## ✨ Features

### 🏪 Core Shopping Experience

- **🏠 Homepage** - Eye-catching hero banner with featured "New Arrivals"
  section
- **🛍️ Product Shop** - Browse all fashion items in a responsive grid layout (6
  items per page)
- **📸 Product Details** - Full product pages with image gallery,
  specifications, and pricing
- **🛒 Shopping Cart** - Real-time cart management with quantity adjustment
- **💳 Checkout Flow** - Seamless payment process with order confirmation

### 🔍 Smart Filtering & Search

- **Category Filter** - Filter by Men, Women, or Shoes
- **Size Selector** - Choose from S, M, L, XL sizes
- **Price Sorting** - Sort products by price (Low-to-High, High-to-Low)
- **Search Functionality** - Quick product search via navbar
- **Smart Pagination** - Browse products with intuitive pagination

### 🎨 Product Features

- **Color Selection** - Choose from multiple color options per product
- **Multiple Sizes** - Full size range with real-time availability
- **Product Variants** - Cart tracks same product in different colors/sizes
  separately
- **Image Gallery** - Multi-image product galleries with thumbnail navigation
- **Ratings & Reviews** - Star ratings and customer review counts
- **Stock Status** - Clear in-stock/out-of-stock indicators
- **Price Transparency** - Original and discounted prices displayed

### 💡 User Experience

- **🔔 Toast Notifications** - Real-time feedback for all actions
- **⚡ Smooth Animations** - Framer Motion effects throughout the app
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop
- **🎯 Persistent Navigation** - Easy access to cart and search from any page
- **🏷️ Product Badges** - "Best Seller" labels for top products

---

## Live Link: https://fashion-ecommerce-website-rust.vercel.app/

# Home Page

![alt text](<Screenshot 2026-07-17 224128.png>)

# Details page

![alt text](<Screenshot 2026-07-17 225515.png>)

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/fashion-store.git
   cd fashion-store
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Start shopping!

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
fashion-store/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.js                 # Root layout with navbar & footer
│   │   ├── page.js                   # Homepage
│   │   ├── shop/page.jsx             # Product shop page
│   │   ├── products/[id]/page.jsx    # Product details page
│   │   ├── addtocard/page.jsx        # Shopping cart page
│   │   └── paymant/page.jsx          # Payment success page
│   ├── components/
│   │   ├── layout/                   # Layout components
│   │   │   ├── Navbar.jsx            # Navigation bar with search & cart
│   │   │   └── Footer.jsx            # Footer component
│   │   ├── home/                     # Homepage components
│   │   │   ├── Banner.jsx            # Hero banner section
│   │   │   └── NewArrivals.jsx       # Featured products
│   │   ├── shopproductscard/         # Shop page components
│   │   │   ├── ProductsCard.jsx      # Individual product card
│   │   │   └── DetailsCard.jsx       # Product details view
│   │   └── addbutton/                # Cart & filter components
│   │       ├── AddButton.jsx         # Add to cart button
│   │       └── Category.jsx          # Filter sidebar
│   ├── contextapi/
│   │   └── CartContext.js            # Global cart state management
│   └── data/
│       └── products.json             # Product database
├── public/                           # Static assets
├── package.json                      # Dependencies & scripts
├── next.config.mjs                   # Next.js configuration
├── tailwind.config.js                # Tailwind CSS setup
└── jsconfig.json                     # JavaScript path aliases
```

---

## 🛠️ Tech Stack

| Technology         | Purpose                                                        |
| ------------------ | -------------------------------------------------------------- |
| **Next.js 16**     | React framework with server-side rendering & static generation |
| **React 19**       | UI library                                                     |
| **Tailwind CSS 4** | Utility-first CSS framework                                    |
| **Framer Motion**  | Smooth animations & transitions                                |
| **React Toastify** | Toast notifications                                            |
| **Lucide React**   | Beautiful icon library                                         |
| **React Icons**    | Additional icon set                                            |
| **Context API**    | State management (cart)                                        |

---

## 🎯 How to Use

### Browsing Products

1. Visit the homepage to see featured items
2. Click "Shop" in the navbar to browse all products
3. Use filters (Category, Size, Price) to narrow results
4. Click on any product to see full details

### Adding to Cart

1. Open a product details page
2. Select your desired **Color** and **Size**
3. Click **"Add to Cart"** button
4. See confirmation toast notification

### Managing Cart

1. Click the **cart icon** in the navbar
2. View all items in your cart
3. **Increase/Decrease** quantities with +/- buttons
4. See real-time **total price** calculation
5. Click **"Proceed to Checkout"** when ready

### Checkout

1. Review your order on the cart page
2. Click "Proceed to Checkout"
3. Complete payment process
4. View order confirmation page
5. Cart automatically clears for next shopping session

---

## 🎨 Design Highlights

- **Warm, Professional Color Palette** - Cream (#ebe4dd) and beige tones with
  deep black text
- **Modern Typography** - Inter for body text, Playfair Display for headings
- **Responsive Grid Layout** - 1 column (mobile) → 3 columns (desktop)
- **Smooth Interactions** - Hover effects, scale transforms, fade animations
- **Accessibility** - Semantic HTML, proper ARIA labels, keyboard navigation

---

## 📦 Product Data Model

Each product includes:

```json
{
  "id": 1,
  "name": "Premium T-Shirt",
  "brand": "H&M",
  "category": "Men",
  "subcategory": "T-Shirt",
  "price": 42.99,
  "discountPrice": 37.49,
  "rating": 4.4,
  "reviews": 87,
  "colors": ["White", "Beige"],
  "sizes": ["S", "M", "L", "XL"],
  "inStock": true,
  "featured": true,
  "images": ["url1", "url2"],
  "description": "Premium quality t-shirt..."
}
```

---

## 🔧 State Management

The app uses **React Context API** for cart management:

```javascript
// CartContext provides:
- cart[]          // Array of cart items
- totalItems      // Total quantity in cart
- totalPrice      // Total price of all items
- addToCart()     // Add item with color/size
- updateQuantity()// Modify item quantity
- clearCart()     // Empty cart after payment
```

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

```bash
npm run build
npm install -g vercel
vercel
```

### Deploy on Other Platforms

- **Netlify**: Connect your GitHub repo for auto-deployment
- **AWS Amplify**: Drag & drop or connect Git repo
- **Docker**: Create a Dockerfile for containerized deployment

---

## 📝 Environment Variables

Create a `.env.local` file if needed for API endpoints or configuration:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

---

## 🐛 Known Issues & Roadmap

### Current Status

- ✅ Product browsing and filtering
- ✅ Shopping cart with variants
- ✅ Responsive design
- ✅ Smooth animations

### Future Enhancements

- [ ] User authentication & accounts
- [ ] Order history
- [ ] Wishlist functionality
- [ ] Product reviews & ratings system
- [ ] Payment integration (Stripe, PayPal)
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Recommendation engine

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

---

## 🙋 Support

Have questions or found a bug? Please open an
[Issue](https://github.com/yourusername/fashion-store/issues) on GitHub.

---

## 🎓 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [Framer Motion Tutorial](https://www.framer.com/motion/)

---

**Built with ❤️ by Your Fashion Store Team**
