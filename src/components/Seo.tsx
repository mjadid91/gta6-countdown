import { useEffect } from "react";
import { siteConfig } from "../config/site";

type SeoProps = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
};

function setMeta(
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let element = document.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

export default function Seo({
  title,
  description = siteConfig.description,
  keywords,
  image = siteConfig.ogImage,
  url = siteConfig.domain,
}: SeoProps) {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);

    if (keywords) {
      setMeta('meta[name="keywords"]', "name", "keywords", keywords);
    }

    setMeta("meta[property='og:title']", "property", "og:title", title);
    setMeta(
      "meta[property='og:description']",
      "property",
      "og:description",
      description
    );
    setMeta("meta[property='og:type']", "property", "og:type", "website");
    setMeta("meta[property='og:image']", "property", "og:image", image);
    setMeta("meta[property='og:url']", "property", "og:url", url);
    setMeta(
      "meta[property='og:site_name']",
      "property",
      "og:site_name",
      siteConfig.name
    );
    setMeta(
      "meta[property='og:locale']",
      "property",
      "og:locale",
      siteConfig.locale
    );

    setMeta("meta[name='twitter:card']", "name", "twitter:card", "summary_large_image");
    setMeta("meta[name='twitter:title']", "name", "twitter:title", title);
    setMeta(
      "meta[name='twitter:description']",
      "name",
      "twitter:description",
      description
    );
    setMeta("meta[name='twitter:image']", "name", "twitter:image", image);
  }, [title, description, keywords, image, url]);

  return null;
}