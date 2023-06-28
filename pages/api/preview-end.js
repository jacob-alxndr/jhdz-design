export default function handler(req, res) {
  res.clearPreviewData({});
  res.setHeader("Location", `${req.query.redirect}`);
  res.end();
}
