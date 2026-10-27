import { Link, Outlet, NavLink, useSearchParams } from "react-router-dom"
import { getbooks } from "../../data/data";

const Navbar = () => {
  const books = getbooks();

  let [searchParams, setSearchParams] = useSearchParams()

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
              خانه
            </Link>

            <NavLink
              to="/books"
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-primary fw-bold" : "text-dark"}`
              }
            >
              کتاب‌ها
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-primary fw-bold" : "text-dark"}`
              }
            >
              درباره ما
            </NavLink>
          </div>

          {/* جست‌وجو و سبد خرید */}
          <div className="d-flex align-items-center gap-4">
            <div className="input-group" style={{ width: "260px" }}>
              <input
                type="text"
                className="form-control rounded-start"
                placeholder="جستجو در کتاب‌ها..."
                value={searchParams.get("text") || ""}
                onChange={(event) => {
                  let filter = event.target.value
                  if (filter) {
                    setSearchParams({ text: filter })
                  } else {
                    setSearchParams({})
                  }
                }
                }
              />

              <span className="input-group-text bg-white">🔍</span>
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