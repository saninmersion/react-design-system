import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { OnOutsideClick } from "hooks";

const Menu = ({ title, options }) => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();

  // State for our menu
  const [menuVisible, setMenuVisible] = useState(false);

  // Call hook passing in the ref and a function to call on outside click
  OnOutsideClick(ref, () => setMenuVisible(false));

  return (
    <Content ref={ref} menuVisible={menuVisible}>
      <div onClick={() => setMenuVisible(!menuVisible)} className="selection">
        <span className="selection__title">{title}</span>
        <span className="selection__icon" />
      </div>
      <div className="menu-wrap">
        <ul className="menu-wrap__menu">
          {options.map((val, index) => (
            <li
              onClick={() => setMenuVisible(false)}
              key={index}
              className="menu-item"
            >
              {val.text}
            </li>
          ))}
        </ul>
      </div>
    </Content>
  );
};

export default Menu;

Menu.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string.isRequired
};

const Content = styled.div`
  position: relative;
  display: inline-block;
  font-size: 14px;

  .selection {
    color: #363636;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 10px 15px;
    border:  1px solid #dbdbdb;
    border-radius: 4px;
    &__title {
      margin-right: 6px;
    }
    &__icon {
        display: inline-block;
        vertical-align: middle;
        margin-left: 6px;
        border-style: solid;
        ${props =>
          props.menuVisible
            ? `
            border-color: transparent transparent #333 ;
                border-width: 0 4px 4px;
            `
            : `
            border-color: #333 transparent transparent;
            border-width: 4px 4px 0;
        `};
        }
    }
  }

  .menu-wrap {
    padding-top: 6px;
    position: absolute;
    top: 100%;
    left: 0px;
    width: auto;
    min-width: 184px;
    z-index: 1000;
    transition: all 300ms ease-in-out 0s;

    ${props =>
      props.menuVisible
        ? `
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        `
        : `
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4px);
    `};
    &__menu {
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
      padding: 4px 0;
      border-radius: 4px;
      text-align: left;

      .menu-item {
        cursor: pointer;
        background-color: #ffff;
        padding: 10px 20px;
        transition: all 0.2s ease-in 0s;
        &:hover,
        &--active {
          color: #00529b;
        }

        &:hover {
          background-color: #ddefff;
        }
      }
    }
`;
