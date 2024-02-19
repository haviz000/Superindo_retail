import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DefaultLayout from "../../../layout/DefaultLayout";
import Loader from "../../../common/Loader/Loader";

type Variant = {
  product: string;
  code: string;
  name: string;
  qty: number;
  price: number;
  active: boolean;
};

const TotalVariantPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const variantData: Variant[] = [
    {
      product: "Electronics",
      code: "123123123123",
      name: "Samsung",
      qty: 1,
      price: 100,
      active: true,
    },
    {
      product: "Electronics",
      code: "123123123123",
      name: "IIphone",
      qty: 1,
      price: 100,
      active: true,
    },
    {
      product: "Electronics",
      code: "123123123123",
      name: "Esia",
      qty: 1,
      price: 100,
      active: false,
    },
  ];

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5 justify-between flex">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Variant 
          </h4>
          <Link
              to="/admin-dashboard"
              className="inline-flex items-center justify-center rounded-sm  text-center text-meta-3 hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              {`<- Back`}
            </Link>
        </div>

        <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5">
          <div className="flex items-center">
            <p className="font-medium">Product</p>
          </div>
          <div className="flex items-center">
            <p className="font-medium">Name</p>
          </div>
          <div className="flex items-center">
            <p className="font-medium">Code</p>
          </div>
          <div className="flex items-center">
            <p className="font-medium">QTY</p>
          </div>
          <div className="flex items-center">
            <p className="font-medium">Price</p>
          </div>
          <div className="flex items-center">
            <p className="font-medium">Status</p>
          </div>
          <div className="flex items-center">
            <p className="font-medium">Action</p>
          </div>
        </div>

        {variantData.map((variant, key) => (
          <div
            className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {variant.product}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-black dark:text-white">
                {variant.name}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-black dark:text-white">
                {variant.code}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-black dark:text-white">
                {variant.qty}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-black dark:text-white">
                {variant.price}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-black dark:text-white">
                {variant.active ? "Active" : "Inactive"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-blue-500">Edit</button>
              <p>|</p>
              <button className="text-red-500 pt-0.5">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default TotalVariantPage;
