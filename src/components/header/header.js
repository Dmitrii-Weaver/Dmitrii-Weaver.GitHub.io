import React from 'react'
import { Buttom, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from "react-bootstrap"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { HomeRounded, Telegram } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import resumeData from '../../utils/resumeData';
import CustomButton from '../button/button';
import { useNavigate } from "react-router";
import "./header.css"
import { MenuItem } from '@mui/material';

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

const Header = (props) => {
  const pathname = window.location.pathname
  console.log(pathname)

  return (
    <Navbar expand="lg" sticky='top' className='header'>
      {/*home link*/}
      <Link exact to="/">
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>
          {/*resume  link*/}
          <Link to="/" className={pathname == "/" ? "header_link_active" : "header_link"} style={{ textDecoration: 'none' }}  >
            <MenuItem style={{ paddingLeft: 13 }}>Resume</MenuItem>
          </Link> &nbsp;
          {/*portfolio link*/}
          <Link to="/portfolio" className={pathname == "/portfolio" ? "header_link_active" : "header_link"} style={{ textDecoration: 'none' }} >
            <MenuItem style={{ paddingLeft: 13 }}>Portfolio</MenuItem>
          </Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(resumeData.socials).map(key => (
            <a href={resumeData.socials[key].link} target='_blank'>{resumeData.socials[key].icon}</a>
          ))}
          <a href="DTcv.pdf" download="DTcv.pdf"> <CustomButton text={"Hire me"} icon={<Telegram />} /> </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header) 