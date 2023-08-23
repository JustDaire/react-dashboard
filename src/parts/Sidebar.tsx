import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faCirclePlus,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 ps-0 bg-body-tertiary">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex={-1}
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2 active"
                to="/"
              >
                <FontAwesomeIcon icon={faCoffee} fixedWidth />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <FontAwesomeIcon icon={faFile} fixedWidth />
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <FontAwesomeIcon icon={faCoffee} />
                Products
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2 active"
                to="/customers"
              >
                <FontAwesomeIcon icon={faCoffee} fixedWidth />
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2 active"
                to="/report-stocks"
              >
                <FontAwesomeIcon icon={faCoffee} fixedWidth />
                Reports
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
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
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <FontAwesomeIcon icon={faCoffee} />
                Current month
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <FontAwesomeIcon icon={faCoffee} />
                Last quarter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <FontAwesomeIcon icon={faCoffee} />
                Social engagement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <FontAwesomeIcon icon={faCoffee} />
                Year-end sale
              </a>
            </li>
          </ul>

          <hr className="my-3" />

          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <FontAwesomeIcon icon={faCoffee} />
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <FontAwesomeIcon icon={faCoffee} />
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
