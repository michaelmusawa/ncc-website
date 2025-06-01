export interface SearchSuggestion {
  text: string;
  url: string;
  sector: string;
}

export interface LinkProps {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
}

export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

export interface LogoProps {
  logoText: string;
  image: ImageProps;
}

type ComponentType = "blocks.hero-section" | "blocks.info-block";

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>
> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export type Block = HeroSectionProps | ServiceSectionProps;

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  title: string;
  subTitle?: string;
  images: ImageProps[];
  cta?: LinkProps[];
}

export interface ServiceCategory {
  title: string;
  description: string;
  userType: string;
  image?: ImageProps;
  url?: LinkProps;
  serviceItems?: ServiceItem[];
}

export interface ServiceItem {
  text: string;
  href: string;
  isExternal: boolean;
}

export interface ServiceSectionProps extends Base<"blocks.info-block"> {
  heading: string;
  subHeading: string;
  services: ServiceCategory[];
}
