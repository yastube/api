export default async function handler(req, res) {
  const { name } = req.query;
  const profileRes = await fetch(`https://optifine/capes/${name}.png`);
  const buffer = await profileRes.arrayBuffer();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "image/png");
  res.status(200).send(Buffer.from(buffer));
}
