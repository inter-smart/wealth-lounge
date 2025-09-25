import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    brandLogo: Schema.Attribute.Media<'images'>;
    brandUrl: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'utils.link', false>;
    navigation: Schema.Attribute.Component<'utils.link', true>;
  };
}

export interface UtilsLink extends Struct.ComponentSchema {
  collectionName: 'components_utils_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.header': LayoutHeader;
      'utils.link': UtilsLink;
    }
  }
}
