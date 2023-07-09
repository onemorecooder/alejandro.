import React from "react";
import ntt from "../../media/ntt.png";
import Title from "../Title";

const Company = () => {
  const companies = [
    { id: 1, name: "NTTData", logo: "" },
    { id: 2, name: "Tesipro Solutions", logo: "" },
    { id: 3, name: "Inditex", logo: "" },
    { id: 4, name: "Mercadona", logo: "" },
    { id: 5, name: "The Old Thameside Inn", logo: "" },
    { id: 6, name: "Vitalis", logo: "" },
  ];

  return (
    <div className="container mx-auto mt-10">
      <Title text="Where I worked" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {companies.map((company) => (
          <div key={company.id} className="flex justify-center items-center">
            <img src={ntt} alt={company.name} className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
