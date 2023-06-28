// Put this code in the /pages/api directory of your Next.js website:
// (ie. /pages/api/preview-links.js)
// this function knows how to convert a DatoCMS record
// into a canonical URL within the website
const generatePreviewUrl = ({ item, itemType, locale }) => {
  switch (itemType.attributes.api_key) {
    case "home":
      return `/`;
    case "landing_page":
      return `/project/${item.attributes.slug}`;
    default:
      return null;
  }
};
const handler = (req, res) => {
  // setup CORS permissions
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // add any other headers you need
  res.setHeader("Content-Type", "application/json");
  // This will allow OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).send("ok");
  }
  const url = generatePreviewUrl(req.body);
  if (!url) {
    return res.status(200).json({ previewLinks: [] });
  }
  const baseUrl = process.env.NEXT_PUBLIC_STAGING_SITE_URL;
  const previewLinks = [
    // Public URL:
    {
      label: "Published version",
      url: `${baseUrl}${url}`,
    },
    // This requires an API route on your project that starts Next.js Preview Mode
    // and redirects to the URL provided with the `redirect` parameter:
    {
      label: "Draft version",
      url: `${baseUrl}/api/preview?redirect=${url}&secret=${process.env.PREVIEW_MODE_SECRET}`,
    },
  ];
  return res.status(200).json({ previewLinks });
};
export default handler;
