import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import MainLayout from "../../layout";

export default function Reviews() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName("Reviews"));
  }, []);

  return (
    <MainLayout>
      <div style={{ border: "2px solid blue" }}>Reviews </div>
    </MainLayout>
  );
}
