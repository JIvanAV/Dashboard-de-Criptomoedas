import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";

interface CryptoTableProps {
  data: any[];
}

export default function CryptoTable({ data }: CryptoTableProps) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <table className="w-full border-collapse border border-gray-700">
      <thead>
        <tr className="bg-gray-800">
          <th className="border border-gray-700 p-2">#</th>
          <th className="border border-gray-700 p-2">Moeda</th>
          <th className="border border-gray-700 p-2">Preço (USD)</th>
          <th className="border border-gray-700 p-2">Variação 24h</th>
          <th className="border border-gray-700 p-2">Favorito</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin, index) => (
          <tr key={coin.id} className="text-center">
            <td className="border border-gray-700 p-2">{index + 1}</td>
            <td className="border border-gray-700 p-2 flex items-center gap-2">
              <Image src={coin.image} alt={coin.name} width={24} height={24} />
              <Link href={`/coin/${coin.id}`} className="hover:underline text-blue-400">
                {coin.name}
              </Link>
            </td>
            <td className="border border-gray-700 p-2">${coin.current_price.toFixed(2)}</td>
            <td
              className={`border border-gray-700 p-2 ${
                coin.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td className="border border-gray-700 p-2">
              <button
                onClick={() => toggleFavorite(coin.id)}
                className={`p-1 text-lg ${
                  favorites.includes(coin.id) ? "text-yellow-400" : "text-gray-400"
                }`}
              >
                ★
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
