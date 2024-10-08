import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";

import { mapPaymentMethodWithLabel, mapOrderStatusWithStatusType } from "./helpers";
import { Status } from "../../components";

const columnHelper = createColumnHelper();

export const columns = [
    columnHelper.accessor('customerName', {
        header: 'Customer',
        cell: (info) => {
            return (
                <div className="flex items-center gap-3">
                    <div className="w-[30px] h-[30px] bg-dark-default rounded-full shrink-0 overflow-hidden">
                        <img src={info.row.original.customerImageUrl} alt="customer thumb" className="object-cover w-full h-full" />
                    </div>
                    <p className="truncate">{info.getValue()}</p>
                </div>
            );
        },
    }),
    columnHelper.accessor('orderNumber', {
        header: 'Order No.',
        cell: (info) => `#${info.getValue()}`,
    }),
    columnHelper.accessor('totalAmount', {
        header: 'Total',
        cell: (info) => `Rp${info.getValue()}`,
    }),
    columnHelper.accessor('paymentMethod', {
        header: 'Payment',
        cell: (info) => <span className="uppercase">{mapPaymentMethodWithLabel(info.getValue())}</span>,
    }),
    columnHelper.accessor('orderDate', {
        header: 'Date',
        cell: (info) => format(info.getValue(), 'dd.MM.y'),
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => <Status label={info.getValue()} type={mapOrderStatusWithStatusType(info.getValue())} />,
    }),
];
