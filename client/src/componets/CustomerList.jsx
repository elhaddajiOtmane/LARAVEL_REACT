import React from "react";
import PropTypes from "prop-types";
import Customer from "./Customer";

const CustomerList = ({ customers }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-medium tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">First Name</th>
              <th className="px-4 py-3">Last Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <Customer key={customer.id} customer={customer} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CustomerList;