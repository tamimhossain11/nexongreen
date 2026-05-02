import Content from "../../data/sliders/testimonial.json";

const TestimonialSlider = () => (
  <section className="ng-testimonials">
    <div className="ng-container">

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 52, flexWrap: "wrap", gap: 20 }}>
        <div>
          <div className="ng-section-label">{Content.subtitle}</div>
          <h2 className="ng-section-title">
            {Content.title.first} <span>{Content.title.second}</span> {Content.title.third}
          </h2>
        </div>
        <div style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
          Trusted by businesses and individuals worldwide
        </div>
      </div>

      {/* Cards grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
        {Content.items.map((item, i) => (
          <div className="ng-testi-card" key={i}>
            {/* Stars */}
            <div className="ng-testi-card__stars">
              {[1,2,3,4,5].map(s => (
                <span className="ng-testi-card__star" key={s}>★</span>
              ))}
            </div>

            {/* Quote text */}
            <p className="ng-testi-card__text">{item.text}</p>

            {/* Author */}
            <div className="ng-testi-card__author">
              <img src={item.image} alt={item.name} className="ng-testi-card__avatar" />
              <div>
                <div className="ng-testi-card__name">{item.name}</div>
                <div className="ng-testi-card__role">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default TestimonialSlider;
