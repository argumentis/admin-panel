import React from "react";
// components
import CreateReview from "components/CreateReview";
import MainLayout from "layouts/main";

export default function ReviewsPage() {
  return (
    <MainLayout>
      <CreateReview />
    </MainLayout>
  );
}
