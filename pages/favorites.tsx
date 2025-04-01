import { useFavorites } from "@/context/FavoritesContext";
import { useEffect, useState } from "react";
import axios from "axios";
import CryptoTable from "@/components/CryptoTable";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [favoriteData, setFavoriteData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFavorites() {
      if (favorites.length === 0) {
        setFavoriteData([]);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
          params: {
            vs_currency: "usd",
            ids: favorites.join(","),
          },
        });
        setFavoriteData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchFavorites();
  }, [favorites]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">⭐ Criptomoedas Favoritas</h1>
      {loading ? <p>Carregando...</p> : <CryptoTable data={favoriteData} />}
    </div>
  );
}
