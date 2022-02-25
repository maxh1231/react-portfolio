import React from 'react';

const Nav = ({ currentPage, setCurrentPage }) => {
    return (
        <ul className="flex flex-row text-[#e5e5e5]">
            <li className="mx-4 " >
                <a onClick={() => setCurrentPage('Home')} className={`navItem text-base lg:text-lg ${currentPage === 'Home' && 'navActive'}`} >
                    About Me
                </a>
            </li>
            <li className="mx-4">
                <a onClick={() => setCurrentPage('Portfolio')} className={`navItem text-lg md:text-xl ${currentPage === 'Portfolio' && 'navActive'}`}>
                    Portfolio
                </a>
            </li>
            <li className="mx-4">
                <a onClick={() => setCurrentPage('Resume')} className={`navItem text-lg md:text-xl ${currentPage === 'Resume' && 'navActive'}`}>
                    Resume
                </a>
            </li>
            <li className="mx-4">
                <a onClick={() => setCurrentPage('Contact')} className={`navItem text-lg md:text-xl ${currentPage === 'Contact' && 'navActive'}`}>
                    Contact
                </a>
            </li>
        </ul>

    )
}

export default Nav;