"use client";
import { builder, Builder } from "@builder.io/react";

import AboutMeSection from "@/components/AboutMeSection";
import BeforeAndAfterGallery from "./components/BeforeAndAfterGallery";
import ContactForm from "@/components/ContactForm";
import FeaturedReviews from "@/components/FeaturedReviews";
import ReviewsGrid from "./components/ReviewsGrid";
import SectionContactForm from "@/components/SectionContactForm";
import SoldPropertiesGrid from "./components/SoldPropertiesGrid";
import MainHero from "./layouts/MainHero";
import TextWithImage from "./components/TextWithImage";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(ContactForm, {
  name: "ContactForm",
});

Builder.registerComponent(SectionContactForm, {
  name: "SectionContactForm",
});

Builder.registerComponent(AboutMeSection, {
  name: "AboutMeSection",
  inputs: [
    {
      type: "string",
      name: "headline",
      defaultValue: "",
    },
    {
      type: "string",
      name: "subcopy",
      defaultValue: "",
    },
    {
      type: "richText",
      name: "copy",
      defaultValue: "",
    },
    {
      type: "string",
      name: "ctaText",
      defaultValue: "learn more",
    },
    {
      type: "string",
      name: "ctaLink",
      defaultValue: "/about-me",
    },
    {
      type: "object",
      name: "image",
      subFields: [
        {
          type: "file",
          name: "src",
          defaultValue: "",
        },
        {
          type: "string",
          name: "alt",
          defaultValue: "margot foto",
        },
      ],
    },
  ],
});

Builder.registerComponent(FeaturedReviews, {
  name: "FeaturedReviews",
});

Builder.registerComponent(BeforeAndAfterGallery, {
  name: "BeforeAndAfterGallery",
  inputs: [
    {
      type: "string",
      name: "headline",
      defaultValue: "",
    },
    {
      type: "string",
      name: "subcopy",
      defaultValue: "",
    },
    {
      type: "list",
      name: "images",
      defaultValue: [],
      subFields: [
        {
          type: "object",
          name: "image",
          subFields: [
            {
              type: "file",
              name: "src",
              defaultValue: "",
            },
            {
              type: "string",
              name: "alt",
              defaultValue: "",
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(ReviewsGrid, {
  name: "ReviewsGrid",
  inputs: [
    {
      type: "string",
      name: "headline",
      defaultValue: "",
    },
    {
      type: "string",
      name: "subcopy",
      defaultValue: "",
    },
    {
      type: "list",
      name: "reviews",
      defaultValue: [],
      subFields: [
        {
          type: "string",
          name: "name",
          defaultValue: "",
        },
        {
          type: "number",
          name: "rating",
          defaultValue: 0,
        },
        {
          type: "richText",
          name: "text",
          defaultValue: "",
        },
        {
          type: "string",
          name: "link",
          defaultValue: "",
        },
      ],
    },
  ],
});

Builder.registerComponent(SoldPropertiesGrid, {
  name: "SoldPropertiesGrid",
  inputs: [
    {
      type: "string",
      name: "headline",
      defaultValue: "",
    },
    {
      type: "string",
      name: "subcopy",
      defaultValue: "",
    },
    {
      type: "list",
      name: "properties",
      defaultValue: [],
      subFields: [
        {
          type: "string",
          name: "propertyLink",
          defaultValue: "",
        },
        {
          type: "string",
          name: "status",
          defaultValue: "sold",
          enum: ["sold", "pending", "active"],
        },
        {
          type: "number",
          name: "price",
          defaultValue: "",
        },
        {
          type: "number",
          name: "beds",
          defaultValue: "",
        },
        {
          type: "number",
          name: "baths",
          defaultValue: "",
        },
        {
          type: "string",
          name: "address",
          defaultValue: "",
        },
        {
          type: "number",
          name: "originallyListed",
          defaultValue: "",
        },
        {
          type: "string",
          name: "represented",
          defaultValue: "Seller",
          enum: ["Buyer", "Seller"],
        },
        {
          type: "file",
          name: "image",
          defaultValue: "",
        },
      ],
    },
  ],
});

Builder.registerComponent(MainHero, {
  name: "MainHero",
  noWrap: true,
  inputs: [
    {
      type: "string",
      name: "title",
      defaultValue: "Margot Martin",
    },
    {
      type: "string",
      name: "subtitle",
      defaultValue: "Real Estate Professional",
    },
    {
      type: "string",
      name: "pathname",
      defaultValue: "/",
    },
    {
      type: "file",
      name: "videoUrl",
      defaultValue: "",
    },
    {
      type: "file",
      name: "imageUrl",
      defaultValue: "",
    },
  ],
});

Builder.registerComponent(TextWithImage, {
  name: "TextWithImage",
  inputs: [
    {
      type: "string",
      name: "title",
      defaultValue: "",
    },
    {
      type: "richText",
      name: "text",
      defaultValue: "",
    },
    {
      type: "boolean",
      name: "swapOrder",
      defaultValue: false,
    },
    {
      type: "object",
      name: "image",
      subFields: [
        {
          type: "file",
          name: "src",
          defaultValue: "",
        },
        {
          type: "string",
          name: "alt",
          defaultValue: "",
        },
      ],
    },
  ],
});
