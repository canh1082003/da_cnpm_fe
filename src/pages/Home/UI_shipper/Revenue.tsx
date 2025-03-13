import "../style.css";
import { Doughnut } from "react-chartjs-2";
import { cot } from "../data";
import "../../../style/Revenue.css";
const Revenue = () => {
  const dbCot = cot;
  return (
    <div>
      <p className="style">
        <div className="Revenue">
          <div className="chart_tron">
            <Doughnut
              data={{
                labels: dbCot.map((data) => data.label),
                datasets: [
                  {
                    label: "Salesf",
                    data: dbCot.map((data) => data.value),
                    backgroundColor: [
                      "rgba(75, 192, 192, 1)",
                      "rgb(239, 52, 158)",
                      "rgb(195, 255, 0)",
                      "rgb(50, 13, 214)",
                    ],
                    borderWidth: 5,
                  },
                ],
              }}
              className="tron"
            />
          </div>
          <div className="table">
            <div className="title_table">
              <p>Products</p>
              <p>Date</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            <div className="infor_table">
              <p>#abcdffc</p>
              <p>10/20/2002</p>
              <p>100</p>
              <p>100.000VND</p>
            </div>
            <div className="infor_table">
              <p>#abcdffc</p>
              <p>10/20/2002</p>
              <p>100</p>
              <p>100.000VND</p>
            </div>
            <div className="infor_table">
              <p>#abcdffc</p>
              <p>10/20/2002</p>
              <p>100</p>
              <p>100.000VND</p>
            </div>
            <div className="infor_table">
              <p>#abcdffc</p>
              <p>10/20/2002</p>
              <p>100</p>
              <p>100.000VND</p>
            </div>
            <div className="infor_table">
              <p>#abcdffc</p>
              <p>10/20/2002</p>
              <p>100</p>
              <p>100.000VND</p>
            </div>
            <div className="infor_table">
              <p>#abcdffc</p>
              <p>10/20/2002</p>
              <p>100</p>
              <p>100.000VND</p>
            </div>
            <div className="infor_table">
              <p>#abcdffc</p>
              <p>10/20/2002</p>
              <p>100</p>
              <p>100.000VND</p>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Revenue;
