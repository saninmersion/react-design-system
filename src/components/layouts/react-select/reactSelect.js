import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class ReactSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      selectedMenu: props.defaultSelection
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible
    }));
  };

  handleMenuSelect = val => {
    if (this.state.selectedMenu !== val) {
      this.setState(
        {
          menuVisible: false,
          selectedMenu: val
        },
        () => {
          this.props.selectChange(val);
        }
      );
    }
  };

  render() {
    const { menuVisible, selectedMenu } = this.state;
    const { items, isFiscalYear, hasBorderSelection } = this.props;

    return (
      <Content
        menuVisible={menuVisible}
        isFiscalYear={isFiscalYear}
        hasBorderSelection={hasBorderSelection}
      >
        <div className="selection" onClick={this.toggleMenu}>
          <span className="selection__title">{selectedMenu.text}</span>
          <span className="selection__icon" />
        </div>
        <div className="menu-wrap">
          <ul className="menu-wrap__menu">
            {items.length &&
              items.map((val, index) => (
                <li
                  key={index}
                  onClick={() => this.handleMenuSelect(val)}
                  className={
                    val.id === selectedMenu.id
                      ? "menu-item menu-item--active"
                      : "menu-item"
                  }
                >
                  {val.text}
                </li>
              ))}
          </ul>
        </div>
      </Content>
    );
  }
}

export default ReactSelect;

ReactSelect.propTypes = {
  defaultSelection: PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.number
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  selectChange: PropTypes.func,
  hasBorderSelection: PropTypes.bool
};

const selectionHeight = "36px";

const Content = styled.div`
  font-size: 1rem;
  position: relative;
  .selection {
    align-items: center;
    ${props =>
      props.hasBorderSelection &&
      ` border: 1px solid rgba(255, 255, 255, 0.4)`};

    border-radius: calc(${selectionHeight} / 2);
    box-sizing: border-box;
    color: #f0f8ff;
    cursor: pointer;
    display: inline-flex;
    height: ${selectionHeight};
    padding: 0 16px;
    position: relative;

    &__title {
      margin-right: 6px;
    }

    &__icon {
      display: inline-block;
      vertical-align: middle;
      margin-left: 6px;
      ${props =>
        props.menuVisible
          ? `
          border-color: transparent transparent rgb(255, 255, 255) ;
            border-width: 0 4px 4px;
          `
          : `
        border-color: rgb(255, 255, 255) transparent transparent;
        border-width: 4px 4px 0;
      `};

      border-style: solid;
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
      box-shadow: 0 2px 10px rgba(1, 73, 131, 0.28);
      border-radius: 6px;
      .menu-item {
        cursor: pointer;
        background-color: #f0f8ff;
        padding: 10px 20px;
        transition: all 0.2s ease-in 0s;

        &:first-child {
          border-radius: 6px 6px 0 0;
        }
        &:last-child {
          border-radius: 0 0 6px 6px;
        }

        &:not(:last-child) {
          border-bottom: 1px solid rgba(1, 73, 131, 0.1);
        }

        &:hover,
        &--active {
          color: #00529b;
        }

        &:hover {
          background-color: #ddefff;
        }
      }
    }
  }
`;

/* 
import { ReactSelect } from 'components';  
<ReactSelect
defaultSelection={{ text: '2075-76', id: 2076 }}
items={[{ text: '2075-76', id: 2076 }, { text: '2056-57', id: 2056 }]}
selectChange={val => {
  console.log(val);
}}
hasBorderSelection
isFiscalYear
/> */
