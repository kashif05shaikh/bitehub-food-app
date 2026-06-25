const categories = [
  { icon: "🥦", name: "Fruits & Vegetables", items: "200+ items", color: "#e8f5e9" },
  { icon: "🥛", name: "Dairy & Bakery", items: "150+ items", color: "#fff8e1" },
  { icon: "🌾", name: "Rice & Pulses", items: "80+ items", color: "#fce4ec" },
  { icon: "🍿", name: "Snacks", items: "300+ items", color: "#e3f2fd" },
  { icon: "🧃", name: "Beverages", items: "120+ items", color: "#f3e5f5" },
  { icon: "🧴", name: "Personal Care", items: "90+ items", color: "#e0f7fa" },
  { icon: "🏠", name: "Household", items: "100+ items", color: "#fff3e0" },
  { icon: "❄️", name: "Frozen Foods", items: "60+ items", color: "#e8eaf6" },
];

const deals = [
  { icon: "🥑", name: "Avocado", price: "₹49", original: "₹79", discount: "38% OFF" },
  { icon: "🍓", name: "Strawberries", price: "₹89", original: "₹120", discount: "26% OFF" },
  { icon: "🥚", name: "Farm Eggs (12)", price: "₹65", original: "₹80", discount: "19% OFF" },
  { icon: "🧀", name: "Cheese Slice", price: "₹99", original: "₹130", discount: "24% OFF" },
];

const Grocery = () => {
  return (
    <div className="grocery-page">
      <div className="grocery-hero">
        <div className="grocery-hero-inner">
          <span className="grocery-badge">🛒 Express Delivery</span>
          <h1>Fresh Groceries<br />at Your Door</h1>
          <p>Order in minutes. Delivered in 10 minutes.</p>
          <div className="grocery-search">
            <span className="grocery-search-icon">🔍</span>
            <input type="text" placeholder="Search for vegetables, snacks, dairy..." />
          </div>
        </div>
      </div>

      <div className="grocery-content">
        <section className="grocery-section">
          <div className="grocery-section-header">
            <h2>Shop by Category</h2>
            <a href="#" className="see-all">See all →</a>
          </div>
          <div className="grocery-categories">
            {categories.map((cat, i) => (
              <div className="grocery-cat-card" key={i} style={{ "--cat-bg": cat.color }}>
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-items">{cat.items}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grocery-section">
          <div className="grocery-section-header">
            <h2>🔥 Today's Deals</h2>
            <a href="#" className="see-all">See all →</a>
          </div>
          <div className="grocery-deals">
            {deals.map((deal, i) => (
              <div className="grocery-deal-card" key={i}>
                <span className="deal-discount-badge">{deal.discount}</span>
                <span className="deal-icon">{deal.icon}</span>
                <h4>{deal.name}</h4>
                <div className="deal-prices">
                  <span className="deal-price">{deal.price}</span>
                  <span className="deal-original">{deal.original}</span>
                </div>
                <button className="deal-add-btn">ADD</button>
              </div>
            ))}
          </div>
        </section>

        <section className="grocery-benefits">
          <div className="benefit-item">
            <span>⚡</span>
            <div>
              <h4>10-Min Delivery</h4>
              <p>Ultrafast delivery to your door</p>
            </div>
          </div>
          <div className="benefit-item">
            <span>✅</span>
            <div>
              <h4>Fresh Guarantee</h4>
              <p>100% fresh or full refund</p>
            </div>
          </div>
          <div className="benefit-item">
            <span>💰</span>
            <div>
              <h4>Best Prices</h4>
              <p>No hidden charges, ever</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Grocery;