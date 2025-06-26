export default function withCORS(handler) {
  return async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // or your domain
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      return res.status(200).end(); // Stop here for preflight requests
    }

    return handler(req, res);
  };
}
