import { Link, useSearchParams } from "react-router-dom";
import { getbooks } from "../../data/data";

const Books = () => {
  const books = getbooks();

  const [searchParams] = useSearchParams();
  const bookfilter = searchParams.get("text") || "";

  const filteredBooks = books.filter((book) =>
    book.name.startsWith(bookfilter.toLowerCase())
  );

  return (
    <div className="container py-5" dir="rtl">
      {/* عنوان صفحه */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-2">کتاب‌های ما</h2>
          <p className="text-secondary mb-0">کتاب مورد علاقه‌ات را پیدا کن</p>
        </div>

        <span className="badge text-bg-primary fs-6">{filteredBooks.length} کتاب</span>
      </div>

      {/* کارت‌های کتاب */}
      <div className="row g-4">
        {filteredBooks.map((book) => (
          <div className="col-12 col-sm-6 col-lg-3" key={book.id}>
            <div className="card book-card h-100 border-0 shadow-sm">
              {/* تصویر کتاب */}
              <div className="book-image">
                {book.img ? (
                  <img src={book.img} alt={book.name} />
                ) : (
                  <div className="book-placeholder">
                    <span>📚</span>
                    <small>کتاب آموزشی</small>
                  </div>
                )}
              </div>

              {/* اطلاعات کتاب */}
              <div className="card-body d-flex flex-column">

                <h5 className="card-title fw-bold mb-3">{book.name}</h5>
                <p className="text-secondary small mb-2">نویسنده: {book.author}</p>

                <div className="mt-auto">
                  <div className="book-price mb-3">{book.price.toLocaleString("fa-IR")} تومان</div>
                  <Link to={`/books/${book.id}`} className="btn btn-outline-primary w-100">مشاهده کتاب</Link>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;