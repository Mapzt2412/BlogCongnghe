import Head from "next/head";
import { useEffect,useState } from "react";
import React from "react";
import {Login} from "../components/Login";
import {Register} from "../components/Register";
import { Navbars } from '../components/Navbar'
import { Button, Container, Dropdown, DropdownButton, FormControl, InputGroup, Modal, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import avatar from "../assets/avatar.jpg"
import logo from "../assets/logo.png"
import Link from "next/link";
import { useRouter } from 'next/router';
import { userService } from 'services';

export const Header = (props) => {
  const [openLogin, setOpenMLogin] = useState(false);
  const [openRegister, setOpenMRegister] = useState(false);

  const [users, setUsers] = useState(null);

  useEffect(() => {
    userService.getAll().then(x => setUsers(x));
    
  }, []);
  console.log(users)
  useEffect(() => {
    setOpenMLogin(false);
  }, [openLogin])
  useEffect(() => {
    setOpenMRegister(false);
  }, [openRegister])
  const checklogin = () =>
  {
    if(users == null){
      return (
        <>
        <Button  variant="" bsPrefix="" className="btn-login"
              onClick={() => {
                setOpenMLogin(true);
                
            }}
            ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person " viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>Đăng nhập</Button>
              <div className="vr" />  
            <Button variant="" bsPrefix=""className="btn-register"
            onClick={() => {
              
              setOpenMRegister(true);
              
              
          }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus " viewBox="0 0 16 16">
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
        </svg>Đăng ký</Button>
      </>      
        );
    }
    else{
      return (
        <>
        
          <div className="notification">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
            </svg>
              <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                1
                <span className="visually-hidden">unread messages</span>
              </span>
          </div>
          <DropdownButton variant="" className="user" id="dropdown-basic-button" title={users.map(user =><Image src={user.avatar} width={35} height={35}/>)}> 
            <Dropdown.Item href="profile">Trang cá nhân</Dropdown.Item>
            <Dropdown.Item href="dashboard">DashBoard</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Cài đặt</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={()=>userService.logout()}>Đăng xuất</Dropdown.Item>
          </DropdownButton>
          <div className="vr"/>  
          <Link href="createPost">
            <Button variant="" className="create-article">TẠO BÀI VIẾT</Button>
          </Link>
        
        </>
      );
    }
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="home">
            <Image src={logo} width={200} height={48} className="logo">
              </Image>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <InputGroup className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <FormControl
                  className="form-search"
                  placeholder="Nhập từ khóa tìm kiếm"
                />
              </InputGroup>

            </Nav>
          </Navbar.Collapse>
        {checklogin()}
          </div>
          

      </Navbar>
      <Login open = {openLogin} /> 
      <Register open = {openRegister} /> 
      <Navbars page={props.page}/>
    </>
  );
}
