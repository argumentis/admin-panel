import React from "react";
// components
import CreateCustomer from "components/CreateCustomer/index";
import MainLayout from "layouts/main";

export default function CustomersPage() {
  return (
    <MainLayout>
      <CreateCustomer />
    </MainLayout>
  );
}
