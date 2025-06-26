export default async function handler(req, res) {
  const { uuid } = req.query;
  const imageUrl = `https://crafatar.com/skins/${uuid}?size=512`;
  res.setHeader("Access-Control-Allow-Origin", "*"); // or your domain
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  const imageRes = await fetch(imageUrl);
  const buffer = await imageRes.arrayBuffer();
  res.setHeader("Content-Type", "image/png");
  res.status(200).send(Buffer.from(buffer));
}
