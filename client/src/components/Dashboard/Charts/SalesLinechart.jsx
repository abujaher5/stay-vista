import { Chart } from "react-google-charts";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const options = {
  title: "Sales Over Time",
  curveType: "function",
  legend: { position: "bottom" },
  series: [{ color: "#F43F5E" }],
};
const SalesLineChart = ({ data }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);
  if (loading) return <LoadingSpinner />;
  return (
    <>
      {loading ? (
        <LoadingSpinner smallHeight />
      ) : data.length > 1 ? (
        <Chart
          chartType="LineChart"
          width="100%"
          data={data}
          options={options}
        />
      ) : (
        <>
          <LoadingSpinner smallHeight />
          <p className="text-center font-semibold">
            Not Enough Data Available For This Section!
          </p>
        </>
      )}
    </>
  );
};
SalesLineChart.propTypes = {
  data: PropTypes.array,
};

export default SalesLineChart;
