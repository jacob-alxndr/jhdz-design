export default function handler(req, res) {
  res.clearPreviewData({});
  // res.statusCode = 307;
  // res.redirect("/");
  // res.setHeader("Location", `${req.query.redirect}`);
  res.end();
}
