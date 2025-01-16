
import React from "react";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import './App.css'

const App = () => {
  return (
    <div id="root">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
     
    </div>
  );
};

export default App
