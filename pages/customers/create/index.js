import React from "react";
// components
import CreateCustomer from "components/CreateCustomer";
import MainLayout from "layouts/main";

export default function CustomersPage() {
  return (
    <MainLayout>
      <CreateCustomer />
    </MainLayout>
  );
}
