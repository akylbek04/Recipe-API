import "./Navigation.css";
import { NavbarBrand, Navbar, NavItem } from "reactstrap";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch, BsFillSunFill } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import { useState } from "react";


export const Navigation = ({ query, setQuery, handleClick, switchedOff, setSwitchedOff }) => {
  const [showUp, setShowUp] = useState(false);
  const location = useLocation();
  const path = location.pathname;


  const handleCombined = ( ) => {
    setShowUp(!showUp)
    handleClick()
  }

  return (
    <Navbar className="p-1" color="dark" dark>
      <NavbarBrand href="/">
        <img
          alt="logo"
          src="https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png"
          style={{
            height: 30,
            width: 30,
          }}
        />
      </NavbarBrand>
      <div className="d-flex">
        <NavItem>
          <Link to="/products">products</Link>
        </NavItem>
        <NavItem>
          <Link to="/instructions">instructions</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">contact</Link>
        </NavItem>
      </div>
      <div className="icon-container">
        <NavItem className="mx-2">
          <Link to="/login">
            <AiOutlineUser className="p-0 m-0 icon" />
          </Link>
        </NavItem>
        {path === "/products" &&
          (showUp ? (
            <div className="debounce-group">
            <DebounceInput
            className={`debounce ${showUp ? 'show' : ''} ms-1`}
              minLength={1}
              debounceTimeout={2000}
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              placeholder='search...'
            />
            <BsSearch color="white" className="search me-1"  onClick={handleCombined}/>
            </div>
          ) : (
            <BsSearch color="white" className="debounce-icon mx-2 icon" onClick={() => setShowUp(!showUp)} />
          ))}
          <BsFillSunFill color="white " className="mx-2 icon"  onClick={() => setSwitchedOff(!switchedOff)}/>
      </div>
    </Navbar>
  );
};
