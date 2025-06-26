const knownUsers = {
  "bb28c5cbccab473fa93023f81d58d63d": "Owner of teamenvex and this website.",
  "a-b-c-d-e": "Admin User",
  "x-y-z": "Cool member"
};

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // or your domain
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  const { uuid } = req.query;

  const user = knownUsers[uuid];

  if (user) {
    return res.status(200).send(user);
  } else {
    return res.status(404).send("Minecraft Player");
  }
}
