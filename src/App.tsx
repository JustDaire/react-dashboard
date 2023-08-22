import * as React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faCirclePlus,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <div>
      <Navbar expand="sm" bg="dark" data-bs-theme="dark" fixed="top">
        {/* <Container> */}
        <Navbar.Brand
          className="border-red navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
          href="#home"
        >
          React Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
      <div className="row">
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 ps-3 bg-body-tertiary">
          <div
            className="offcanvas-md offcanvas-end bg-body-tertiary"
            tabIndex={-1}
            id="sidebarMenu"
            aria-labelledby="sidebarMenuLabel"
          >
            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2 active"
                    aria-current="page"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faCoffee} fixedWidth />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faFile} fixedWidth />
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faCoffee} />
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faCoffee} />
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faCoffee} />
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faCoffee} />
                    <FontAwesomeIcon icon={['far', 'coffee']} />
                    Integrations
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                <span>Saved reports</span>
                <a
                  className="link-secondary"
                  href="#"
                  aria-label="Add a new report"
                >
                  <FontAwesomeIcon icon={faCirclePlus} />
                </a>
              </h6>
              <ul className="nav flex-column mb-auto">
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faCoffee} />
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faCoffee} />
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faCoffee} />
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faCoffee} />
                    Year-end sale
                  </a>
                </li>
              </ul>

              <hr className="my-3" />

              <ul className="nav flex-column mb-auto">
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faCoffee} />
                    Settings
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faCoffee} />
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main col-md-9 col-lg-10 p-0">
          <h1>Dashboard </h1>
        </div>
      </div>
    </div>
  );
}
