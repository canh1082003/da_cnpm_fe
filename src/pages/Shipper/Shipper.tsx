import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../Shipper/style/Shipper.css";
import {
  AdjustmentsHorizontalIcon,
  ArrowUpOnSquareIcon,
  InboxStackIcon,
  MapPinIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const data = [
  { name: "Technology", "2022": 30, "2023": 20 },
  { name: "CarBrands", "2022": 40, "2023": 25 },
  { name: "Airlines", "2022": 50, "2023": 15 },
  { name: "Energy", "2022": 90, "2023": 50 },
];

const Shipper = () => {
  return (
    <div className="shipper_container ">
      <div className="shipper_content">
        <div className="shipper_cover_photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUimvySiSMPzoaH-ii6XQGsOeBp9142EUsw&shttps://img.lovepik.com/photo/50058/7427.jpg_wh860.jpg"
            alt="Cover"
          />
        </div>

        <div className="shipper_section">
          <div className="shipper_delivery">
            <div className="shipper_delivery_header">
              <h3>
                <TruckIcon className="icon" />
                Ongoing delivery
              </h3>
              <button>
                <AdjustmentsHorizontalIcon className="icon" />
              </button>
              <h4>Filter</h4>
            </div>

            {[1, 2].map((item, index) => (
              <div className="delivery_card" key={index}>
                <div className="delivery_info">
                  <h4>Shipment number</h4>
                  <p className="shipment_id">#001234ASD</p>
                  <p className="route">
                    <span>📍 DaNang</span> →{" "}
                    <span>
                      <MapPinIcon className="icon" /> HCM City
                    </span>
                  </p>
                </div>
                <div className="delivery_image">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Truck"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="shipper_chart">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                layout="vertical"
                data={data}
                margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="2022" fill="#3399FF" barSize={12} />
                <Bar dataKey="2023" fill="#66CC66" barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="shipper_tracking_order">
          <div className="shipper_tracking_order_header">
            <h3>
              <InboxStackIcon className="icon" />
              Tracking Order
            </h3>
            <button>
              <AdjustmentsHorizontalIcon className="icon" />
            </button>
            <h4>Filter</h4>
            <button>
              <ArrowUpOnSquareIcon className="icon" />
            </button>
            <h4>Exports</h4>
          </div>
          <div className="table_tracking_order">
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>ORDER ID</th>
                  <th>CATEGORY</th>
                  <th>ARRIVAL TIME</th>
                  <th>WEIGHT</th>
                  <th>ROUTE</th>
                  <th>FEE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>#001234ABCD</td>
                  <td>Electronic</td>
                  <td>7/1/2023</td>
                  <td>25kg</td>
                  <td>87 Wern Ddu Lane → 15 Vicar Lane</td>
                  <td>$1,050</td>
                  <td>
                    <span className="status delivered">Delivered</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>#0023456LKH</td>
                  <td>Furniture</td>
                  <td>7/1/2023</td>
                  <td>50kg</td>
                  <td>40 Broomfield Place → 44 Helland Bridge</td>
                  <td>$2,200</td>
                  <td>
                    <span className="status pending">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipper;
