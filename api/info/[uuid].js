import knownUsers from "./known.json"; // dot-slash = same folder

export default function handler(req, res) {
  const { uuid } = req.query;
  const description = knownUsers[uuid] || "Unknown User";

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({ uuid, description });
}
