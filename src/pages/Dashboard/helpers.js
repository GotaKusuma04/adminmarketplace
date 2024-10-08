import { PaymentMethod } from "../../types";

export const mapPaymentMethodWithLabel = (method) => {
    switch (method) {
        case 'creditCard':
            return 'Credit Card';
        case 'paypal':  
            return 'PayPal';
        default:
            return '';
    }
};

export const mapOrderStatusWithStatusType = (status) => {
    switch (status) {
        case 'canceled':
            return 'danger';
        case 'completed':
            return 'success';
        case 'processing':
        default:
            return 'warning';
    }
};
