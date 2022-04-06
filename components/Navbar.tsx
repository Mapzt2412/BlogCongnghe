/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Login} from "../components/Login";

export const Navbars = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
    <Navbar className="navbar-custom" expand="lg" bg="" style={{padding:" 0px"}}>
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center'>
          <Nav className="collapse-custom ">
            <Nav.Link href="#home" style={{color:"white"}}>Trang chủ</Nav.Link>
            <Nav.Link href="#gioithieu" style={{color:"white"}}>Giới thiệu</Nav.Link>
            <Nav.Link href="#bangtin" style={{color:"white"}}>Bảng tin</Nav.Link>
            <Nav.Link href="#xuhuong" style={{color:"white"}}>Xu hướng</Nav.Link>
            <Nav.Link href="#tintuc" style={{color:"white"}}>Tin tức</Nav.Link>
            <Nav.Link href="#dexuat" style={{color:"white"}}>Đề xuất</Nav.Link>
            <Nav.Link href="#vlog" style={{color:"white"}}>Vlog</Nav.Link>
            <Nav.Link href="#help" style={{color:"white"}}>Trợ giúp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};
