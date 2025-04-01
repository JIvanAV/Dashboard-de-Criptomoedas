import { useEffect, useState } from "react";
import axios from "axios";
import CryptoTable from "@/components/CryptoTable";
import Loading from "@/components/Loading";

export default function Home() {
  const [cryptoData, setCryptoData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCryptoData() {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchCryptoData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Crypto Dashboard</h1>
      {loading ? <Loading /> : <CryptoTable data={cryptoData} />}
    </div>
  );
}
