import { useEffect, useMemo, useState } from "react";

import {
  fetchInsightsData,
  fetchFilterOptions,
} from "../api/dashboardApi";

import IntensityChart from "../charts/IntensityChart";
import TopicsChart from "../charts/TopicsChart";
import RelevanceChart from "../charts/RelevanceChart";
import YearTrendChart from "../charts/YearTrendChart";
import SectorChart from "../charts/SectorChart";

const Dashboard = () => {
  const [insights, setInsights] = useState([]);
  const [filters, setFilters] = useState({});

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedEndYear, setSelectedEndYear] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setIsLoading(true);

      const insightsData = await fetchInsightsData();
      const filtersData = await fetchFilterOptions();

      setInsights(insightsData);
      setFilters(filtersData);

    } catch (error) {

      console.error("Error loading dashboard data", error);

    } finally {

      setIsLoading(false);

    }
  };

  const filteredInsights = useMemo(() => {
    

  const clean = (value) => {
    return String(value || "")
      .toLowerCase()
      .trim();
  };

  return insights.filter((item) => {

    if (
      selectedRegion &&
      clean(item.region) !== clean(selectedRegion)
    ) {
      return false;
    }

    if (
      selectedCountry &&
      String(item.country || "").trim().toLowerCase() !==
String(selectedCountry).trim().toLowerCase()
    ) {
      return false;
    }

    if (
      selectedTopic &&
      String(item.topic || "").trim().toLowerCase() !==
String(selectedTopic).trim().toLowerCase()
    ) {
      return false;
    }

    if (
      selectedSector &&
      String(item.sector || "").trim().toLowerCase() !==
String(selectedSector).trim().toLowerCase()
    ) {
      return false;
    }

    if (
  selectedEndYear &&
  String(item.end_year || "").trim() !==
  String(selectedEndYear).trim()
) {
  return false;
}

    return true;

  });

}, [
  insights,
  selectedRegion,
  selectedCountry,
  selectedTopic,
  selectedSector,
  selectedEndYear,
]);

  const averageIntensity =
    filteredInsights.length > 0
      ? Math.round(
          filteredInsights.reduce(
            (total, item) =>
              total + Number(item.intensity || 0),
            0
          ) / filteredInsights.length
        )
      : 0;

  const clearFilters = () => {

    setSelectedRegion("");
    setSelectedCountry("");
    setSelectedTopic("");
    setSelectedSector("");
    setSelectedEndYear("");

  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="bg-white shadow-md rounded-xl px-8 py-6">

          <h2 className="text-2xl font-semibold text-gray-700">
            Loading Dashboard...
          </h2>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">


        <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Blackcoffer Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Interactive data visualization dashboard
          </p>

        </div>


        <div className="bg-white rounded-xl shadow-md p-6 mb-8">

          <h2 className="text-xl font-semibold mb-4">
            Filters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">


            <select
              value={selectedRegion}
              onChange={(event) =>
                setSelectedRegion(event.target.value)
              }
              className="border border-gray-300 rounded-lg px-4 py-3"
            >

              <option value="">
                Select Region
              </option>

              {filters.regions?.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}

            </select>


            <select
              value={selectedCountry}
              onChange={(event) =>
                setSelectedCountry(event.target.value)
              }
              className="border border-gray-300 rounded-lg px-4 py-3"
            >

              <option value="">
                Select Country
              </option>

              {filters.countries?.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}

            </select>


            <select
              value={selectedTopic}
              onChange={(event) =>
                setSelectedTopic(event.target.value)
              }
              className="border border-gray-300 rounded-lg px-4 py-3"
            >

              <option value="">
                Select Topic
              </option>

              {filters.topics?.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}

            </select>

            <select
              value={selectedSector}
              onChange={(event) =>
                setSelectedSector(event.target.value)
              }
              className="border border-gray-300 rounded-lg px-4 py-3"
            >

              <option value="">
                Select Sector
              </option>

              {filters.sectors?.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}

            </select>

            <select
              value={selectedEndYear}
              onChange={(event) =>
                setSelectedEndYear(event.target.value)
              }
              className="border border-gray-300 rounded-lg px-4 py-3"
            >

              <option value="">
                Select End Year
              </option>

              {filters.endYears?.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}

            </select>

          </div>


          <div className="mt-6">

            <button
              onClick={clearFilters}
              disabled={
                !selectedRegion &&
                !selectedCountry &&
                !selectedTopic &&
                !selectedSector &&
                !selectedEndYear
              }
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Clear Filters
            </button>

          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow-md p-6">

            <h3 className="text-gray-500 text-sm">
              Total Records
            </h3>

            <p className="text-3xl font-bold mt-2">
              {filteredInsights.length}
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-md p-6">

            <h3 className="text-gray-500 text-sm">
              Total Topics
            </h3>

            <p className="text-3xl font-bold mt-2">
              {filters.topics?.length || 0}
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-md p-6">

            <h3 className="text-gray-500 text-sm">
              Total Countries
            </h3>

            <p className="text-3xl font-bold mt-2">
              {filters.countries?.length || 0}
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-md p-6">

            <h3 className="text-gray-500 text-sm">
              Total Regions
            </h3>

            <p className="text-3xl font-bold mt-2">
              {filters.regions?.length || 0}
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-md p-6">

            <h3 className="text-gray-500 text-sm">
              Average Intensity
            </h3>

            <p className="text-3xl font-bold mt-2">
              {averageIntensity}
            </p>

          </div>

        </div>

        

        <div className="bg-white rounded-xl shadow-md p-6">

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-2xl font-semibold">
              Topics Preview
            </h2>

            <span className="text-sm text-gray-500">
              Showing first 12 topics
            </span>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {filters.topics?.slice(0, 12).map((topic) => (
              <div
                key={topic}
                className="bg-gray-100 rounded-lg px-4 py-3 text-sm font-medium text-gray-700"
              >
                {topic}
              </div>
            ))}

          </div>

        </div>

        

        {filteredInsights.length === 0 ? (

          <div className="bg-white rounded-xl shadow-md p-10 text-center mt-8">

            <h2 className="text-2xl font-semibold text-gray-700">
              No Data Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try changing the filters
            </p>

          </div>

        ) : (

          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

            <IntensityChart insights={filteredInsights} />

            <TopicsChart insights={filteredInsights} />

            <RelevanceChart insights={filteredInsights} />

            <YearTrendChart insights={filteredInsights} />

            <div className="lg:col-span-2">
              <SectorChart insights={filteredInsights} />
            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default Dashboard;