export interface OrderItem {
  id: number;
  address: string;
  time: string;
  status: string;
  location: string;
  orderCode: string;
  created_at: string;
  total_amount: number;
}
export interface Order {
  id: number;
  location: string;
  orderCode: string;
  status: string;
  total_amount: string;
  created_at: Date;
  updated_at: Date;
  shipperId: number;
}
