import React, { useEffect, useState } from "react";
import "../style.css";
import "../UI_Admin/style/Manage.css";

const Manage = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const toggleMenu = (index: any) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.target.closest(".optional")) {
        setOpenMenuIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
          {[...Array(15)].map((_, index) => (
            <div key={index} className="infor_table">
              <p>#abcdffc</p>
              <p>10/20/2002</p>
              <p>100</p>
              <p className="action">
                {openMenuIndex === index ? (
                  <div className="btn_action">
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                  </div>
                ) : (
                  <div
                    className="dot"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMenu(index);
                    }}
                  >
                    ...
                  </div>
                )}
              </p>
            </div>
          ))}
          {/* <div className="infor_table">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Manage;
