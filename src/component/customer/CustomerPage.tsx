import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import DefaultLayout from "../../layout/DefaultLayout";
import ProductCard from "./Card/ProductCard";

const CustomerPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 0);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout type="customer">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <ProductCard image={""} name={"Sepatu"} qty={12} price={200000} />
        <ProductCard image={""} name={"Samsung"} qty={5} price={230000} />
        <ProductCard image={""} name={"Sendal"} qty={6} price={405000} />
        <ProductCard image={""} name={"Kursi"} qty={8} price={78000} />
        <ProductCard image={""} name={"Kursi"} qty={8} price={78000} />
        <ProductCard image={""} name={"Kursi"} qty={8} price={78000} />
        <ProductCard image={""} name={"Kursi"} qty={8} price={78000} />
      </div>
    </DefaultLayout>
  );
};

export default CustomerPage;
