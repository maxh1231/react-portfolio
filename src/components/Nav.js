import React from 'react';

const Nav = ({ currentPage, handlePageChange }) => {
    return (
        <ul className="flex flex-row text-[#e5e5e5]">
            <li className="mx-4 " >
                <a onClick={() => handlePageChange('Home')} className="text-xl ">
                    About Me
                </a>
            </li>
            <li className="mx-4">
                <a onClick={() => handlePageChange('Portfolio')} className="text-xl">
                    Portfolio
                </a>
            </li>
            <li className="mx-4">
                <a onClick={() => handlePageChange('Resume')} className="text-xl">
                    Resume
                </a>
            </li>
            <li className="mx-4">
                <a onClick={() => handlePageChange('Contact')} className="text-xl">
                    Contact
                </a>
            </li>
        </ul>

    )
}

export default Nav;