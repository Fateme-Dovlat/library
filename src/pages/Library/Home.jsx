
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div dir="rtl">
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <span className="hero-label">
                {t("home.welcome")}
              </span>

              <h1 className="fw-bold mt-3">
                {t("home.subtitle")}
              </h1>

              <p className="text-secondary my-4">
                {t("home.description")}
              </p>

              <Link to="/books" className="btn btn-primary px-4 py-2">
                {t("home.browseBooks")}
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
              <h5>{t("home.fastDelivery")}</h5>
              <p>{t("home.fastDeliveryDescription")}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-box">
              <span>🏷️</span>
              <h5>{t("home.quality")}</h5>
              <p>{t("home.qualityDescription")}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-box">
              <span>📖</span>
              <h5>{t("home.easyShopping")}</h5>
              <p>{t("home.easyShoppingDescription")}</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;