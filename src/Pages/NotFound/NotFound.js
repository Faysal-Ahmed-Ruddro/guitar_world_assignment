import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./NotFound.css"

const NotFound = () => {
    return (
      <div className="notFound">
        <NavLink className="notFOund_btn" to="/">
          {" "}
          <Button variant="success"> Go To Home </Button>{" "}
        </NavLink>
      </div>
    );
};

export default NotFound;