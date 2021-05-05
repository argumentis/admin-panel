import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import MainLayout from "../../layout";

export default function Customers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName("Customers"));
  }, []);

  return (
    <MainLayout>
      <div style={{ border: "2px solid blue" }}>Customers </div>
    </MainLayout>
  );
}
