import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const chartColors = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
];

const TopicsChart = ({ insights }) => {

  const topicsMap = {};

  insights.forEach((item) => {
    const topicName = item.topic;

    if (!topicName) return;

    if (!topicsMap[topicName]) {
      topicsMap[topicName] = 0;
    }

    topicsMap[topicName] += 1;
  });

  const chartData = Object.entries(topicsMap)
    .map(([topic, count]) => ({
      topic,
      count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Top Topics Distribution
      </h2>

      <div className="h-96">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={chartData}
              dataKey="count"
              nameKey="topic"
              outerRadius={140}
              label
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={chartColors[index % chartColors.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default TopicsChart;