import React from "react";
import PropTypes from "prop-types";

const Customer = ({ customer }) => {
  const Delete = () => { 
    console.log('delete');
  };
  return (
    <tr className="border-b hover:bg-gray-100 bg-gray-50">
      <td className="px-4 py-4">{customer.id}</td>
      <td className="px-4 py-4">{customer.first_name}</td>
      <td className="px-4 py-4">{customer.last_name}</td>
      <td className="px-4 py-4">{customer.email}</td>
      <td className="px-4 py-4">
        <button className="text-indigo-600 hover:text-indigo-900">
          Edit
        </button>
        <button className="ml-4 text-red-600 hover:text-red-900" onClick={Delete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

Customer.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

export default Customer;