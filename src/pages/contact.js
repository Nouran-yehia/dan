import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/navigation";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Contact() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("");
  
  return (
    <main className="bg-main_img w-full h-screen bg-size-main">
      <div className="bg-mainMask w-full h-screen bg-size-main">
      {
          menu ?
            <Navigation />
          : ''
        }
      </div>
    </main>
  )
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}