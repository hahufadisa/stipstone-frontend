import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noindex?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  structuredData?: any;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "StipStone - изделия из камня в Зеленограде | Столешницы, подоконники из искусственного камня",
  description = "Изделия из камня в Зеленограде от StipStone. Столешницы, подоконники, мойки из искусственного камня. Замер, изготовление и установка. Гарантия качества. ☎ +7 (985) 086-70-21",
  keywords = " изделие из камня Зеленоград, столешницы Зеленоград, подоконники из камня Зеленоград, искусственный камень Зеленоград, акриловый камень Зеленоград, кварцевый камень Зеленоград, мойки из камня Зеленоград, барные стойки Зеленоград, изготовление камня Зеленоград, установка столешниц Зеленоград StipStone — это не просто изделия из камня, это искусство, застывшее в вечности. Мы создаём столешницы, подоконники и раковины, которые становятся неотъемлемой частью вашего дома, подчёркивая его уникальность и стиль. Каждое изделие — это результат кропотливой работы мастеров, вкладывающих душу в каждый камень.Мы верим, что камень обладает особой энергетикой, способной преобразить любое пространство. Наша цель — раскрыть эту энергию, создавая изделия, которые будут радовать вас долгие годы. StipStone — это символ надёжности, долговечности и безупречного качества.Выбирая StipStone, вы выбираете не просто камень, а произведение искусства, которое станет гордостью вашего дома. Наши изделия идеально впишутся в любой интерьер, от классики до модерна, добавляя ему изысканности и неповторимости. Камень StipStone — это инвестиция в красоту и комфорт вашего дома.Мы гордимся тем, что помогаем нашим клиентам создавать дома своей мечты. StipStone — это ваш надёжный партнёр в мире камня, готовый воплотить в жизнь любые ваши задумки.",
  ogTitle,
  ogDescription,
  ogImage = "/kitchen.jpg",
  ogUrl = "https://stipstone.ru",
  canonical,
  noindex = false,
  structuredData,
}) => {
  const fullTitle = title.includes("StipStone")
    ? title
    : `${title} | StipStone - изделия из камня в Зеленограде`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content="StipStone" />
      <meta property="og:locale" content="ru_RU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="geo.region" content="RU-MOW" />
      <meta name="geo.placename" content="Зеленоград" />
      <meta name="geo.position" content="55.99;37.20" />
      <meta name="ICBM" content="55.99, 37.20" />
      <meta name="contact" content="+7 (985) 086-70-21" />
      <meta
        name="address"
        content="г.Москва, г.Зеленоград , Георгиевский проспект 33а"
      />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      <meta name="author" content="StipStone" />
      <meta name="copyright" content="StipStone" />
      <meta name="theme-color" content="#2B2B2B" />
      <meta name="msapplication-navbutton-color" content="#2B2B2B" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <link rel="alternate" hrefLang="ru" href={ogUrl} />
      <link rel="alternate" hrefLang="x-default" href={ogUrl} />
    </Helmet>
  );
};

export default SEOHead;
