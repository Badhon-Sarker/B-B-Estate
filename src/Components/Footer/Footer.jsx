import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer >
      <div data-aos="fade-up" data-aos-duration="1000" className="footer p-10 bg-neutral text-neutral-content flex flex-col md:flex-row justify-center items-center md:justify-evenly font-poppins">
      <div>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Home Design</a>
        <a className="link link-hover">Interior</a>
        <a className="link link-hover">Exterior</a>
        <a className="link link-hover">Sale and Rent</a>
      </div>
      <div>
        <h6 className="footer-title">Company</h6>
        <NavLink to={'/aboutus'} className="link link-hover">About us</NavLink>
        <NavLink to={'/aboutus'} className="link link-hover">Contact</NavLink>
        <NavLink to={'/aboutus'} className="link link-hover">Agents</NavLink>
        <NavLink to={'/aboutus'} className="link link-hover">Reviews</NavLink>
      </div>
      <div>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      </div>

      <div className="px-10 bg-neutral text-center text-blue-100">
        <p>Copyright © 2024 - All right reserved by B&B Estate</p>
      </div>
    </footer>
  );
};

export default Footer;
