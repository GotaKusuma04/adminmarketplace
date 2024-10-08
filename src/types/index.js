export const Theme = {
  Light: "light",
  Dark: "dark",
};

export const MenuItem = {
  label: "string",
  icon: null,
  path: "string",
};

export const PaymentMethod = {
  CreditCard: "creditCard",
  Paypal: "paypal",
};

export const OrderStatus = {
  Processing: "processing",
  Canceled: "canceled",
  Completed: "completed",
};

export const Order = {
  id: String,
  customerName: String,
  customerImageUrl: String,
  orderNumber: Number,
  totalAmount: Number,
  paymentMethode: PaymentMethod,
  orderDate: Date,
  status: OrderStatus,
};

export const CustomerReview = {
  id: String,
  author: String,
  authorImageUrl: String,
  rating: Number,
  text: String,
};
