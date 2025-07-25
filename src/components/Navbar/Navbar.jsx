import { useState } from "react";
import LogoImg from '../../assets/images/logo_nogap.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUsers, faUserTie, faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [ 
    { icon: <FontAwesomeIcon icon={faBriefcase} />, name: "Services", link: "#" }, 
    { icon: <FontAwesomeIcon icon={faUsers} />, name: "Clients", link: "#" },
    { icon: <FontAwesomeIcon icon={faUserTie} />, name: "Careers", link: "#" },
    { icon: <FontAwesomeIcon icon={faEnvelope} />, name: "Contact", link: "#" }
  ];

  return (
    <nav className="bg-neutral-900/40 text-neutral-100">
   
      <div className='flex justify-between items-center px-6 lg:px-24 py-5'>
     
        <a href="/" className="flex items-center space-x-2">
          <img src={LogoImg} alt="Logo" className="h-10 w-auto" />
          <span className="font-[UnitedSans] font-bold text-3xl tracking-[5px]">DAEVA</span>
        </a>

       
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl z-50">
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

    
        <ul className='hidden lg:flex space-x-10 text-[20px] font-[UnitedSans] font-light tracking-[3px]'>
          {navLinks.map((item, index) => (
            <li key={index} className="cursor-pointer group">
              <a href={item.link} className='flex items-center space-x-2 pl-[1rem]'>
             
                <span className="relative">
                  {item.name}
                  <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-white origin-left transform scale-x-0 transition-transform duration-400 ease-in-out group-hover:scale-x-100"></span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`
        lg:hidden overflow-hidden transition-[max-height] duration-700 ease-in-out
        ${menuOpen ? 'max-h-[500px]' : 'max-h-0'}
      `}>
        <ul className='flex flex-col items-center space-y-4 py-4 text-[20px] font-[UnitedSans] font-light tracking-[3px]'>
          {navLinks.map((item, index) => (
            <li key={index} className="cursor-pointer group">
              <a href={item.link} className='flex items-center space-x-2'>
               
                <span className="relative">
                  {item.name}
                  <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-white origin-left transform scale-x-0 transition-transform duration-400 ease-in-out group-hover:scale-x-100"></span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-900 to-transparent opacity-60" />
    </nav>
  );
}
