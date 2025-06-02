import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksExploreSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_explore_sections';
  info: {
    displayName: 'Explore section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    explores: Schema.Attribute.Component<'elements.explore-category', true>;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.RichText;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksNav extends Struct.ComponentSchema {
  collectionName: 'components_blocks_navs';
  info: {
    displayName: 'Nav';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface BlocksNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_news_sections';
  info: {
    displayName: 'News section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    heading: Schema.Attribute.String;
    news: Schema.Attribute.Component<'elements.news-category', true>;
    subHeading: Schema.Attribute.RichText;
  };
}

export interface BlocksSectorSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sector_sections';
  info: {
    displayName: 'Sector section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sectors: Schema.Attribute.Component<'elements.sector-category', true>;
    subHeading: Schema.Attribute.RichText;
  };
}

export interface BlocksServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_sections';
  info: {
    displayName: 'Service section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    services: Schema.Attribute.Component<'elements.service-category', true>;
    subHeading: Schema.Attribute.RichText;
  };
}

export interface ElementsExploreCategory extends Struct.ComponentSchema {
  collectionName: 'components_elements_explore_categories';
  info: {
    displayName: 'explore category';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subTitle: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsNewsCategory extends Struct.ComponentSchema {
  collectionName: 'components_elements_news_categories';
  info: {
    displayName: 'news category';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    newsType: Schema.Attribute.Enumeration<['public', 'event', 'announcement']>;
    subTitle: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ElementsSectorCategory extends Struct.ComponentSchema {
  collectionName: 'components_elements_sector_categories';
  info: {
    displayName: 'sector category';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    serviceItem: Schema.Attribute.Component<'elements.services', true>;
    subTitle: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ElementsServiceCategory extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_categories';
  info: {
    displayName: 'service category';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    serviceItems: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Component<'elements.link', false>;
    userType: Schema.Attribute.Enumeration<
      ['all', 'residents', 'businesses', 'visitors']
    >;
  };
}

export interface ElementsServices extends Struct.ComponentSchema {
  collectionName: 'components_elements_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    subTitle: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.explore-section': BlocksExploreSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.nav': BlocksNav;
      'blocks.news-section': BlocksNewsSection;
      'blocks.sector-section': BlocksSectorSection;
      'blocks.service-section': BlocksServiceSection;
      'elements.explore-category': ElementsExploreCategory;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.news-category': ElementsNewsCategory;
      'elements.sector-category': ElementsSectorCategory;
      'elements.service-category': ElementsServiceCategory;
      'elements.services': ElementsServices;
    }
  }
}
