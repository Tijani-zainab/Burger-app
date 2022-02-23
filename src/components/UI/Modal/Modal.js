import React, {Component} from "react";
import classes from "./Modal.module.css";
import Wrap from "../../../hoc/Wrap/Wrap";
import Backdrop from "../Backdrop/Backdrop";
// import { Component } from "react/cjs/react.production.min";

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;      
    }

    componentDidUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render () {
        return (
            <Wrap>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children} 
                </div>
            </Wrap>
        )
    }
}

export default Modal;