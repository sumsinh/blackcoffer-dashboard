import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const IntensityChart = ({ insights }) => {

  const regionData = {};

  insights.forEach((item) => {

    const regionName = item.region;

    if (!regionName) return;

    if (!regionData[regionName]) {
      regionData[regionName] = 0;
    }

    regionData[regionName] += Number(item.intensity || 0);
  });

  const chartData = Object.entries(regionData)
    .map(([region, intensity]) => ({
      region,
      intensity,
    }))
    .sort((a, b) => b.intensity - a.intensity)
    .slice(0, 7);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Intensity By Region
      </h2>

      <div className="h-96">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="region"
              angle={-20}
              textAnchor="end"
              interval={0}
              height={70}
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="intensity"
              fill="#3b82f6"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default IntensityChart;