import React from "react";

const Textarea = ({ label, rows = 5, ...oke }) => {
    return (
        <div>
            <label>{label}</label>
            <textarea {...oke} rows={rows} className="w-full rounded bg-white p-1 border outline-none border-gray-500 focus:border-blue-900 focus:ring-2 focus:ring-indigo-200"
            ></textarea>
        </div>
    );
};
export default Textarea;
