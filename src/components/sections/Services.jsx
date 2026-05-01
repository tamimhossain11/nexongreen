import Link from "next/link";
import Content from "../../data/sections/services.json";

const ALL_ITEMS = [
  ...Content.column1.items.map((item) => ({ ...item, link: "/service-1" })),
  ...Content.column2.items.map((item) => ({ ...item, link: "/service-2" })),
];

const ServicesSection = () => {
  return (
    <section className="ng-section ng-section--darker">
      <div className="ng-container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div className="ng-section-label">What We Do</div>
            <h2 className="ng-section-title">
              {Content.title.first} <span>{Content.title.second}</span>
            </h2>
            <p className="ng-section-desc" style={{ marginTop: 12 }}>
              Comprehensive technology solutions tailored for modern businesses and individuals.
            </p>
          </div>
          <Link href="/service-1" className="ng-btn-outline" style={{ flexShrink: 0 }}>
            All Services
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="ng-services-grid">
          {ALL_ITEMS.map((item, i) => (
            <div className="ng-service-card" key={i}>
              <div className="ng-service-card__num">{item.num}</div>
              <div className="ng-service-card__icon">
                <img src={item.icon} alt={item.name} />
              </div>
              <h3 className="ng-service-card__title">{item.name}</h3>
              <p className="ng-service-card__text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
