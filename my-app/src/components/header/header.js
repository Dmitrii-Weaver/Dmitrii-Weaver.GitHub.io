import React from 'react'
import { Buttom, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from "react-bootstrap"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HomeRounded, Telegram } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import resumeData from '../../utils/resumeData';
import CustomButton from '../button/button';
import { useNavigate } from "react-router";
import "./header.css"

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

const Header = (props) => {
  const pathname = props?.location?.pathname

  return (
    <Navbar expand="lg" sticky='top' className='header'>
      {/*home link*/}
      <NavLink as={NavLink} to="/">
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>
          {/*resume link*/}
          <Nav.Link as={NavLink} to="/" className={pathname == "/" ? "header_link_active" : "header_link"}>Resume</Nav.Link>
          {/*portfolio link*/}
          <Nav.Link as={NavLink} to="/portfolio" className={pathname == "/portfolio" ? "header_link_active" : "header_link"}>portfolio</Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(resumeData.socials).map(key => (
            <a href={resumeData.socials[key].link} target='_blank'>{resumeData.socials[key].icon}</a>
          ))}
          <CustomButton text={"Hire me"} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header) 