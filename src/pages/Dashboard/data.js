import { OrderStatus, PaymentMethod } from "../../types";

export const orders = [
    {
        id: 'order-1',
        customerName: 'John Doe',
        customerImageUrl: '../../images/bw-3.jpg',
        orderDate: new Date(),
        orderNumber: 5478,
        paymentMethod: PaymentMethod.CreditCard,
        status: OrderStatus.Completed,
        totalAmount: 950,
    },
    {
        id: 'order-2',
        customerName: 'John Doe',
        customerImageUrl: '../../images/bw-3.jpg',
        orderDate: new Date(),
        orderNumber: 5478,
        paymentMethod: PaymentMethod.CreditCard,
        status: OrderStatus.Completed,
        totalAmount: 950,
    },
    {
        id: 'order-3',
        customerName: 'John Doe',
        customerImageUrl: '../../images/bw-3.jpg',
        orderDate: new Date(),
        orderNumber: 5478,
        paymentMethod: PaymentMethod.CreditCard,
        status: OrderStatus.Processing,
        totalAmount: 950,
    },
    {
        id: 'order-4',
        customerName: 'John Doe',
        customerImageUrl: '../../images/bw-3.jpg',
        orderDate: new Date(),
        orderNumber: 5478,
        paymentMethod: PaymentMethod.CreditCard,
        status: OrderStatus.Canceled,
        totalAmount: 950,
    },

];

export const reviews = [
    {
        id: 'review-1',
        author: 'John Doe',
        authorImageUrl: '../../images/bw-3.jpg',
        rating: 2,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nisi velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Sed id turpis vel neque pellentesque sollicitudin.',
    },
    {
        id: 'review-2',
        author: 'John Doe',
        authorImageUrl: '../../images/bw-3.jpg',
        rating: 5,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nisi velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Sed id turpis vel neque pellentesque sollicitudin.',
    },
    {
        id: 'review-3',
        author: 'John Doe',
        authorImageUrl: '../../images/bw-3.jpg',
        rating: 4,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nisi velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Sed id turpis vel neque pellentesque sollicitudin.',
    },
    {
        id: 'review-4',
        author: 'John Doe',
        authorImageUrl: '../../images/bw-3.jpg',
        rating: 4,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nisi velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Sed id turpis vel neque pellentesque sollicitudin.',
    },
    {
        id: 'review-5',
        author: 'John Doe',
        authorImageUrl: '../../images/bw-3.jpg',
        rating: 1,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nisi velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Sed id turpis vel neque pellentesque sollicitudin.',
    },
];