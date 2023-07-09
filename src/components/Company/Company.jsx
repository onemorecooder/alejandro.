import React from "react";
import Title from "../Title";

const COMPANIES = [
  { id: 1, name: "NTTData", logo: "/ntt.png" },
  { id: 2, name: "Vitalis", logo: "/vitalis.png" },
  { id: 3, name: "Tesipro Solutions", logo: "/tesipro.png" }
];
const Company = () => {

  return (
    <div className=" mt-10 w-full">
      <Title text="Where I worked" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {COMPANIES.map((company) => (
          <div key={company.id} className="flex justify-center items-center">
            <img src={company.logo} alt={company.name} className="w-2/3 h-2/3 object-contain"
            style={{filter: "brightness(0) invert(1)"}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
