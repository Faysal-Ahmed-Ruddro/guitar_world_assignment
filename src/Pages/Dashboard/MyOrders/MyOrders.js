import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://rocky-wildwood-09744.herokuapp.com/orders?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // const handleDelete = (id) => {
  //   const url = `http://localhost:5000/orders${id}`;
  //   fetch(url, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.deletedCount) {
  //         swal("DONE!", "Product Deleted Successfully", "success");
  //         const remaining = orders.filter((order) => order._id !== id);
  //         setOrders(remaining);
  //       }
  //     });
  // };
  return (
    <div className="orders_bg p-3">
      <h2 className="text-warning">My Orders Quantity: {orders?.length}</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Phone</th>
            <th>Price</th>
            <th>Cancel</th>
          </tr>
        </thead>
        {orders?.map((order) => (
          <tbody>
            <tr>
              <td className="text-secondary">{order?.productName}</td>
              <td className="text-secondary">{order?.phone}</td>
              <td className="text-secondary">{order?.price}</td>
              <td className="text-secondary"><button className="btn btn-outline-warning">Cancel</button></td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyOrders;
