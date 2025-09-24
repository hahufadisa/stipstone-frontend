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
  keywords = "изделие из камня зеленоград, столешницы зеленоград, подоконники из камня зеленоград, искусственный камень зеленоград, акриловый камень зеленоград, кварцевый камень зеленоград, мойки из камня зеленоград, барные стойки зеленоград, изготовление камня зеленоград, установка столешниц зеленоград",
  ogTitle,
  ogDescription,
  ogImage = "/kitchen.jpg",
  ogUrl = "https://stipstone-zelenograd.ru",
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
