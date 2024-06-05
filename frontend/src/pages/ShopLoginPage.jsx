import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopLogin from "../components/Shop/ShopLogin";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/dashboard`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isSeller]);
  return (
    <div>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
