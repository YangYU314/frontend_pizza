import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../../api/axiosInstance";
import "./admin-user.scss";

export default function UserInfo(props) {
  const { users, pageUpdate, currentPage, pageSize } = props;

  const handleDelete = (id) => {
    axiosInstance({
      url: `/user/${id}`,
      method: "DELETE",
    })
      .then((res) => {
        console.log("res.data", res);
        pageUpdate(currentPage, pageSize);
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <>
      {users.map((user) => (
        <div className="admin-user-page__table-content" key={user._id}>
          <span>{user.name}</span>
          <span>{user.email}</span>
          <span>{user.phone}</span>
          <span className="icon" onClick={() => handleDelete(user._id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
        </div>
      ))}
    </>
  );
}
