import React, { useState ,useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Myform from "./componets/Myform";
import CustomerList from "./componets/CustomerList";
import Header from "./componets/Header";

const App = () => {
  
  const [customers, setCustomers] = useState([]);
  
  useEffect(()=>{
    axios
    .get("http://127.0.0.1:8000/api/customers")
    .then((response) => setCustomers(response.data))
    .catch((error)=>console.log(error));
  })

  return (
    
    <div className="p-6">
      <Header />
      <Myform />
      <h1 className="text-2xl font-medium">Customer List</h1>
      <CustomerList customers={customers} />
    </div>
  );
};

export default App;