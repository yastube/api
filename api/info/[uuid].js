const knownUsers = {
  "bb28c5cbccab473fa93023f81d58d63d": "Minecraft Youtuber",
  "a-b-c-d-e": "Admin User",
  "x-y-z": "Cool member"
};

export default function handler(req, res) {
  const { uuid } = req.query;
  res.setHeader("Access-Control-Allow-Origin", "*"); // or your domain
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  const user = knownUsers[uuid];

  if (user) {
    return res.status(200).send(user);
  } else {
    return res.status(404).send("Minecraft Player");
  }
}
