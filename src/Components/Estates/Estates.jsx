import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";

const Estates = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("../estate.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);

  return (
    <div className="font-poppins">
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center my-2">Estate</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {estates.map((item) => (
            <Estate key={item.id} estate={item}></Estate>
          ))}
        </div>
    </div>
  );
};

export default Estates;
