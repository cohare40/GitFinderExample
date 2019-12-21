import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "id",
        login: "mojumbo",
        avatar_url: "https://avatars2.githubusercontent.com/u/1?s=460&v=4",
        html_url: "https://github.com/mojombo"
      },
      {
        id: "id",
        login: "mojumbo2",
        avatar_url: "https://avatars2.githubusercontent.com/u/1?s=460&v=4",
        html_url: "https://github.com/mojombo"
      },
      {
        id: "id",
        login: "mojumbo",
        avatar_url: "https://avatars2.githubusercontent.com/u/1?s=460&v=4",
        html_url: "https://github.com/mojombo"
      }
    ]
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
