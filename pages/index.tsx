import { useEffect, useState } from "react";
import axios from "axios";

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
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 p-2">#</th>
              <th className="border border-gray-700 p-2">Moeda</th>
              <th className="border border-gray-700 p-2">Preço (USD)</th>
              <th className="border border-gray-700 p-2">Variação 24h</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((coin, index) => (
              <tr key={coin.id} className="text-center">
                <td className="border border-gray-700 p-2">{index + 1}</td>
                <td className="border border-gray-700 p-2 flex items-center gap-2">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                  {coin.name}
                </td>
                <td className="border border-gray-700 p-2">${coin.current_price.toFixed(2)}</td>
                <td
                  className={`border border-gray-700 p-2 ${
                    coin.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
