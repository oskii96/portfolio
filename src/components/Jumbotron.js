import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import coding from '../assets/coding.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${coding}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <div className="jumbotron-caption">
                    <h1 className="display-3 jumbotron-header">Oskar Persson</h1>
                    <p className="lead jumbotron-paragraph text-center">Information Systems student graduating in June 2020 with a passion for systems- and web-development.</p>
                </div>
            </Container>
        </Jumbo>
    </Styles>
)