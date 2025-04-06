import "../style.css";
import "../UI_Admin/style/home.css";
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
import { useFetchOrders } from "../../../components/order/Order";
import { useEffect, useState } from "react";

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
interface Data {
  value: string | number | unknown;
  label: string;
}
export const Home = () => {
  const {
    fetchDeliveredOrdersByDate,
    fetchPendingOrdersByDate,
    fetchTotal_AmountByOrder,
    fetchOrderByStaff,
  } = useFetchOrders();
  const [dbCot, setDbCot] = useState<Data[]>([]);
  const [dbHang, setDbHang] = useState<Data[]>([]);
  const [dbLine, setDbLine] = useState<Data[]>([]);
  const [dbStaff, setDbStaff] = useState<Data[]>([]);
  useEffect(() => {
    const getDataLine = async () => {
      const dataLine = await fetchTotal_AmountByOrder();
      setDbLine(dataLine);
    };
    const getData = async () => {
      const data = await fetchDeliveredOrdersByDate();
      setDbCot(data);
    };
    const getDataHang = async () => {
      const dataHang = await fetchPendingOrdersByDate();
      setDbHang(dataHang);
    };
    const getDataStaff = async () => {
      const dataStaff = await fetchOrderByStaff();
      setDbStaff(dataStaff);
    };

    getDataHang();
    getData();
    getDataLine();
    getDataStaff();
  }, []);

  return (
    <div className="style">
      <div className="chart">
        <div className="chart1">
          <Line
            data={{
              labels: dbLine.map((data) => data.label),
              datasets: [
                {
                  label: "Doanh Thu Theo Ngày",
                  data: dbLine.map((data) => data.value),
                  backgroundColor: "rgba(75,192,192,1)",
                  borderWidth: 2,
                },
              ],
            }}
          />
          <p className="name_chart">Bảng Đồ Doanh Thu</p>
        </div>
        <div className="infomation"></div>
      </div>

      <div className="ok">
        <div className="chart2">
          <Bar
            data={{
              labels: dbCot.map((data) => data.label),
              datasets: [
                {
                  label: "Thành Công",
                  data: dbCot.map((data) => data.value),
                  backgroundColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                },
                {
                  label: "Đang Giao",
                  data: dbHang.map((data) => data.value),
                  backgroundColor: "rgb(85, 75, 192)",
                  borderWidth: 1,
                },
              ],
            }}
          />
          <p className="name_chart">Bảng Đồ đơn hàng</p>
        </div>
        <div className="chart3">
          <Doughnut
            data={{
              labels: dbStaff.map((data) => `Nhân Viên ${data.label}`),
              datasets: [
                {
                  label: `Số Lượng`,
                  data: dbStaff.map((data) => data.value),
                  backgroundColor: [
                    "rgb(176, 46, 74)",
                    "rgb(54, 163, 235)",
                    "rgb(255, 160, 64)",
                    "rgb(75, 192, 192)",
                    "rgb(153, 102, 255)",
                  ],
                  borderWidth: 5,
                },
              ],
            }}
          />
          <p className="name_chart"> Số lượng đơn hàng Nhân Viên giao</p>
        </div>
      </div>
    </div>
  );
};
