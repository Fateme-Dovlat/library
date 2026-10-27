
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="container not-found" dir="rtl">
      <div className="error-number">404</div>
      <h2 className="fw-bold mt-3">صفحه مورد نظر پیدا نشد!</h2>
      <p className="text-secondary mt-3">
        متأسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد.
      </p>
      <Link to="/" className="btn btn-primary mt-3 px-4">
        بازگشت به صفحه اصلی
      </Link>
      <div className="error-illustration">📚 🔎</div>
    </main>
  );
};

export default NotFound;
