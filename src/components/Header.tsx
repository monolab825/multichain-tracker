import { FaMagnifyingGlassDollar } from "react-icons/fa6";
import logo from "../assets/logo.png"

const Header = () => {

  return (
    <header>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        MultiChain Assets Tracker
      </h1>
      <div className="navbar bg-base-100">
        <img src={logo} className="logo"/>
        <a className="btn btn-ghost text-xl"> Explore your assets in EVM compatible chains.</a>
      </div>
    </header>
  )
}

export default Header