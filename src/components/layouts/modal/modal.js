import React, { Component } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import "./modal.css";

/**
 * @render react
 * @name Modal
 * @example
 * <Modal isOpen={true} themeColor='#51d7fb' headerTitle="New Year's Day"><p>Hold on to your memories. They will hold on to you.</p></Modal>
 */
class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true
    };

    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.isOpen
    });
  }

  handleClose() {
    this.props.handleClose();
  }

  render() {
    const {
      shouldCloseOnOverlayClick,
      headerTitle,
      themeColor,
      children
    } = this.props;

    return (
      <ReactModal
        className="modal-content"
        isOpen={this.state.showModal}
        onRequestClose={this.handleClose}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        ariaHideApp={false}
      >
        <Header themeColor={themeColor}>
          {headerTitle}
          <CloseIcon onClick={this.handleClose} />
        </Header>
        <Body>{children}</Body>
      </ReactModal>
    );
  }
}

export default Modal;

const Header = styled.div`
  color: #fff;
  background: ${props => (props.themeColor ? props.themeColor : "fff")};
  position: relative;
  padding: 18px 18px;
  border-radius: 8px 8px 0px 0px;
  font-weight: 600;
`;

const Body = styled.div`
  padding: 36px 18px;
  background: #fff;
  border-radius: 0px 0px 8px 8px;
`;

const CloseIcon = styled.span`
    border-radius: 50%;
    background-color: rgba(22, 45, 61, 0.2);
  	display: block;
    height: 24px;
    width: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    opacity: 0.6;
    cursor: pointer;
    transition: all .2s ease-in;
    
    &:hover{
       background-color: rgba(22, 45, 61, 0.5);
    }   
    
    &:before,&:after{
    	content: '';
    height: 12px;
    width: 2px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 6px;
    }
    
    &:before{
    transform: translate(-50%,-50%) rotate(-45deg);
    }
    
    &:after{
    transform: translate(-50%,-50%) rotate(45deg);
    }
}
`;
