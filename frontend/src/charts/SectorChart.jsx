import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const SectorChart = ({ insights }) => {

  const sectorMap = {};

  insights.forEach((item) => {

    const sectorName = item.sector;

    if (!sectorName) return;

    if (!sectorMap[sectorName]) {
      sectorMap[sectorName] = 0;
    }

    sectorMap[sectorName] += 1;
  });

  const chartData = Object.entries(sectorMap)
    .map(([sector, count]) => ({
      sector,
      count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 7);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Top Sectors
      </h2>

      <div className="h-96">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="sector"
              angle={-20}
              textAnchor="end"
              interval={0}
              height={70}
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#f59e0b"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default SectorChart;