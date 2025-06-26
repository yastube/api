
export default async function handler(req, res) {
  const { uuid } = req.query;
  if (!uuid) {
    return res.status(400).json({ error: "UUID is required" });
  }
  const imageUrl = `https://crafatar.com/capes/${uuid}`;
  const imageRes = await fetch(imageUrl);
  const buffer = await imageRes.arrayBuffer();
  res.setHeader("Content-Type", "image/png");
  res.status(200).send(Buffer.from(buffer));
}
