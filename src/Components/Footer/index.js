import React from 'react'
import styled from 'styled-components'
import { BiCopyright } from 'react-icons/bi'
import { Col, Row } from 'react-bootstrap'
import './index.css'

const Footer = () => {
    return (
        <>
            <FooterDiv>
                <Row className='footer-row'>
                    <Col xs={12} sm={4} md={5}>
                        <BiCopyright />
                        2023 Company
                    </Col>
                    <Col xs={12} sm={8} md={7}>
                        <Ul>
                            <Li>
                                {'About'}
                            </Li>
                            <Li>
                                {'Terms of use'}
                            </Li>
                            <Li>
                                {'Contact'}
                            </Li>
                        </Ul>
                    </Col>
                </Row>
            </FooterDiv>
        </>
    )
}

const FooterDiv = styled.div`
background-color:grey;
color:#fff;
font-size:16px;
height:45px;
padding-left:40px;
padding-right:40px;
display:flex;
align-items:center;
`;

const Ul = styled.ul`
text-decoration:none;
display:flex;
float:right;
align-items:center;
justify-content:right;
text-align:center;
`;

const Li = styled.li`
text-decoration:none;
list-style-type:none;
padding-left:15px;
text-align:right;`;

export default Footer