import generateLinks from "../preview-links";
const env = process.env.NEXT_PUBLIC_STAGING_URL;

const handler = (req, res) => generateLinks(req, res, env);
export default handler;
