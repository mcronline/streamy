import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    

    const actions = props.actions.map(item => <button key={item.label} onClick={item.fn} className={item.class ? 'ui button ' + item.class : 'ui button'}>{item.label}</button>);

    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">{actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;