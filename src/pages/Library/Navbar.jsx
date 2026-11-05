import { useState, useEffect } from "react";
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom"
import { getbooks } from "../../data/data";
import { useTranslation } from "react-i18next";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const books = getbooks();
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user"));
  });

  useEffect(() => {
    const updateUser = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };

    window.addEventListener("userLogin", updateUser);

    return () => {
      window.removeEventListener("userLogin", updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/home");
  };

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
            <span>{t("navbar.brand")}</span>
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
                  placeholder={t("navbar.searchPlaceholder")}
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
                    <div className="p-2 text-muted"> {t("navbar.noBooksFound")}</div>
                  )}
                </div>
              )}
            </div>

            {user ? (
              <div className="d-flex align-items-center gap-3">
                <span className="text-primary fw-bold">
                  <FaRegUser size={18} /> {user.name}
                </span>

                <button
                  type="button"
                  className="btn btn-outline-danger rounded-pill"
                  onClick={handleLogout}
                >
                   {t("navbar.logout")}
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn btn-outline-primary rounded-pill d-flex align-items-center gap-2"
              >
                <FaRegUser size={18} />
                 {t("navbar.login")}
              </Link>
            )}
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