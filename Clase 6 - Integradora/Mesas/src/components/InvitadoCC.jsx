import React, { Component } from 'react';
import '../styles/Component.css';

export default class InvitadoCC extends Component {
    render() {
        return (
            <li>{this.props.nombre} {this.props.invitado ? ' ' : ' no '} está invitado a la fiesta</li>
        )
    }
}