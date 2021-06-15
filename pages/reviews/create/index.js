import React from "react";
// components
import CreateReview from "components/CreateReview/index";
import MainLayout from "layouts/main";

export default function ReviewsPage() {
  return (
    <MainLayout>
      <CreateReview />
    </MainLayout>
  );
}
