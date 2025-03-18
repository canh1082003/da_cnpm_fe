import "../style.css";
import "../UI_shipper/style/home.css";
import {
  Chart as ChartJS,
  ArcElement,
  PointElement,
  LineElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { cot, hang } from "../data";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  ArcElement,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const Home = () => {
  const dbCot = cot;
  const dbHang = hang;
  return (
    <div className="style">
      <div className="chart1">
        <Line
          data={{
            labels: dbCot.map((data) => data.label),
            datasets: [
              {
                label: "Sales",
                data: dbCot.map((data) => data.value),
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
      <div className="ok">
        <div className="chart2">
          <Bar
            data={{
              labels: dbCot.map((data) => data.label),
              datasets: [
                {
                  label: "Sales",
                  data: dbCot.map((data) => data.value),
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                },
                {
                  label: "Sales",
                  data: dbHang.map((data) => data.value),
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
        <div className="chart3">
          <Doughnut
            data={{
              labels: dbCot.map((data) => data.label),
              datasets: [
                {
                  label: "Salesf",
                  data: dbCot.map((data) => data.value),
                  borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgb(239, 52, 158)",
                    "rgb(195, 255, 0)",
                    "rgb(50, 13, 214)",
                  ],
                  borderWidth: 5,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};
