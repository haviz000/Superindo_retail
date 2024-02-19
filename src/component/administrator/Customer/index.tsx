import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DefaultLayout from "../../../layout/DefaultLayout";
import Loader from "../../../common/Loader/Loader";

type Customer = {
  name: string;
};

const Customer = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const productData: Customer[] = [
    {
      name: "Jaka",
    },
    {
      name: "Reza",
    },
    {
      name: "Ali",
    },
  ];

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout type="">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5 justify-between flex">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Customers 
          </h4>
          <Link
              to="/admin-dashboard"
              className="inline-flex items-center justify-center rounded-sm  text-center text-meta-3 hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              {`<- Back`}
            </Link>
        </div>

        <div className="grid grid-cols-1 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-1 md:px-6 2xl:px-7.5">
          <div className="flex items-center">
            <p className="font-medium">Name</p>
          </div>
        </div>

        {productData.map((product, key) => (
          <div
            className="grid grid-cols-1 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-1 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Customer;
