import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'blocks.nav': BlocksNav;
      'blocks.service-section': BlocksServiceSection;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.service-category': ElementsServiceCategory;
    }
  }
}
