import React from "react";
import classNames from "classnames/bind";
import AppRouter from "AppRouter";

import styles from "./App.module.scss";

// -- assets
import Loading from "assets/IconSvg/Loading";

const cx = classNames.bind(styles);

function App() {
  const init = true;
  return (
    <div className={cx("article", !init && 'type-full')}>
      {init ? (
        <AppRouter />
      ) : (
        <div className={cx("loading-area")}>
          <Loading width={350} height={350} />
        </div>
      )}
    </div>
  );
}

export default App;
