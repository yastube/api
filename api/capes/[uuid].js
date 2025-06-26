export default async function handler(req, res) {
  const { uuid } = req.query;
  const profileRes = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`);
  const profile = await profileRes.json();
  const base64 = profile.properties.find(p => p.name === "textures").value;
  const decoded = JSON.parse(atob(base64));
  const capeUrl = decoded.textures?.CAPE?.url;
  if (!capeUrl) {
    res.status(404).json({ error: "This user does not have a cape." });
    return;
  }
  const capeRes = await fetch(capeUrl);
  const buffer = await capeRes.arrayBuffer();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "image/png");
  res.status(200).send(Buffer.from(buffer));
}

