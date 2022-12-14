import axios from "axios";
import React, { useEffect } from "react";

export default function AjaxDemo5() {
  useEffect(() => {
    getData();
  });
  const getData = async () => {
    try {
      let res1 = await axios.get(
        "https://api.github.com/users/sanjaysamantra1"
      );
      // code here
      let res2 = await axios.get("https://api.github.com/users/nichatre");
      console.log(res1, res2);
    } catch (error) {
      console.log("something went wrong");
    }
  };
  return <div>AjaxDemo5</div>;
}
