import React from 'react';
import logo from '../../assets/logo.png';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import ListItem from './nav-list-item/navListItem';
import MobileListItem from './nav-list-item/navListIItem(mobile)';

function Navbar() {
  return ( 
    <div className="nav-container sticky top-0 z-50"> 
      {/* Upper Navigation */} 
      <div className="upper-nav bg-white flex justify-between items-start relative sm:items-center pr-10 pl-25 py-4"> 
        {/* Logo Section */} 
        <div className="logo cursor-pointer md:ml-0 ml-[-40px]"> 
          <img className="h-[90px]" src={logo} alt="logo" /> 
        </div> 

        {/* Contact + Button Section */} 
        <div className="navbar-list flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0"> 
          <div className="group flex items-center sm:mr-6"> 
            <img className="mr-2" src={phone} alt="phone" /> 
            <p>079-35164684</p> 
          </div> 
          <div className="group flex items-center sm:mr-6"> 
            <img className="mr-2" src={email} alt="email" /> 
            <p>mail@saath.org</p> 
          </div> 
          <div> 
            <button className="h-12 w-35 bg-[#eb2525] text-sm text-white rounded-sm cursor-pointer"> 
              DONATE NOW 
            </button> 
          </div> 
        </div> 

        <div className="absolute bottom-6 z-50 max-[1025px]:inline-block hidden max-lg:relative max-lg:top-12 max-lg:left-0"> 
            <label htmlFor="menu-toggle" className="cursor-pointer"> 
              <img src={menu} alt="menu" className="h-8 w-8" /> 
            </label> 
        </div> 
      </div> 

      {/* Lower Navigation */} 
      <div className="relative"> 
        {/* Desktop Nav */} 
        <ul className="lower-nav bg-white text-gray-500 font-bold h-12 w-4/5 m-auto flex justify-between items-center list-disc text-sm transition duration-250 max-[1025px]:hidden"> 
          <ListItem text="Home" /> 
          <ListItem text="About" children={['Profile', 'Board of Trustees','Governance','History','Saath Institutional Partners']} /> 
          <ListItem text="Founders & Partners" /> 
          <ListItem text="Sectors" children={['Education', 'Health', 'LivelyHoods', 'Urban Governance']} /> 
          <ListItem text="Awards" /> 

          <ListItem text="Resources" children={['Annual Reports', 'Publications', 'Intern Reports']} /> 
          <ListItem text="Get Involved" /> 

          <ListItem text="CSR" /> 
          <ListItem text="Innovations" /> 
          <ListItem text="Impact" /> 
        </ul> 

        {/* Mobile Hamburger Menu */} 
        <div className="block max-[1025px]:block hidden"> 
          {/* Hidden Checkbox */} 
          <input type="checkbox" id="menu-toggle" className="hidden peer" /> 

          {/* Slide-out Side Drawer */} 
          <div className="fixed top-0 left-0 h-full w-84 bg-black text-white overflow-y-auto transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out z-40 p-6"> 
            <div className="flex justify-end mb-6"> 
              <label htmlFor="menu-toggle" className="cursor-pointer"> 
                <img src={close} alt="close" className="h-6 w-6" /> 
              </label> 
            </div> 
            <ul className="flex flex-col gap-4 text-lg"> 
              <MobileListItem text="Home" /> 
              <MobileListItem 
                text="About" 
                children={[ 
                  { label: 'Profile', path: '/profile' }, 
                  { label: 'History', path: '/history' }, 
                  { label: 'Board of Trustees', path: '/board-of-trustees' }, 
                  { label: 'Governance', path: '/governance' }, 
                  { label: 'Saath Institutional Partners', path: '/saath-institutional-partners' }, 
                ]} 
              /> 
              <MobileListItem text="Founders & Partners" /> 
              <MobileListItem 
                text="Sectors" 
                children={[ 
                  { label: 'Education', path: '/education' }, 
                  { label: 'Health', path: '/health' }, 
                  { label: 'LivelyHoods', path: '/livelyHoods' }, 
                  { label: 'Urban Governance', path: '/urban-governance' }, 
                ]} 
              /> 
              <MobileListItem text="Awards" /> 
              <MobileListItem 
                text="Resources" 
                children={[
                  { label: 'AnnualReports', path: '/annual-reports' }, 
                  { label: 'Publication', path: '/publications' }, 

                  { label: 'Intern Reports', path: '/intern-reports' }, 
                ]} 
              /> 
              <MobileListItem text="Get Involved" /> 
              <MobileListItem text="CSR" /> 
              <MobileListItem text="Innovations" /> 
              <MobileListItem text="Impact" /> 
              <input 
                type="text" 
                name="search" 
                className="w-full rounded-2xl bg-white text-black p-2 pl-3 pr-3 focus:outline-none" 
                placeholder="Search" 
              /> 
            </ul> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
} 

export default Navbar;