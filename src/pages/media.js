import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/navigation";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Media() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("");
  
  return (
    <div className="">
      {
        menu ?
          <Navigation />
        : ''
      }
    </div>
  )
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}