"use client";

import Customers from "@/components/Customers/Customers";
import Transition from "@/components/Transition/Transition";

const CustomersPage = () => {
  return (
    <div className="min-h-screen">
      <Transition />
      <Customers />
    </div>
  );
};

export default CustomersPage;
