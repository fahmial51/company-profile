import React from 'react';

class Alert extends React.Component {
    render(){
        let type = `alert alert-${this.props.type}`;
        return (
            <div class={type} role="alert">
            {this.props.message}
            </div>
        )
    }
} 
export default Alert;