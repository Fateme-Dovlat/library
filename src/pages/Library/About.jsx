
const About = () => {
  return (
    <main className="container py-5" dir="rtl">
      <section className="about-hero text-center">
        <span className="hero-label">داستان ما</span>
        <h1 className="fw-bold mt-3">درباره فروشگاه ما</h1>
        <div className="title-line"></div>
        <p className="about-text mt-4">
          ما باور داریم که کتاب می‌تواند مسیر زندگی و یادگیری
          را تغییر دهد. هدف ما فراهم کردن دسترسی آسان به کتاب‌های
          آموزشی و تخصصی برای همه علاقه‌مندان است.
        </p>
        <div className="about-illustration">👩🏻‍💻 📚 👨🏻‍💻</div>
      </section>

      <div className="row g-4 mt-4">
        <div className="col-md-4">
          <div className="feature-box">
            <span>🎯</span>
            <h5>هدف ما</h5>
            <p>کمک به یادگیری و رشد دانش از طریق کتاب.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-box">
            <span>⭐</span>
            <h5>کیفیت</h5>
            <p>توجه به کیفیت کتاب‌ها و تجربه خرید مشتری.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-box">
            <span>🤝</span>
            <h5>اعتماد</h5>
            <p>تلاش برای ارائه خدمات شفاف و قابل اعتماد.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
