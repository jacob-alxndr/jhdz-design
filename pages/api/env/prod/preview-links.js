// Put this code in the /pages/api directory of your Next.js website:
// (ie. /pages/api/preview-links.js)
// this function knows how to convert a DatoCMS record
// into a canonical URL within the website
const generatePreviewUrl = ({ item, itemType, locale }) => {
  const localePrefix = locale === "en" ? "" : `/${locale}`;
  switch (itemType.attributes.api_key) {
    case "home":
      // return `/`;
      return {
        label: `${itemType.attributes.name}`,
        url: `${localePrefix}/`,
      };
    // case "landing_page":
    //   // return `/project/${item.attributes.slug}`;
    //   return {
    //     label: `${item.attributes.title[locale]}`,
    //     url: `${localePrefix}/${item.attributes.slug[locale]}`,
    //   };
    default:
      return null;
  }
};
const handler = (req, res, env) => {
  // setup CORS permissions
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // add any other headers you need
  res.setHeader("Content-Type", "application/json");
  // This will allow OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).send("ok");
  }
  const previewLink = generatePreviewUrl(req.body);
  if (!previewLink) {
    return res.status(200).json({ previewLinks: [] });
  }
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const previewLinks = [
    // Public URL:
    {
      label: previewLink.label,
      url: `${baseUrl}${previewLink.url}`,
    },
    // This requires an API route on your project that starts Next.js Preview Mode
    // and redirects to the URL provided with the `redirect` parameter:
    {
      label: `${previewLink.label} - Draft`,
      url: `${baseUrl}/api/preview-start?redirect=${previewLink.url}&secret=${process.env.PREVIEW_MODE_SECRET}`,
    },
  ];
  return res.status(200).json({ previewLinks });
};
export default handler;
