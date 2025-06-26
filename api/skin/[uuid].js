export default async function handler(req, res) {
  const { uuid } = req.query;

  const profileRes = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`);
  const profile = await profileRes.json();
  const base64 = profile.properties.find(p => p.name === "textures").value;
  const decoded = JSON.parse(atob(base64));
  const skinUrl = decoded.textures.SKIN.url;
  const skinRes = await fetch(skinUrl);
  const buffer = await skinRes.arrayBuffer();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "image/png");
  res.status(200).send(Buffer.from(buffer));
}
