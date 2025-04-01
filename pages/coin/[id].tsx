import { GetServerSideProps } from "next";
import axios from "axios";
import CryptoChart from "@/components/CryptoChart";

export default function CoinPage({ coin, priceHistory }: any) {
  if (!coin) return <p>Moeda não encontrada.</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">{coin.name} ({coin.symbol.toUpperCase()})</h1>
      <p className="text-lg">💰 Preço Atual: ${coin.market_data.current_price.usd.toFixed(2)}</p>
      <CryptoChart coinId={coin.id} priceData={priceHistory} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  try {
    const [coinResponse, chartResponse] = await Promise.all([
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}`),
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
        params: { vs_currency: "usd", days: 7 },
      }),
    ]);

    return {
      props: {
        coin: coinResponse.data,
        priceHistory: chartResponse.data,
      },
    };
  } catch (error) {
    return { props: { coin: null, priceHistory: null } };
  }
};
