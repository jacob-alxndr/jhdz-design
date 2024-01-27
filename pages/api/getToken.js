const secret = process.env.PREVIEW_MODE_SECRET;

const handler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET requests allowed" });
    return;
  }
  return res.status(200).json({ secret });
};

export default handler;
