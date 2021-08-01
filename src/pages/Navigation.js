import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { MenuOutlined, MenuFoldOutlined } from "@ant-design/icons";

import styles from "./Navigation.module.scss";
import { Menu, Button } from "antd";

const cx = classNames.bind(styles);

// REF: https://developer0809.tistory.com/100
const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBar, setToggleBar] = useState(true);

  const toggleChange = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  return (
    <div className={cx("article")}>
      <div className={cx("nav-top")}>
        <Button type="primary" onClick={toggleChange}>
          {toggleBar ? <MenuOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      {toggleMenu && (
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={toggleBar}
          onClick={onMenuClick}
        >
          <Menu.Item key="home">
            <Link to="/">홈 바로가기</Link>
          </Menu.Item>
          <Menu.Item key="profile">
            <Link to="/profile">프로필</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navigation;
