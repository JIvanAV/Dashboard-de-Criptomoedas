import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);

interface CryptoChartProps {
  coinId: string;
  priceData: { prices: number[][] };
}

export default function CryptoChart({ coinId, priceData }: CryptoChartProps) {
  const labels = priceData.prices.map(([timestamp]) =>
    new Date(timestamp).toLocaleDateString()
  );
  const prices = priceData.prices.map(([_, price]) => price);

  const data = {
    labels,
    datasets: [
      {
        label: `Preço do ${coinId}`,
        data: prices,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">📈 Variação de Preço</h2>
      <Line data={data} />
    </div>
  );
}
