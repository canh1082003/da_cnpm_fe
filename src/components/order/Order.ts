import axios from "axios";
import { GET_ALLORDER_URL } from "../../hooks/auth/order/constant";
import Decimal from "decimal.js";
import { formatDate } from "../../Utils/formatDate";

export const useFetchOrders = () => {
  const fetchAllOrders = async () => {
    const response = await axios.get(`${GET_ALLORDER_URL}`);
    const data = response.data.data || [];
    return data;
  };

  const fetchTotal_AmountByOrder = async () => {
    const response = await axios.get(`${GET_ALLORDER_URL}`);
    const orders = response.data.data || [];

    const delivered = orders.filter((order) => order.status === "delivered");
    console.log(delivered);

    const grouped = delivered.reduce((acc, order) => {
      const date = formatDate(order.created_at, "yyyy/MM/dd");
      const amount = new Decimal(order.total_amount);
      console.log(date);
      if (!amount.isNaN()) {
        acc[date] = (acc[date] || new Decimal(0)).plus(amount);
      } else {
        console.warn(
          `Invalid totalAmount for order on ${date}: ${order.total_amount}`
        );
      }

      return acc;
    }, {});

    return Object.entries(grouped).map(([label, value]) => ({
      label,
      value: value.toString(),
    }));
  };

  const fetchDeliveredOrdersByDate = async () => {
    const response = await axios.get(`${GET_ALLORDER_URL}`);
    const orders = response.data.data || [];

    const delivered = orders.filter((order) => order.status === "delivered");

    const grouped = delivered.reduce((acc, order) => {
      const date = formatDate(order.created_at, "yyyy-MM-dd");
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(grouped).map(([label, value]) => ({ label, value }));
  };
  const fetchProcessingOrdersByDate = async () => {
    const response = await axios.get(`${GET_ALLORDER_URL}`);
    const orders = response.data.data || [];

    const pending = orders.filter((order) => order.status === "processing");

    const grouped = pending.reduce((acc, order) => {
      const date = formatDate(order.created_at, "yyyy-MM-dd");
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(grouped).map(([label, value]) => ({ label, value }));
  };
  const fetchPendingOrdersByDate = async () => {
    const response = await axios.get(`${GET_ALLORDER_URL}`);
    const orders = response.data.data || [];

    const pending = orders.filter((order) => order.status === "pending");

    const grouped = pending.reduce((acc, order) => {
      const date = formatDate(order.created_at, "yyyy-MM-dd");
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(grouped).map(([label, value]) => ({ label, value }));
  };
  const fetchOrderByStaff = async () => {
    try {
      const response = await axios.get(`${GET_ALLORDER_URL}`);
      const orders = response.data.data || [];

      const staffOrderCount = orders.reduce((acc, order) => {
        const staffId = order.shipperId; // ID nhân viên giao hàng
        if (staffId) {
          // Nếu nhân viên đã có trong acc thì tăng số đơn hàng, nếu chưa có thì khởi tạo
          acc[staffId] = (acc[staffId] || 0) + 1;
        }
        return acc;
      }, {});

      const staffOrderArray = Object.entries(staffOrderCount).map(
        ([label, value]) => ({
          label,
          value,
        })
      );

      return staffOrderArray;
    } catch (error) {
      console.error("Lỗi khi lấy đơn hàng:", error);
      return [];
    }
  };

  return {
    fetchAllOrders,
    fetchDeliveredOrdersByDate,
    fetchProcessingOrdersByDate,
    fetchPendingOrdersByDate,
    fetchTotal_AmountByOrder,
    fetchOrderByStaff,
  };
};
