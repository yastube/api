export default async function handler(req, res) {
  const { uuid } = req.query;
  const imageUrl = `https://crafatar.com/skin/${uuid}?size=512`;
  const imageRes = await fetch(imageUrl);
  const buffer = await imageRes.arrayBuffer();
  res.setHeader("Content-Type", "image/png");
  res.status(200).send(Buffer.from(buffer));
}
