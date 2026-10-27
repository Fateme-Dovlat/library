import { useParams, Link } from "react-router-dom";
import { getbook } from "../../data/data";

const Book = () => {
  const { bookId } = useParams();
  const book = getbook(bookId);

  if (!book) {
    return (
      <div className="container py-5 text-center" dir="rtl">
        <h3>کتاب مورد نظر پیدا نشد!</h3>
        <Link to="/books" className="btn btn-primary mt-3">
          بازگشت به کتاب‌ها
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5" dir="rtl">
      <div className="row g-4 align-items-center">

        {/* تصویر کتاب */}
        <div className="col-12 col-md-5">
          <div className="book-detail-image">
            {book.img ? (
              <img src={book.img} alt={book.name} />
            ) : (
              <div className="book-detail-placeholder">
                <span>📚</span>
                <p>تصویر کتاب</p>
              </div>
            )}
          </div>
        </div>

        {/* اطلاعات کتاب */}
        <div className="col-12 col-md-7">
          <div className="book-detail-info">
            <span className="badge text-bg-primary mb-3">
              کتاب آموزشی
            </span>

            <h2 className="fw-bold mb-4">{book.name}</h2>

            <p className="mb-3">
              <strong>نویسنده: </strong>
              {book.author}
            </p>

            <div className="book-detail-description mb-4">
              <h5 className="fw-bold mb-2">درباره کتاب</h5>
              <p>{book.description}</p>
            </div>

            <div className="book-detail-price mb-4">
              {book.price.toLocaleString("fa-IR")} تومان
            </div>

            <button
              className="btn btn-primary btn-lg px-5"
              onClick={() => alert("قابلیت خرید را در مرحله بعد اضافه می‌کنیم.")}
            >
              خرید کتاب
            </button>

            <div className="mt-3">
              <Link to="/books" className="text-decoration-none">
                ← بازگشت به فهرست کتاب‌ها
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Book;
