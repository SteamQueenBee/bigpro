import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './script';

export default class About extends Component {
    render() {
        return (
            <div className={Container} >
                <div className= {Row} >
                    <div className= {Col}>
                        <h1 class={Row} id='movie-list'>Movie List</h1>
                    </div>

                </div>
                
            </div>
        );
    }
}

