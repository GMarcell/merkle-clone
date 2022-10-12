import { NextComponentType } from "next";
import Image from "next/image";
import { useEffect } from "react";
import Logo from "../assets/cropped-mk-40.png"

const Navbar: NextComponentType = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand abs" href="#">
            <Image src={Logo} alt="Logo" width={270} height={80} />
          </a>
          <button className="navbar-toggler ms-auto border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
            <span></span>
          </button>
          <div className="navbar-collapse collapse" id="collapseNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="" data-bs-target="#myModal" data-bs-toggle="modal">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="" data-bs-target="#myModal" data-bs-toggle="modal">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar