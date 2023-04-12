import LocaleSwitcher from "./language-switcher";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

export default function Navigation() {
  const router = useRouter();

  const { t } = useTranslation("");

  useEffect(() => {
    // let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    // document.querySelector("html").setAttribute("dir", dir);
    // document.getElementById("sec-main-section").classList.add(dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <nav className="navbar navbar-expand-lg bg-Brown nav-bar">
      <div className="container-fluid">
        <div className="navbar-collapse nav-content" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mb-2.5">
              <Link href="/">
                <a
                  className={`font-readex_bold text-white nav-link ${
                    router?.pathname === "/" ? "active" : ""
                  }`}
                >
                  {t("nav.About")}
                </a>
              </Link>
            </li>
            <li className="nav-item mb-2.5">
              <Link href="/about">
                <a
                  className={`font-readex_bold text-white nav-link ${
                    router?.pathname === "/about" ? "active" : ""
                  }`}
                >
                  {t("nav.future_projects")}
                </a>
              </Link>
            </li>
            <li className="nav-item mb-2.5">
              <Link href="/about">
                <a
                  className={`font-readex_bold text-white nav-link ${
                    router?.pathname === "/about" ? "active" : ""
                  }`}
                >
                  {t("nav.media_center")}
                </a>
              </Link>
            </li>
            <li className="nav-item mb-2.5">
              <Link href="/about">
                <a
                  className={`font-readex_bold text-white nav-link ${
                    router?.pathname === "/about" ? "active" : ""
                  }`}
                >
                  {t("nav.contact_us")}
                </a>
              </Link>
            </li>
            <li className="nav-item mb-6">
              <Link href="/about">
                <a
                  className={`font-readex_bold text-white nav-link ${
                    router?.pathname === "/about" ? "active" : ""
                  }`}
                >
                  {t("nav.join_us")}
                </a>
              </Link>
            </li>
          </ul>
          <LocaleSwitcher />
          <div>
            <img className="inline-block w-20px" src="/images/Icon awesome-linkedin.svg" />
            <img className="inline-block w-20px mr-5 ml-5" src="/images/Icon awesome-instagram.svg" />
            <img className="inline-block w-20px" src="/images/Icon awesome-twitter.svg" />
          </div>
        </div>

      </div>
    </nav>
  );
}