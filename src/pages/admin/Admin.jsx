import React from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const form = useSelector((state) => state.form);
  return (
    <div className="max-w-sm p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {form.photo && (
          <div className="mt-4">
            <img
              src={URL.createObjectURL(form.photo)}
              alt="User Photo"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
          </div>
        )}
        {form?.firstname ? (
          <div>
            <p className=" mt-5 text-lg font-bold text-gray-800">
              {form.firstname} {form.lastname}
            </p>
            <p className="text-sm text-gray-500">
              {form.profession} | Age: {form.age} | {form.gender}
            </p>
          </div>
        ) : (
          <p className="text-sm text-gray-500">No user information</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
