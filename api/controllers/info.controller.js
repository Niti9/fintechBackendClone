import { fetchJSON } from "../../utils/fetcher.js";

export async function getInfo(req, res) {
  try {
    const ids = req.query.ids || 1;

    const data = await fetchJSON(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`,
      {
        "X-CMC_PRO_API_KEY": process.env.CRYPTO_API_KEY
      }
    );

    res.json(data?.data || data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
