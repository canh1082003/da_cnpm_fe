import React from "react";
import "./style.css";
import "../../style/Manage.css";
const Manage = () => {
  return (
    <div className="style">
      <div className="manage">
        <div className="table">
          <div className="title_table">
            <p>Account</p>
            <p>Email</p>
            <p>Phone</p>
            <p>Action</p>
          </div>
          <div className="infor_table">
            <p>#abcdffc</p>
            <p>10/20/2002</p>
            <p>100</p>
            <p className="action" tabindex="0">
              ...
              <div className="btn_action">
                <div className="edit">Edit</div>
                <div className="delete">Delete</div>
              </div>
            </p>
          </div>
          <div className="infor_table">
            <p>#abcdffc</p>
            <p>10/20/2002</p>
            <p>100</p>
            <p className="action" tabindex="0">
              ...
              <div className="btn_action">
                <div className="edit">Edit</div>
                <div className="delete">Delete</div>
              </div>
            </p>
          </div>
          <div className="infor_table">
            <p>#abcdffc</p>
            <p>10/20/2002</p>
            <p>100</p>
            <p className="action" tabindex="0">
              ...
              <div className="btn_action">
                <div className="edit">Edit</div>
                <div className="delete">Delete</div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
