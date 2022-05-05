import * as mongoose from "mongoose";

export class ContentDto {
  id: string;
  node_id: string;
  content_type: string;

  node_title: [
    {
      type: String;
    }
  ];
  domains: [
    {
      type: number;
    }
  ];
  taxonomy: [
    {
      type: number;
    }
  ];
  taxonomy_names: [
    {
      type: string;
    }
  ];
  tags: [
    {
      type: string;
    }
  ];
  images: [
    {
      type: string;
    }
  ];

  author_name: string;
  author_title: string;
  author_url: string;
  author_picture: string;
  author_classification: string;
  video_link: [
    {
      type: string;
    }
  ];

  field_body_en_summary: [
    {
      type: string;
    }
  ];
  field_body_en_value: [
    {
      type: string;
    }
  ];
  field_title_en: [
    {
      type: string;
    }
  ];
  field_alias_en: [
    {
      type: string;
    }
  ];

  field_body_fr_summary: [
    {
      type: string;
    }
  ];
  field_body_fr_value: [
    {
      type: string;
    }
  ];
  field_title_fr: [
    {
      type: string;
    }
  ];
  field_alias_fr: [
    {
      type: string;
    }
  ];

  summery: String;
  path_alias: string;
  geolocation: [
    {
      type: number;
    }
  ];
  rating: String;
  area: String;
  sicky: Boolean;
  highlighted: Boolean;
}

export const ContentSchema = new mongoose.Schema(
  {
    node_id: { type: String, required: false },
    content_type: { type: String, required: false },

    node_title: {
      type: [
        {
          type: String,
        },
      ],
      required: false,
    },
    domains: { type: String, required: false },
    taxonomy: { type: String, required: false },
    taxonomy_names: { type: String, required: false },
    tags: { type: String, required: false },
    images: { type: String, required: false },

    author_name: { type: String, required: false,default:"moon" },
    author_title: { type: String, required: false },
    author_url: { type: String, required: false },
    author_picture: { type: String, required: false },
    author_classification: { type: String, required: false },
    video_link: { type: String, required: false },

    field_body_en_summary: { type: String, required: false },
    field_body_en_value: { type: String, required: false },
    field_title_en: { type: String, required: false },
    field_alias_en: { type: String, required: false },

    field_body_fr_summary: { type: String, required: false },
    field_body_fr_value: { type: String, required: false },
    field_title_fr: { type: String, required: false },
    field_alias_fr: { type: String, required: false },

    summery: { type: String, required: false },
    path_alias: { type: String, required: false },
    geolocation: { type: String, required: false },
    rating: { type: String, required: false },
    area: { type: String, required: false },
    sicky: { type: String, required: false },
    highlighted: { type: String, required: false },
  },
  { timestamps: { createdAt: "created_date", updatedAt: "updated_date" } }
);

export class ContentObj {
  node_id: string;
  content_type: string;

  node_title: [
    {
      type: String;
    }
  ];
  domains: [
    {
      type: number;
    }
  ];
  taxonomy: [
    {
      type: number;
    }
  ];
  taxonomy_names: [
    {
      type: string;
    }
  ];
  tags: [
    {
      type: string;
    }
  ];
  images: [
    {
      type: string;
    }
  ];

  author_name: string;
  author_title: string;
  author_url: string;
  author_picture: string;
  author_classification: string;
  video_link: [
    {
      type: string;
    }
  ];

  field_body_en_summary: [
    {
      type: string;
    }
  ];
  field_body_en_value: [
    {
      type: string;
    }
  ];
  field_title_en: [
    {
      type: string;
    }
  ];
  field_alias_en: [
    {
      type: string;
    }
  ];

  field_body_fr_summary: [
    {
      type: string;
    }
  ];
  field_body_fr_value: [
    {
      type: string;
    }
  ];
  field_title_fr: [
    {
      type: string;
    }
  ];
  field_alias_fr: [
    {
      type: string;
    }
  ];

  summery: String;
  path_alias: string;
  geolocation: [
    {
      type: number;
    }
  ];
  rating: String;
  area: String;
  sicky: Boolean;
  highlighted: Boolean;
}

export interface Content extends mongoose.Document {
  id: string;
  node_id: string;
  content_type: string;

  node_title: [
    {
      type: string;
    }
  ];
  domains: [
    {
      type: number;
    }
  ];
  taxonomy: [
    {
      type: number;
    }
  ];
  taxonomy_names: [
    {
      type: string;
    }
  ];
  tags: [
    {
      type: string;
    }
  ];
  images: [
    {
      type: string;
    }
  ];

  author_name: string;
  author_title: string;
  author_url: string;
  author_picture: string;
  author_classification: string;
  video_link: [
    {
      type: string;
    }
  ];

  field_body_en_summary: [
    {
      type: string;
    }
  ];
  field_body_en_value: [
    {
      type: string;
    }
  ];
  field_title_en: [
    {
      type: string;
    }
  ];
  field_alias_en: [
    {
      type: string;
    }
  ];

  field_body_fr_summary: [
    {
      type: string;
    }
  ];
  field_body_fr_value: [
    {
      type: string;
    }
  ];
  field_title_fr: [
    {
      type: string;
    }
  ];
  field_alias_fr: [
    {
      type: string;
    }
  ];

  summery: String;
  path_alias: string;
  geolocation: [
    {
      type: number;
    }
  ];
  rating: String;
  area: String;
  sicky: Boolean;
  highlighted: Boolean;
}
