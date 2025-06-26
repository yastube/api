
export default async function handler(req, res) {
  const { uuid } = req.query;
  const imageUrl = `https://crafatar.com/avatars/${uuid}?size=32`;
  const imageRes = await fetch(imageUrl);
  const buffer = await imageRes.arrayBuffer();
  res.setHeader("Content-Type", "image/png");
  res.status(200).send(Buffer.from(buffer));
}
