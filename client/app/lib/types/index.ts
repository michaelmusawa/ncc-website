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

type ComponentType =
  | "blocks.hero-section"
  | "blocks.sector-section"
  | "blocks.service-section"
  | "blocks.explore-section"
  | "blocks.news-section";

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

export type Block =
  | HeroSectionProps
  | ServiceSectionProps
  | SectorsSectionProps
  | ExploreSectionProps
  | NewsSectionProps;

// #--------Hero section interface--------#

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  title: string;
  subTitle?: string;
  images: ImageProps[];
  cta?: LinkProps[];
}

// #--------Service section interface--------#

export interface ServiceSectionProps extends Base<"blocks.service-section"> {
  heading: string;
  subHeading: string;
  services: ServiceCategory[];
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

// #--------Sector section interface--------#

export interface SectorsSectionProps extends Base<"blocks.sector-section"> {
  heading: string;
  subHeading: string;
  sectors: SectorCategory[];
  cta?: LinkProps[];
}

export interface SectorCategory {
  title: string;
  subTitle: string;
  image?: ImageProps;
  href?: LinkProps;
  serviceItems?: SectorItem[];
}

export interface SectorItem {
  title: string;
  subTitle: string;
}

// #--------Explore section interface--------#

export interface ExploreSectionProps extends Base<"blocks.explore-section"> {
  heading: string;
  subHeading: string;
  explores: ExploreCategory[];
  cta?: LinkProps[];
}

export interface ExploreCategory {
  title: string;
  subTitle: string;
  image?: ImageProps;
  url?: string;
}

// #--------News section interface--------#

export interface NewsSectionProps extends Base<"blocks.news-section"> {
  heading: string;
  subHeading: string;
  news: ServiceCategory[];
  cta?: LinkProps[];
}

export interface NewsCategory {
  title: string;
  subTitle: string;
  image?: ImageProps;
  newsType?: string;
  href?: string;
}
