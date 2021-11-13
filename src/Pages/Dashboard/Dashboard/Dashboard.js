import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import { Col, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

import "./Dashboard.css";
import Payment from "../Payment/Payment";
import MakeAdmn from "../MakeAdmin/MakeAdmn";
import MyOrders from "../MyOrders/MyOrders";
import AddProducts from "../AddProducts/AddProducts";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProduct";
import MakeReview from "../MakeReview/MakeReview";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { logOut, admin } = useAuth();
  return (
    <div className="dashboard_bg">
      <Row>
        <Col xs={12} md={6} lg={3}>
          <div border="dark" className="sidebar">
            <ul>
              <Link to={`${url}/payment`}>
                <li>PayMent</li>{" "}
              </Link>
              <Link to={`${url}/myOrders`}>
                <li>My Orders</li>{" "}
              </Link>
              {admin && (
                <div>
                  <Link to={`${url}/makeAdmin`}>
                    <li>Make Admin</li>{" "}
                  </Link>
                  <Link to={`${url}/addProduct`}>
                    {" "}
                    <li>Add Product</li>
                  </Link>
                  <Link to={`${url}/manageAllOrders`}>
                    {" "}
                    <li>Manage All Orders</li>
                  </Link>
                  <Link to={`${url}/manageProduct`}>
                    {" "}
                    <li>Manage Products</li>
                  </Link>
                </div>
              )}
              <Link to={`${url}/makeReview`}>
                {" "}
                <li>Review</li>
              </Link>
              <Link to="#" onClick={logOut}>
                {" "}
                <li>LogOut</li>
              </Link>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={6} lg={9}>
          <Switch>
            <Route exact path={path}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <Route path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmn></MakeAdmn>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProducts></AddProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProduct`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <Route path={`${path}/makeReview`}>
              <MakeReview></MakeReview>
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
