// Структурированные данные для организации
export const getOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "StipStone",
  description:
    "Изделия из камня в Зеленограде. Столешницы, подоконники, мойки из искусственного камня. Замер, изготовление и установка.",
  url: "https://stipstone-zelenograd.ru",
  telephone: "+7 (985) 086-70-21",
  email: "stipstone7@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Георгиевский проспект 33а",
    addressLocality: "Зеленоград",
    addressRegion: "Москва",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "55.99",
    longitude: "37.20",
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "от 8120 руб/м²",
  servesCuisine: [],
  areaServed: {
    "@type": "City",
    name: "Зеленоград",
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "55.99",
      longitude: "37.20",
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Каталог изделий из камня",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Столешницы из искусственного камня",
          description:
            "Изготовление столешниц из акрилового и кварцевого камня в Зеленограде",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Подоконники из камня",
          description: "Подоконники из искусственного камня в Зеленограде",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Мойки из камня",
          description:
            "Интегрированные мойки и раковины из искусственного камня",
        },
      },
    ],
  },
  sameAs: ["https://vk.com/evrokamen.peterburg"],
});

// Структурированные данные для услуг
export const getServiceStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Изготовление изделий из искусственного камня",
  provider: {
    "@type": "LocalBusiness",
    name: "StipStone",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Георгиевский проспект 33а",
      addressLocality: "Зеленоград",
      addressRegion: "Москва",
      addressCountry: "RU",
    },
    telephone: "+7 (985) 086-70-21",
  },
  areaServed: {
    "@type": "City",
    name: "Зеленоград",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "RUB",
    price: "8120",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "8120",
      priceCurrency: "RUB",
      unitCode: "MTK",
      unitText: "за м²",
    },
  },
});

// Структурированные данные для товаров
export const getProductStructuredData = (productType: string) => {
  const products = {
    столешницы: {
      name: "Столешницы из искусственного камня в Зеленограде",
      description:
        "Изготовление и установка столешниц из акрилового и кварцевого камня. Замер, эскиз, монтаж.",
      category: "Столешницы",
      material: "Искусственный камень, акрил, кварц",
    },
    подоконники: {
      name: "Подоконники из камня в Зеленограде",
      description:
        "Подоконники из искусственного камня. Точный замер и профессиональная установка.",
      category: "Подоконники",
      material: "Искусственный камень, акрил, кварц",
    },
    мойки: {
      name: "Мойки из камня в Зеленограде",
      description:
        "Интегрированные мойки и раковины из искусственного камня. Бесшовная интеграция.",
      category: "Мойки и раковины",
      material: "Искусственный камень",
    },
  };

  const product =
    products[productType as keyof typeof products] || products["столешницы"];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    material: product.material,
    brand: {
      "@type": "Brand",
      name: "StipStone",
    },
    manufacturer: {
      "@type": "Organization",
      name: "StipStone",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Георгиевский проспект 33а",
        addressLocality: "Зеленоград",
        addressRegion: "Москва",
        addressCountry: "RU",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: "8120",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "8120",
        priceCurrency: "RUB",
        unitCode: "MTK",
        unitText: "за м²",
      },
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "StipStone",
      },
    },
  };
};

// Структурированные данные для хлебных крошек
export const getBreadcrumbStructuredData = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Структурированные данные для FAQ
export const getFAQStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какие изделия из камня вы изготавливаете в Зеленограде?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Мы изготавливаем столешницы, подоконники, барные стойки, мойки, раковины, стеновые панели и другие изделия из искусственного камня в Зеленограде.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько стоят столешницы из камня в Зеленограде?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Стоимость столешниц из искусственного камня в Зеленограде начинается от 8120 рублей за м². Точная цена зависит от материала, размера и сложности изделия.",
      },
    },
    {
      "@type": "Question",
      name: "Предоставляете ли вы гарантию на изделия из камня?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, мы предоставляем гарантию на все изделия из искусственного камня. Также осуществляем бесплатный замер и консультацию в Зеленограде.",
      },
    },
    {
      "@type": "Question",
      name: "Как заказать изделие из камня в Зеленограде?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Для заказа изделия из камня в Зеленограде позвоните по телефону +7 (985) 086-70-21 или оставьте заявку на сайте. Мы приедем на замер и предоставим точный расчет.",
      },
    },
  ],
});

export default {
  getOrganizationStructuredData,
  getServiceStructuredData,
  getProductStructuredData,
  getBreadcrumbStructuredData,
  getFAQStructuredData,
};
