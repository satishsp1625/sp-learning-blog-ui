import React, { useState } from 'react';
import img from '../images/SP1.jpg';
import { Link } from 'react-router-dom'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse,
    MDBBtn,
    MDBInputGroup
} from 'mdb-react-ui-kit';



export default function Header() {
    const [showNavColor, setShowNavColor] = useState(false);



    return (
        <>
            <header>
               
                <MDBNavbar  expand='lg' dark bgColor='dark' >
                    <MDBContainer fluid>
                        <Link to="/">
                            <MDBNavbarBrand>
                                <img src={img} width={250} height={80} />
                            </MDBNavbarBrand>
                        </Link>

                      

                        <MDBNavbarToggler
                            type='button'
                            data-target='#navbarColor02'
                            aria-controls='navbarColor02'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowNavColor(!showNavColor)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>
                        <MDBCollapse show={showNavColor} navbar>
                            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                                <MDBNavbarItem className='active'>
                                    <Link to='/'>
                                        <MDBNavbarLink aria-current='page'>
                                            Home
                                        </MDBNavbarLink>
                                    </Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <Link to='/article'>
                                        <MDBNavbarLink aria-current='page'>
                                            All Articles
                                        </MDBNavbarLink>
                                    </Link>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                            <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
                            <MDBBtn outline>Search</MDBBtn>
                        </MDBInputGroup>

                    </MDBContainer>
                </MDBNavbar>
            </header>
        </>
    )
}