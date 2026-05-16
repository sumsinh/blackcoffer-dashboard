import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const YearTrendChart = ({ insights }) => {

  const yearMap = {};

  insights.forEach((item) => {

    const year = item.start_year;

    if (!year) return;

    if (!yearMap[year]) {
      yearMap[year] = 0;
    }

    yearMap[year] += 1;
  });

  const chartData = Object.entries(yearMap)
    .map(([year, count]) => ({
      year,
      count,
    }))
    .sort((a, b) => Number(a.year) - Number(b.year));

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Year Wise Trends
      </h2>

      <div className="h-96">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="year" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="count"
              stroke="#8b5cf6"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default YearTrendChart;