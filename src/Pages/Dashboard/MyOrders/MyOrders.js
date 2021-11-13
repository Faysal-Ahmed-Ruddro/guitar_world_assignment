import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth()
    const [orders,setOrders]= useState([])
    
    useEffect(()=>{
        const url = `https://rocky-wildwood-09744.herokuapp.com/orders?email=${user?.email}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setOrders(data));
    },[])
    return (
      <div className="orders_bg p-3">
        <h2 className="text-warning">My Orders Quantity: {orders?.length}</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Phone</th>
              <th>Price</th>
            </tr>
          </thead>
          {orders?.map((order) => (
            <tbody>
              <tr>
                <td className="text-secondary">{order?.productName}</td>
                <td className="text-secondary">{order?.phone}</td>
                <td className="text-secondary">{order?.price}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
};

export default MyOrders;