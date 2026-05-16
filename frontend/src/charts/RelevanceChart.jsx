import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RelevanceChart = ({ insights }) => {

  const relevanceMap = {};

  insights.forEach((item) => {

    const countryName = item.country;

    if (!countryName) return;

    if (!relevanceMap[countryName]) {
      relevanceMap[countryName] = 0;
    }

    relevanceMap[countryName] += Number(item.relevance || 0);
  });

  const chartData = Object.entries(relevanceMap)
    .map(([country, relevance]) => ({
      country,
      relevance,
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 8);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Relevance By Country
      </h2>

      <div className="h-96">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="country"
              angle={-20}
              textAnchor="end"
              interval={0}
              height={70}
            />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="relevance"
              stroke="#10b981"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default RelevanceChart;