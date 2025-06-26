export default async function handler(req, res) {
  const imageUrl = "https://crafatar.com/avatars/069a79f4-44e9-4726-a5be-fca90e38aaf5?size=64";

  const imageRes = await fetch(imageUrl);
  const buffer = await imageRes.arrayBuffer();

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.status(200).send(Buffer.from(buffer));
}
