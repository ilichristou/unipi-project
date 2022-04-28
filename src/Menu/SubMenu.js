import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  color: #444444;
  font-size: 18px;

  &:hover {
    background: #f3f6f4;
    border-left: 4px white;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #f3f6f4;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #444444;
  font-size: 18px;

  &:hover {
    background: #eeeeee;
    cursor: pointer;
  }
`;

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path}
                         onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            {subnav &&
            item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                );
            })}
        </>
    );
};

export default SubMenu;
