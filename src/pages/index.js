import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/navigation";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import AppFooter from '../components/app-footer'

export default function Home() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("");

  const handleClick = () => {
    if(menu === false){
      setMenu(true);
    }else{
      setMenu(false);
    }
  
  };
  
  return (
    <main className="bg-main_img w-full h-screen bg-size-main">
      {
        menu ?
          <Navigation />
        : ''
      }
        
      <div className="bg-mainMask w-full h-screen bg-size-main">
        <div className='inline-block w-84%'>
          <img src="./images/Group-8023.svg" className='h-151px w-219px inline-block' alt='this is logo' />
        </div>
        <svg onClick={()=>handleClick()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-46px h-31px filter-white inline-block dashes-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <img src="/images/Image 13@2x.png" className="absolute w-15% left-[-6%] top-[75vh]"/>
      <div dir={router.locale === 'en' ? "ltr" :'rtl'}>
        <img src="/images/Adv-slide@2x.png" className="w-40% inline-block"/>
        <div className="inline-block w-[54%]">
            <div className="px-[12%] h-60vh">
              <div className="my-6">
                <p className="inline-block font-readex_bold text-26px text-darkOrange1">{t("tourism.adv")}</p>
                <p className="inline-block mr-5 ml-5 font-readex_bold text-lightGreen opacity-50">{t("tourism.eco")}</p>
                <p className="inline-block mr-5 ml-5 font-readex_bold text-darkBlue opacity-50">{t("tourism.agri")}</p>
              </div>
              <div>
                <p className="text-DarkBrown font-readex_reg text-17px">
                  {t("tourism.adv_content")}
                </p>
              </div>
              <div className="mt-11">
                <button className="font-readex_reg text-OrangeBrown text-14px border-2 rounded-[44px] px-3 py-1 border-OrangeBrown">
                  <img src="/images/Icon awesome-hands-helping.svg" className="inline-block" />
                  {t("tourism.join_dan")}
                </button>
                <button className="border-0 bg-lightOrange rounded-[44px] text-14px text-white px-3 py-2 font-readex_reg m-2">
                  <img src="/images/Icon map-search.svg" className="inline-block px-.7 w-[18%]" />
                  {t("tourism.explore")}
                </button>
              </div>
            </div>
        </div>
      </div>
      <div>
        <div className="inline-block">
          <img src="/images/agri-slide@2x.png" className="w-[40%] inline-block"/>
          <div className="inline-block w-[51%]">
            <div className="px-[12%] h-60vh">
              <div className="my-6">
                <p className="inline-block mr-5 ml-5 font-readex_bold text-darkBlue opacity-50">{t("tourism.agri")}</p>
                <p className="inline-block font-readex_bold text-darkOrange1 opacity-50">{t("tourism.adv")}</p>
                <p className="inline-block mr-5 ml-5 font-readex_bold text-lightGreen text-26px ">{t("tourism.eco")}</p>
              </div>
              <div>
                <p className="text-DarkBrown font-readex_reg text-17px">
                  {t("tourism.adv_content")}
                </p>
              </div>
              <div className="mt-11">
                <button className="font-readex_reg text-OrangeBrown text-14px border-2 rounded-[44px] px-3 py-1 border-OrangeBrown">
                  <img src="/images/Icon awesome-hands-helping.svg" className="inline-block" />
                  {t("tourism.join_dan")}
                </button>
                <button className="border-0 bg-lightOrange rounded-[44px] text-14px text-white px-3 py-2 font-readex_reg m-2">
                  <img src="/images/Icon map-search.svg" className="inline-block px-.7 w-[18%]" />
                  {t("tourism.explore")}
                </button>
              </div>
            </div>
          </div>
          <img src="/images/Image 15.png" className="inline-block w-[17%] absolute"/>
        </div>
      </div>
      <div className="h-[100vh] mb-[10%]">
        <div className="inline-block">
          <img src="/images/Mask Group 47@2x.png" className="inline-block w-[15%] left-[-6%] relative "/>
          <div className="inline-block w-[51%] text-right">
            <div className="px-[12%] h-60vh my-15 mt-5 mb-6">
              <div className="my-6">
                <p className="inline-block mr-5 ml-5 font-readex_bold text-lightGreen opacity-50">{t("tourism.eco")}</p>
                <p className="inline-block font-readex_bold text-darkOrange1 opacity-50">{t("tourism.adv")}</p>
                <p className="inline-block mr-5 ml-5 font-readex_bold text-darkBlue text-26px ">{t("tourism.agri")}</p>
              </div>
              <div>
                <p className="text-DarkBrown font-readex_reg text-17px">
                  {t("tourism.adv_content")}
                </p>
              </div>
              <div className="mt-11">
                <button className="border-0 bg-lightBlue rounded-[44px] text-14px text-white px-3 py-2 font-readex_reg m-2">
                  {t("tourism.explore")}
                  <img src="/images/Icon map-search.svg" className="inline-block px-.7 w-[18%]" />
                </button>
                <button className="font-readex_reg text-OrangeBrown text-14px border-2 rounded-[44px] px-3 py-1 border-OrangeBrown">
                  <img src="/images/Icon awesome-hands-helping.svg" className="inline-block" />
                  {t("tourism.join_dan")}
                </button>
              </div>
            </div>
          </div>
          <img src="/images/eco-slide.png" className="inline-block w-[34%]"/>
        </div>
      </div>
      <div className="bg-about h-[1000px] bg-no-repeat bg-contain" dir={router.locale === 'en' ? "ltr" :'rtl'}>
        <div className={"w-[43%] inline-block mt-[13%] " + (router.locale === 'en' ? "mr-[23%] ml-[10%]" : "mr-[10%] ml-[23%]")} >
          <p className="font-readex_bold text-white text-26px">
            {t("our_story.title")}
          </p>
          <p className="font-readex_reg text-white text-[19px]">
            {t("our_story.about_dan")}
          </p>
          <button className="font-readex_med text-orangeBtn text-14px border-2 rounded-[44px] px-3 py-1 bg-white border-orangeBtn mt-4 mb-4">
            {t("our_story.btn")}
          </button>
          <p className="font-readex_reg text-white text-[19px] mt-8">
            {t("our_story.content")}
          </p>
          <p>

          </p>
        </div>
        <div className="w-[9%] inline-block absolute top-[413vh]">
          <img src="/images/Mask Group 46.png" className="w-70px mb-6"/>
          <img src="/images/Mask Group 49-1.png" className="w-70px mb-6"/>
          <img src="/images/Mask Group 47-1.png" className="w-70px mb-6"/>
          <img src="/images/Mask Group 49-1.png" className="w-70px mb-6"/>
        </div>
      </div>
      <img src="/images/Image 13@2x.png" className="absolute w-15% left-[12%] top-[490vh]"/>
      <div className="mr-[6%]" dir={router.locale === 'en' ? "ltr" :'rtl'}>
        <div className="mb-16">
          <p className="text-DarkBrown text-[40px] font-readex_bold">{t("impact.title")}</p>
          <p className="text-DarkBrown font-readex_bold">{t("impact.content")}</p>
        </div>
        <div>
          <div className="bg-DarkBrown w-[17%] h-[40vh] ml-[1.5%] mb-[1.5%] inline-block pr-4">
            <img src="/images/location-pin.svg" className="pr-[67%] pt-[17%]" />
            <p className="font-readex_bold text-[60px] text-white">6</p>
            <p className="text-lightGrey text-[8px] font-readex_reg">وجهات مستهدفة</p>
          </div>
          <div className="bg-DarkBrown w-[17%] h-[40vh] ml-[1.5%] inline-block pr-4">
            <img src="/images/location-pin.svg" className="pr-[67%] pt-[17%]" />
            <p className="font-readex_bold text-[60px] text-white">6</p>
            <p className="text-lightGrey text-[8px] font-readex_reg">وجهات مستهدفة</p>
          </div>
          <div className="bg-DarkBrown w-[17%] h-[40vh] ml-[1.5%] inline-block pr-4">
            <img src="/images/location-pin.svg" className="pr-[67%] pt-[17%]" />
            <p className="font-readex_bold text-[60px] text-white">6</p>
            <p className="text-lightGrey text-[8px] font-readex_reg">وجهات مستهدفة</p>
          </div>
          <div className="bg-DarkBrown w-[17%] h-[40vh] ml-[1.5%] inline-block pr-4">
            <img src="/images/location-pin.svg" className="pr-[67%] pt-[17%]" />
            <p className="font-readex_bold text-[60px] text-white">6</p>
            <p className="text-lightGrey text-[8px] font-readex_reg">وجهات مستهدفة</p>
          </div>
          <div className="bg-DarkBrown w-[17%] h-[40vh] ml-[1.5%] inline-block pr-4">
            <img src="/images/location-pin.svg" className="pr-[67%] pt-[17%]" />
            <p className="font-readex_bold text-[60px] text-white">6</p>
            <p className="text-lightGrey text-[8px] font-readex_reg">وجهات مستهدفة</p>
          </div>
          <div className="bg-DarkBrown w-[17%] h-[40vh] ml-[1.5%] inline-block pr-4">
            <img src="/images/location-pin.svg" className="pr-[67%] pt-[17%]" />
            <p className="font-readex_bold text-[60px] text-white">6</p>
            <p className="text-lightGrey text-[8px] font-readex_reg">وجهات مستهدفة</p>
          </div>
          <div className="bg-DarkBrown w-[17%] h-[40vh] ml-[1.5%] inline-block pr-4">
            <img src="/images/location-pin.svg" className="pr-[67%] pt-[17%]" />
            <p className="font-readex_bold text-[60px] text-white">6</p>
            <p className="text-lightGrey text-[8px] font-readex_reg">وجهات مستهدفة</p>
          </div>
          <div className="bg-DarkBrown w-[17%] h-[40vh] ml-[1.5%] inline-block pr-4">
            <img src="/images/location-pin.svg" className="pr-[67%] pt-[17%]" />
            <p className="font-readex_bold text-[60px] text-white">6</p>
            <p className="text-lightGrey text-[8px] font-readex_reg">وجهات مستهدفة</p>
          </div>
        </div>
      </div>
      
      <div className="pr-[6%]"  dir={router.locale === 'en' ? "ltr" :'rtl'}>
        <p className="text-midBlue font-readex_bold text-26px">{t("news.title")}</p>
        <div>
        </div>
      </div>
      <AppFooter />
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