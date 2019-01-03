import React from "react";
import styled from "styled-components";

/**
 * @render react
 * @name Burger
 * @example
 * <Burger isOpen={false} heightIcon={10} widthLine={18} heightLine={2} transitionTime={0.4} />
 */
const Burger = props => {
  const translateY = props.heightIcon / 2;
  const translateX = 0;

  return (
    <Content
      color={props.color}
      heightIcon={props.heightIcon}
      widthLine={props.widthLine}
      heightLine={props.heightLine}
      transitionTime={props.transitionTime}
      translateX={translateX}
      translateY={translateY}
    >
      <a
        title="Menu"
        className={props.isOpen ? "hamburger-icon active" : "hamburger-icon"}
      >
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
      </a>
    </Content>
  );
};

Burger.defaultProps = {
  color: "#3A424C",
  heightIcon: "10",
  widthLine: "18",
  heightLine: "2",
  transitionTime: "0.4"
};

export default Burger;

const Content = styled.div`
  .hamburger-icon {
    width: ${props => props.widthLine}px;
    height: ${props => props.heightIcon}px;
    position: relative;
    display: block;

    .line {
      display: block;
      background: ${props => props.color};
      width: ${props => props.widthLine}px;
      height: ${props => props.heightLine}px;
      position: absolute;
      left: 0;
      border-radius: calc((${props => props.heightLine}px / 2));
      transition: all ${props => props.transitionTime}s;
      -webkit-transition: all ${props => props.transitionTime}s;
      -moz-transition: all ${props => props.transitionTime}s;

      &.line-1 {
        top: 0;
      }
      &.line-2 {
        top: 50%;
      }
      &.line-3 {
        top: 100%;
      }
    }
    &:hover,
    &:focus {
      .line-1 {
        transform: translateY(${props => props.heightLine}px / 2 * -1);
        -webkit-transform: translateY(${props => props.heightLine}px / 2 * -1);
        -moz-transform: translateY(${props => props.heightLine}px / 2 * -1);
      }
      .line-3 {
        transform: translateY(${props => props.heightLine}px / 2);
        -webkit-transform: translateY(${props => props.heightLine}px / 2);
        -moz-transform: translateY(${props => props.heightLine}px / 2);
      }
    }
    &.active {
      .line-1 {
        transform: translateY(${props => props.translateY}px)
          translateX(${props => props.translateX}px) rotate(45deg);
        -webkit-transform: translateY(${props => props.translateY}px)
          translateX(${props => props.translateX}px) rotate(45deg);
        -moz-transform: translateY(${props => props.translateY}px)
          translateX(${props => props.translateX}px) rotate(45deg);
      }
      .line-2 {
        opacity: 0;
      }
      .line-3 {
        transform: translateY(${props => props.translateY * -1}px)
          translateX(${props => props.translateX * -1}px) rotate(-45deg);
        -webkit-transform: translateY(${props => props.translateY * -1}px)
          translateX(${props => props.translateX - 1}px) rotate(-45deg);
        -moz-transform: translateY(${props => props.translateY * -1}px)
          translateX(${props => props.translateX}px) rotate(-45deg);
      }
    }
  }
`;
