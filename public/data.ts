import type {
  NavigationItem,
  Service,
  Advantage,
  Product,
  CompanyInfo,
  TextContent,
} from "./index";

export const companyInfo: CompanyInfo = {
  name: "StipStone",
  logo: "S",
  phone: "+7 (985) 086-70-21",
  email: "stipstone7@gmail.com",
  address: "г.Москва, г.Зеленоград, Георгиевский проспект 33а",
  workingHours: {},
};

export const textContent: TextContent = {
  hero: {
    buttons: {
      getPrice: "Узнать стоимость изделия",
      viewCatalog: "Смотреть каталог",
    },
  },
  advantages: {
    title: "6 веских аргументов «ЗА» для профессионалов и частных лиц",
  },
  products: {
    title: "Преимущества изделий из искусственного камня",
    description:
      "Искусственный камень сочетает в себе эстетическую привлекательность, долговечность и доступность. Его естественная текстура, твёрдость, пластичность и простота обработки позволяют создавать бесшовные формы любой сложности.",
    features: {
      title: "Ключевые преимущества",
      items: [
        {
          title: "Эстетика.",
          description:
            "Красота, традиции, аутентичность, комфорт, потрясающая текстура и разнообразие оттенков.",
        },
        {
          title: "Бесшовность.",
          description:
            "Возможность создания изделий любой формы и размера без ограничений.",
        },
        {
          title: "Многофункциональность.",
          description:
            "Можно использовать практически в любой комнате или коммерческом пространстве.",
        },
        {
          title: "Долговечность.",
          description:
            "Практичный материал, выдерживает большие нагрузки, не выцветает, легко восстанавливается.",
        },
        {
          title: "Практичность.",
          description:
            "Ударопрочные, термостойкие (до 180°C) поверхности, простые в установке.",
        },
        {
          title: "Экологичность.",
          description:
            "Не выделяет токсинов, не пористый, не впитывает влагу, не способствует росту бактерий.",
        },
      ],
    },
    galleryPlaceholder: "Галерея образцов",
    gallery: [
      {
        id: "5",
        image: "/PortfolioImages/2.jpg",
      },
      {
        id: "6",
        image: "/PortfolioImages/14.jpg",
      },
      {
        id: "7",
        image: "/PortfolioImages/1.jpg",
      },
      {
        id: "1",
        image: "/PortfolioImages/20.jpg",
      },
      {
        id: "2",
        image: "/PortfolioImages/9.jpg",
      },
    ],
    buttonText: "Подробнее →",
  },
  contact: {
    title: "Свяжитесь с нами",
    contactInfo: {
      title: "Контактная информация",
      phone: "Телефон",
      email: "Email",
      address: "Адрес",
      workingHours: "Режим работы",
    },
    form: {
      title: "Оставьте заявку на бесплатную консультацию и расчёт стоимости",
      name: "Как вас зовут?",
      namePlaceholder: "Например: Владимир",
      phone: "Контактный телефон",
      phonePlaceholder: "+7 (___) ___-__-__",
      message: "Дополнительная информация",
      messagePlaceholder: "Расскажите о вашем проекте...",
      submitButton: "Отправить",
      email: "",
      emailPlaceholder: "",
    },
    callButton: "Заказать звонок",
  },
};

export const navigationItems: NavigationItem[] = [
  { id: "main", label: "ГЛАВНАЯ", href: "/" },
  { id: "catalog", label: "КАТАЛОГ", href: "/catalog" },
  { id: "prices", label: "ЦЕНЫ", href: "/prices" },
  { id: "portfolio", label: "НАШИ РАБОТЫ", href: "/portfolio" },
  { id: "contacts", label: "КОНТАКТЫ", href: "/contacts" },
];

export const services: Service[] = [
  {
    id: "1",
    title: "ДОПОЛНИТЕЛЬНАЯ СКИДКА",
    description: "ДО -50% НА ВЫБОРОЧНЫЕ ПОЗИЦИИ",
    image: "/PortfolioImages/14.jpg",
  },
  {
    id: "2",
    title: "Сезонный марафон скидок",
    description: "Распродажа материала до -55%",
    image: "/PortfolioImages/12.jpg",
  },
  {
    id: "3",
    title: "Изделия из камня",
    description: "В Зеленограде",
    image: "/PortfolioImages/32.jpg",
  },
];

export const advantages: Advantage[] = [
  {
    id: "1",
    title: "ВСЁ ВКЛЮЧЕНО",
    description:
      "Полный комплекс услуг: замер, эскиз, изготовление и установка мастерами компании",
    icon: "👍",
  },
  {
    id: "2",
    title: "НАДЁЖНО И БЕЗОПАСНО",
    description:
      "Надёжность и безопасность наших изделий из камня, репутация и гарантии",
    icon: "🛡️",
  },
  {
    id: "3",
    title: "ТОЧНО В СРОК",
    description:
      "Соблюдение сроков поставки, понимая что от нас зависит выполнение других работ по интерьеру",
    icon: "⏰",
  },
  {
    id: "4",
    title: "РАБОТАЕМ РУКАМИ",
    description:
      'Фокус на "вау-эффект" и стиль, но сбалансированно с практичностью, хороший результат и оправданные вложения',
    icon: "👷",
  },
  {
    id: "5",
    title: "ДУМАЕМ ГОЛОВОЙ",
    description:
      "Опыт работы с жилыми и коммерческими проектами, изучение новых трендов дизайна и применение инноваций",
    icon: "🧠",
  },
  {
    id: "6",
    title: "ЧУВСТВУЕМ СЕРДЦЕМ",
    description:
      "Поддержка клиентов в вопросах ремонта интерьера от концепции до установки, стремление соответствовать видению клиента",
    icon: "❤️",
  },
];

export const products: Product[] = [
  {
    id: "1",
    title: "КАТАЛОГ ИЗДЕЛИЙ",
    description: "Столешницы, подоконники, барные стойки",
    image: "/table2.jpg",
    price: "от 8 120 руб/м²",
  },
  {
    id: "2",
    title: "КАТАЛОГ КАМНЯ",
    description: "Акриловый камень и кварцевый агломерат",
    image: "/table.jpg",
    price: "от 11 940 руб/м²",
  },
  {
    id: "3",
    title: "КАТАЛОГ МОЕК И РАКОВИН",
    description: "Интегрированные мойки и раковины",
    image: "/bath.jpg",
    price: "от 15 000 руб",
  },
  {
    id: "4",
    title: "КАТАЛОГ КРОМОК И БОРТОВ",
    description: "Декоративные кромки и бортики",
    image: "/PortfolioImages/8.jpg",
    price: "от 2 500 руб/м.п.",
  },
];

export const catalogCategories = [
  {
    id: "1",
    title: "ПОДОКОННИКИ",
    image: "/table2.jpg",
    links: [],
  },
  {
    id: "2",
    title: "СТОЛЕШНИЦЫ",
    image: "/table.jpg",
    links: [],
  },
  {
    id: "3",
    title: "РАКОВИНЫ",
    image: "/bath.jpg",
    links: [],
  },
  {
    id: "4",
    title: "ЛЕСТНИЦЫ",
    image: "/stairs.jpg",
    links: [],
  },
  {
    id: "5",
    title: "РЕСЕПШЕНЫ",
    image: "/reception.jpg",
    links: [],
  },
  {
    id: "6",
    title: "ДУШЕВЫЕ ПОДДОНЫ",
    image: "/shower.jpg",
    links: [],
  },
];

export const catalogServices = [
  {
    id: "1",
    title: "Закажите образцы на дом",
    icon: "🏠",
    description:
      "Наш специалист привезет все образцы к вам домой и поможет определиться с дизайном изделия.",
  },
  {
    id: "2",
    title: "Получите полную консультацию",
    icon: "💡",
    description:
      "Если потребуется, решим технические вопросы и изготовим точный шаблон будущего изделия. Бесплатно!",
  },
  {
    id: "3",
    title: "Оформите заказ при замере",
    icon: "🤝",
    description:
      "Произведём точный расчёт, дадим скидку и оформим заказ прямо в вашей квартире.",
  },
];

export const contactDetails = {
  address: {
    title: "Адрес",
    icon: "📍",
    details: "г.Москва, г.Зеленоград, Георгиевский проспект 33а",
    workingHours: "Всегда на связи!",
  },
  phones: {
    title: "Контактные телефоны",
    icon: "📞",
    items: [
      {
        department: "Консультация и расчёт:",
        phone: "+7 (985) 086-70-21",
        hours: "пн-пт: с 9:00 до 18:00",
      },
    ],
  },
  email: {
    title: "Электронная почта",
    icon: "✉️",
    details:
      "Для расчёта стоимости проектов и по вопросам сотрудничества: stipstone7@gmail.com",
  },
  social: {
    title: "Сообщество ВКонтакте",
    icon: "👥",
    details:
      "Вступите в наше сообщество и будьте в курсе новостей и выгодных предложений",
    link: "vk.com/evrokamen.peterburg",
  },
  regions: {
    title: "StipStone в других регионах",
    icon: "🌍",
    items: [
      { city: "Москва", website: "StipStone-москва.рф" },
      { city: "Тверь", website: "StipStone-тверь.рф" },
    ],
  },
};
export const portfolioImages = [
  "/PortfolioImages/1.jpg",
  "/PortfolioImages/2.jpg",
  "/PortfolioImages/3.jpg",
  "/PortfolioImages/4.jpg",
  "/PortfolioImages/5.jpg",
  "/PortfolioImages/6.jpg",
  "/PortfolioImages/7.jpg",
  "/PortfolioImages/8.jpg",
  "/PortfolioImages/9.jpg",
  "/PortfolioImages/10.jpg",
  "/PortfolioImages/11.jpg",
  "/PortfolioImages/12.jpg",
  "/PortfolioImages/13.jpg",
  "/PortfolioImages/14.jpg",
  "/PortfolioImages/15.jpg",
  "/PortfolioImages/16.jpg",
  "/PortfolioImages/17.jpg",
  "/PortfolioImages/18.jpg",
  "/PortfolioImages/19.jpg",
  "/PortfolioImages/20.jpg",
  "/PortfolioImages/21.jpg",
  "/PortfolioImages/22.jpg",
  "/PortfolioImages/23.jpg",
  "/PortfolioImages/24.jpg",
  "/PortfolioImages/25.jpg",
  "/PortfolioImages/26.jpg",
  "/PortfolioImages/27.jpg",
  "/PortfolioImages/28.jpg",
  "/PortfolioImages/29.jpg",
  "/PortfolioImages/30.jpg",
  "/PortfolioImages/31.jpg",
  "/PortfolioImages/32.jpg",
];
