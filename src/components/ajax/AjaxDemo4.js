import axios from "axios";
import React, { useEffect } from "react";

export default function AjaxDemo4() {
  useEffect(() => {
    axios
      .all([
        axios.get("https://api.github.com/users/defunkt"),
        axios.get("https://api.github.com/users/nichatre"),
        axios.get("https://api.github.com/users/sanjaysamantra1"),
      ])
      .then(([response1, response2, response3]) =>
        console.log(response1.data, response2.data, response3.data)
      );
  });
  return <div>AjaxDemo4</div>;
}
