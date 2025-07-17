import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import ListItem from './nav-list-item/navListItem';
import MobileListItem from './nav-list-item/navListIItem(mobile)';
import qrcode from '../../assets/qr-code.jpg'; // Updated path to QR code image

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const handlePopupClose = () => setShowPopup(false);
  const handlePopupClick = (e) => e.stopPropagation();

  return (
    <div className="nav-container sticky top-0 z-50">
      {/* Upper Navigation */}
      <div className="upper-nav bg-white flex justify-between items-start relative sm:items-center pl-10 pr-10 py-4">
        {/* Logo Section */}
        <div className="logo cursor-pointer md:ml-0 ml-[-40px]">
          <img className="h-[90px]" src={logo} alt="logo" />
        </div>

        {/* Contact + Button Section */}
        <div className="navbar-list flex flex-col sm:flex-row left-[-15px] items-start sm:items-center gap-4 sm:gap-0">
          <div className="group flex items-center sm:mr-6">
            <img className="mr-2" src={phone} alt="phone" />
            <p>7676651025</p>
          </div>
          <div className="group flex items-center sm:mr-6">
            <img className="mr-2" src={email} alt="email" />
            <p>Info@swikarcharitabletrust.org</p>
          </div>
          <div>
            <button
              className="h-12 w-[125px] bg-[#eb2525] text-sm text-white rounded-sm cursor-pointer"
              onClick={() => setShowPopup(true)}
            >
              DONATE NOW
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 z-50 max-[1025px]:inline-block hidden max-lg:relative max-lg:top-16 max-lg:left-0">
          <label htmlFor="menu-toggle" className="cursor-pointer">
            <img
              src={menu}
              alt="menu"
              className="h-8 w-12 max-[1025px]:w-8 mt-[25px] relative right-8"
            />
          </label>
        </div>
      </div>

      {/* Lower Navigation */}
      <div className="relative">
        {/* Desktop Nav */}
        <ul className="lower-nav bg-white text-gray-500 font-bold h-12 w-4/5 m-auto flex justify-between items-center list-disc text-sm transition duration-250 max-[1025px]:hidden">
          <ListItem text="Home" />
          <ListItem text="About" children={['Profile', 'Governance', 'History', 'Swikar Charitable Institutional Partners']} />
          {/* <ListItem text="Founders & Partners" /> */}
          <ListItem text="Sectors" children={['Education', 'Health', 'LivelyHoods', 'divyang', 'environment']} />
          {/* <ListItem text="Awards" /> */}
          <ListItem text="Resources" children={['Annual Reports', 'Publications', 'Intern Reports']} />
          <ListItem text="Get Involved" />
          <ListItem text="CSR" />
          <ListItem text="Innovations" />
          <ListItem text="Impact" />
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="block max-[1025px]:block hidden">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />

          <div className="fixed top-0 left-0 h-full w-9/10 bg-black text-white overflow-y-auto transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out z-40 p-6">
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
                  // { label: 'Board of Trustees', path: '/board-of-trustees' },
                  { label: 'Governance', path: '/governance' },
                  { label: 'Swikar Charitable Institutional Partners', path: '/Swikar Charitable Institutional Partners' },
                ]}
              />
              {/* <MobileListItem text="Founders & Partners" /> */}
              <MobileListItem
                text="Sectors"
                children={[
                  { label: 'Education', path: '/education' },
                  { label: 'Health', path: '/health' },
                  { label: 'LivelyHoods', path: '/livelyHoods' },
                  { label: 'Divyang', path: '/divyang' },
                  { label: 'Environment', path: '/environment' },
                ]}
              />
              {/* <MobileListItem text="Awards" /> */}
              <MobileListItem
                text="Resources"
                children={[
                  { label: 'AnnualReports', path: '/annual-reports' },
                  { label: 'Publication', path: '/publications' },
                  { label: 'Intern Reports', path: '/intern-reports' },
                ]}
              />
              <MobileListItem text="GetInvolved" />
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

      {/* QR Code Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handlePopupClose}
        >
          <div
            className="bg-white p-6 rounded-lg relative w-[300px] sm:w-[400px]"
            onClick={handlePopupClick}
          >
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
              onClick={handlePopupClose}
              aria-label="Close popup"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-4 text-center">Scan & Pay</h2>

            {/* ✅ Updated QR Code path using public folder */}
            <img
              src={qrcode}
              alt="QR Code"
              className="w-full h-auto max-w-[300px] mx-auto"
            />
            <p className="text-center mt-2 text-sm text-gray-600">
              UPI ID: <strong>swikarcharitable11131@sbi</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
