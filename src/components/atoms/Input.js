import React from "react";

const Input = ({ label, ...oke }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...oke}
        className="w-full rounded bg-white p-1 border outline-none border-gray-500 focus:border-blue-900 focus:ring-2 focus:ring-indigo-200"
      />
    </div>
  );
};
export default Input;
