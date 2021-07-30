import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import AppRouter from "AppRouter";
import { authService } from "FBase";

import styles from "./App.module.scss";

// -- assets
import Loading from "assets/IconSvg/Loading";

const cx = classNames.bind(styles);

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <div className={cx("article", !init && "type-full")}>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        <div className={cx("loading-area")}>
          <Loading width={350} height={350} />
        </div>
      )}
    </div>
  );
}

export default App;
