import React from "react";
import PopWindow from "./PopWindow";
import "./admin-user.scss";

export default function UserInfo(props) {
  const { users, pageUpdate, currentPage, pageSize } = props;

  return (
    <>
      {users.map((user) => (
        <div className="admin-user-page__table-content" key={user._id}>
          <span>{user.name}</span>
          <span>{user.email}</span>
          <span>{user.phone}</span>
          <PopWindow
            id={user._id}
            pageUpdate={pageUpdate}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        </div>
      ))}
    </>
  );
}
