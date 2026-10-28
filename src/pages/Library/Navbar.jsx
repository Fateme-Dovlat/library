import { useState } from "react";
import { Link, Outlet, NavLink, Navigate, useNavigate } from "react-router-dom"
import { getbooks } from "../../data/data";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const books = getbooks();
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const filteredBooks = books.filter((book) =>
    book.name.startsWith(query.trim())
  )

  return (
    <>
      <nav className="navbar bg-white shadow-sm py-3">
        <div
          className="container-fluid px-4 d-flex align-items-center justify-content-between"
          dir="rtl"
        >
          {/* لوگو */}
          <Link
            to="/home"
            className="navbar-brand fw-bold d-flex align-items-center gap-2 text-dark mb-0"
          >
            <span className="fs-3 text-primary">📖</span>
            <span>کتاب‌فروشی</span>
          </Link>

          {/* لینک‌های منو */}
          <div className="d-flex align-items-center gap-4">
            <Link
              to="/home"
              className="text-primary fw-bold text-decoration-none border-bottom border-primary border-2 py-2"
            >
              {t("navbar.home")}
            </Link>

            <NavLink
              to="/books"
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-primary fw-bold" : "text-dark"}`
              }
            >
             {t("navbar.books")}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-primary fw-bold" : "text-dark"}`
              }
            >
             {t("navbar.about")}
            </NavLink>
          </div>

          <select
            className="form-select"
            style={{ width: "130px" }}
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="fa">فارسی</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>

          {/* جست‌وجو و سبد خرید */}
          <div className="d-flex align-items-center gap-4">

            <div className="position-relative" style={{ width: "260px" }}>
              <form
                className="input-group"
                onSubmit={(e) => {
                  e.preventDefault();

                  if (query.trim()) {
                    navigate(`/books?text=${encodeURIComponent(query.trim())}`);
                  } else {
                    navigate("/books");
                  }
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="جستجو در کتاب‌ها..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <button type="submit" className="input-group-text bg-white">
                  🔍
                </button>
              </form>

              {query.trim() !== "" && (
                <div
                  className="position-absolute bg-white shadow rounded w-100"
                  style={{ top: "100%", left: 0, zIndex: 1000 }}
                >
                  {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                      <Link
                        key={book.id}
                        to={`/books/${book.id}`}
                        className="d-block p-2 text-decoration-none text-dark"
                        onClick={() => setQuery("")}
                      >
                        {book.name}
                      </Link>
                    ))
                  ) : (
                    <div className="p-2 text-muted">کتابی پیدا نشد.</div>
                  )}
                </div>
              )}
            </div>


            <Link
              to="/cart"
              className="text-dark text-decoration-none fs-4 position-relative"
            >
              🛒
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container-fluid px-4 py-4" dir="rtl">
        <Outlet />
      </main>
    </>
  )
}

export default Navbar