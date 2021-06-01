import React from "react";
// components
import CreateCustomer from "../../../components/createCustomer/index";
import MainLayout from "../../../layout/index";

export default function CustomersPage() {
  return (
    <MainLayout>
      <CreateCustomer />
    </MainLayout>
  );
}
