import { Link } from "react-router-dom";


const Home = () => {
  
  return (
    <div dir="rtl">
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <span className="hero-label">به دنیای کتاب خوش آمدید</span>
              <h1 className="fw-bold mt-3">
                کتاب مورد علاقه‌ات را پیدا کن
              </h1>
              <p className="text-secondary my-4">
                مجموعه‌ای از کتاب‌های آموزشی و تخصصی
                برای یادگیری و پیشرفت شما.
              </p>
              <Link to="/books" className="btn btn-primary px-4 py-2">
                مشاهده کتاب‌ها
              </Link>
            </div>

            <div className="col-md-6 text-center">
              <div className="hero-illustration">📚</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <div className="row g-3 text-center">
          <div className="col-md-4">
            <div className="feature-box">
              <span>🚚</span>
              <h5>ارسال سریع</h5>
              <p>کتاب‌ها را آسان و سریع سفارش دهید.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box">
              <span>🏷️</span>
              <h5>قیمت مناسب</h5>
              <p>انتخاب کتاب با قیمت شفاف و مناسب.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box">
              <span>📖</span>
              <h5>تنوع کتاب</h5>
              <p>کتاب‌های متنوع برای علاقه‌مندان به یادگیری.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;