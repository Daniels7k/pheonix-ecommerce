import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

import { useStateContext } from "../context/StateContext";
import { runFireWorks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks()
  }, [])
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Obrigado por sua compra!</h2>
        <p className="email-msg">Verifique o recibo no seu email!</p>
        <p className="description">
          {" "}
          Se você tem alguma pergunta, mande um email para
          <a className="email" href="mailto:email@example.com">
            email@example.com
          </a>
        </p>

        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
