import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import { Col, Row } from "react-bootstrap";
import Header from "../../Shared/Header/Header";
import useAuth from "../../Hooks/useAuth";

import "./Dashboard.css";
import Payment from "../Payment/Payment"
import MakeAdmn from "../MakeAdmin/MakeAdmn";
import MyOrders from "../MyOrders/MyOrders"
import AddProducts from "../AddProducts/AddProducts";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders"
import ManageProducts from "../ManageProducts/ManageProduct"
import MakeReview from "../MakeReview/MakeReview";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { logOut } = useAuth();
  return (
    <div className="dashboard_bg">
      <Row>
        <Col xs={12} md={6} lg={3}>
          <div border="dark" className="sidebar">
            <ul>
              <Link to={`${url}/payment`}>
                <li>PayMent</li>{" "}
              </Link>
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
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmn></MakeAdmn>
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProducts></AddProducts>
            </Route>
            <Route path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path={`${path}/manageProduct`}>
              <ManageProducts></ManageProducts>
            </Route>
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
