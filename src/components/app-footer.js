import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function AppFooter() {
    const router = useRouter();
    const { t } = useTranslation("");

  return (
    <footer dir={router.locale === 'en' ? "ltr" :'rtl'}>
        <ul className="inline-block pl-[7%] pr-[7%]">
            <li className="font-readex_reg text-DarkBrown text-17px"><Link href="/">{t("home_footer.about")}</Link></li>
            <li className="font-readex_reg text-DarkBrown text-17px"><Link href="/">{t("home_footer.future_projects")}</Link></li>
            <li className="font-readex_reg text-DarkBrown text-17px"><Link href="/">{t("home_footer.news")}</Link></li>
        </ul>
        <ul className="inline-block pl-[7%]">
            <li className="font-readex_reg text-DarkBrown text-17px"><Link href="/">{t("home_footer.contact")}</Link></li>
            <li className="font-readex_reg text-DarkBrown text-17px"><Link href="/">{t("home_footer.careers")}</Link></li>
            <li className="font-readex_reg text-DarkBrown text-17px"><Link href="/">{t("home_footer.follow")}</Link></li>
        </ul>
        <div className="inline-block pl-[14%]">
            <img src="/images/Group 7549.svg" className="w-[60%] float-left"/>
        </div>
    </footer>
  );
}