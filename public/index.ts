export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
  discount?: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  logo: string;
  phone: string;
  email: string;
  address: string;
  workingHours: Partial<{
    weekdays: string;
    saturday: string;
    sunday: string;
  }>;
}

export interface ContactInfo {
  title: string;
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}

export interface TextContent {
  hero: {
    buttons: {
      getPrice: string;
      viewCatalog: string;
    };
  };
  advantages: {
    title: string;
  };
  products: {
    title: string;
    description: string;
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    galleryPlaceholder: string;
    buttonText: string;
    gallery: Array<{
      id: string;
      image: string;
    }>;
  };
  contact: {
    title: string;
    contactInfo: ContactInfo;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submitButton: string;
    };
    callButton: string;
  };
}