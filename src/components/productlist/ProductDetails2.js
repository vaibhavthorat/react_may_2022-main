import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductDetails2() {
  const [searchParams] = useSearchParams();
  const [prod, setProd] = useState({ title: "", price: null });

  useEffect(() => {
    console.log([...searchParams]);
    const myParams = Object.fromEntries([...searchParams]);
    console.log(myParams);
    setProd(myParams);
  }, [searchParams]);

  return (
    <>
      <h1 className="text-center">Product details using Query param</h1>
      <div>Prod Title: {prod.title}</div>
      <div>Prod Price: {prod.price}</div>
    </>
  );
}


