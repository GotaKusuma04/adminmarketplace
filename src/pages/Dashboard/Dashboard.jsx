import { useState } from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";
import { id } from "date-fns/locale";
import {
  DashboardBox,
  GlobalChart,
  Modal,
  Input,
  Select,
  Table,
  Review,
} from "../../components";
import { offset } from "@popperjs/core";
import { useGlobalProvider } from "../../hooks";
import { cn } from "../../helpers";
import { Formik, Form } from "formik";
import { orders, reviews } from "./data";
import { columns } from "./column";

// interface Value {
//   amount: string;
//   paymentMethod: string;
// }

export const Dashboard = () => {
  const [isWithDrawModalOpen, setIsWithDrawModalOpen] = useState(false);

  const onWithDrawModalOpen = () => {
    setIsWithDrawModalOpen(true);
  };

  const onWithDrawModalClose = () => {
    setIsWithDrawModalOpen(false);
  };

  const { isDarkTheme } = useGlobalProvider();

  return (
    <div className="grid xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2 grid gap-6">
        <div className="grid md:grid-cols-3 gap-6">
          <DashboardBox title="Total Sales">
            <p>Rp 15000</p>
            <div className="w-[calc(100%+32px)] -ml-4 mt-auto">
              <GlobalChart
                series={[
                  {
                    name: "Sales",
                    data: [
                      559, 498, 450, 500, 490, 550, 480, 560, 520, 560, 540,
                      530,
                    ],
                  },
                ]}
                options={{
                  colors: ["#339943"],
                  chart: { id: "total-sales-chart" },
                  xasis: {
                    categories: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "Mei",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                  },
                }}
                type="line"
              />
            </div>
          </DashboardBox>
          <DashboardBox title="Total Expanses">
            <p>Rp 15000</p>
            <div className="w-[calc(100%+32px)] -ml-4 mt-auto">
              <GlobalChart
                series={[
                  {
                    name: "Expanses",
                    data: [
                      559, 498, 450, 500, 490, 550, 480, 560, 520, 560, 540,
                      530,
                    ],
                  },
                ]}
                options={{
                  colors: ["#db2777"],
                  chart: { id: "total-expanses-chart" },
                  xasis: {
                    categories: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "Mei",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                  },
                }}
                type="line"
              />
            </div>
          </DashboardBox>
          <DashboardBox title="Total Profit">
            <p>Rp 15000</p>
            <div className="w-[calc(100%+32px)] -ml-4 mt-auto">
              <GlobalChart
                series={[
                  {
                    name: "Profit",
                    data: [
                      559, 498, 450, 500, 490, 550, 480, 560, 520, 560, 540,
                      530,
                    ],
                  },
                ]}
                options={{
                  colors: ["#d97706"],
                  chart: { id: "total-profit-chart" },
                  xasis: {
                    categories: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "Mei",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                  },
                }}
                type="area"
              />
            </div>
          </DashboardBox>
        </div>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          <div className="2xl:col-span-2">
            <DashboardBox title="Sales by Category">
              <GlobalChart
                series={[
                  {
                    name: "Category 1",
                    data: [25, 24, 14, 36, 58, 14, 47, 25, 58, 25, 58, 21],
                  },
                  {
                    name: "Category 2",
                    data: [85, 42, 32, 52, 12, 55, 22, 74, 25, 14, 25, 47],
                  },
                ]}
                options={{
                  colors: ["#f9a8d4", "#ec4899"],
                  chart: {
                    id: "sales-by-category",
                    stacked: true,
                    sparkline: { enabled: false },
                  },
                  xasis: {
                    categories: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "Mei",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                    labels: { show: true },
                  },
                  legend: { position: "right", offsetY: 0, show: true },
                }}
                type="bar"
              />
            </DashboardBox>
          </div>
          <DashboardBox title="Top 5 product">
            <GlobalChart
              series={[10, 2, 8, 15, 6, 7]}
              options={{
                colors: [
                  "#4965e0",
                  "#36a2eb",
                  "#98e049",
                  "#ffce56",
                  "#ff6384",
                  "#ff3333",
                ],
                chart: { id: "top-5-product" },
                labels: [
                  "Product 1",
                  "Product 2",
                  "Product 3",
                  "Product 4",
                  "Product 5",
                ],
                legend: { position: "bottom", show: true },
              }}
              type="donut"
            />
          </DashboardBox>
        </div>
        <DashboardBox title="Latest order">
          <div className="pt-4 overflow-x-auto">
            <Table data={orders} columns={columns} />
          </div>
        </DashboardBox>
      </div>
      <div className="grid gap-6">
        <DashboardBox title="My Wallet">
          <div
            className={cn(
              "bg-amber-500 p-2.5 rounded-t-[20px] mt-2 text-white",
              { "bg-primary": isDarkTheme }
            )}>
            <div className="relative pr-8 mb-5">
              <p className="font-Montserrat text-lg uppercase">My Admin</p>
              <HiOutlineCurrencyDollar className="absolute top-1/2 right-0 -translate-y-1/2 w-6 h-6" />
            </div>
            <div className="font-Montserrat text-white">
              <p className="text-lg">My Balance</p>
              <p className="text-3xl"> Rp 15.000,00</p>
            </div>
          </div>
          <button
            type="button"
            className={cn(
              "flex items-center gap-2 bg-white rounded-[10px] p-2.5 w-[calc(100%+16px)] -ml-2 -mt-2 text-sm uppercase font-Montserrat text-dark-default"
            )}
            onClick={onWithDrawModalOpen}>
            <HiOutlineArrowLeftOnRectangle className="w-6 h-6" /> withdraw
          </button>
        </DashboardBox>
        <DashboardBox title="Sales by country">
          <GlobalChart
            series={[
              {
                name: "Sales",
                data: [12, 25, 18, 16, 29, 41, 99, 102, 90, 51],
              },
            ]}
            options={{
              chart: {
                id: "sales-by-category",
                sparkline: { enabled: false },
              },
              labels: [
                "Brazil",
                "Egypt",
                "Monaco",
                "Argentina",
                "Spain",
                "Germany",
                "Japan",
                "China",
                "UK",
                "USA",
              ],
              yaxis: {
                labels: { show: true, style: { fontsize: "14" } },
                show: true,
              },
              plotOptions: { bar: { horizontal: true } },
            }}
            type="bar"
          />
        </DashboardBox>
        <DashboardBox title="Recent Review">
          <ul className="border-t border-dark-default font-Montserrat py-3 mt-3">
            {reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
            {reviews.length === 0 && <p>No Reviews</p>}
          </ul>
        </DashboardBox>
      </div>

      {isWithDrawModalOpen && (
        <Modal onClose={onWithDrawModalOpen}>
          <div className="mb-6">
            <p
              className={cn("font-Montserrat uppercase text-xl", {
                "text-white": isDarkTheme,
              })}>
              withdraw
            </p>
          </div>
          <Formik
            initialValues={{ amount: "", paymentMethod: "" }}
            onSubmit={(values) => console.log(values)}>
            <Form>
              <Input name="amount" label="Amount" type="number" />
              <Select
                name="paymentMethod"
                label="Payment method"
                options={[
                  { value: "stripe", label: "Stripe" },
                  { value: "paypal", label: "Paypal" },
                ]}
              />
              <button
                type="submit"
                className="font-Montserrat uppercase w-full rounded-[10px] bg-primary text-white hover:bg-primary/[0.8] active:bg-primary/[0.9] px-4 py-3 transition-colors mt-2">
                withdraw
              </button>
            </Form>
          </Formik>
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
