import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatCounter = ({ value, suffix, label, started }) => {
  const count = useCountUp(value, 1800, started);
  return (
    <div className="ng-stat-item">
      <div className="ng-stat-value">
        {count}{suffix}
      </div>
      <div className="ng-stat-label">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ng-stats" ref={ref}>
      <div className="ng-container">
        <div className="ng-stats-grid">
          {STATS.map((s, i) => (
            <StatCounter key={i} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
