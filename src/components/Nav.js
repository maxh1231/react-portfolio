import React from 'react';

const Nav = ({ currentPage, handlePageChange }) => {
    return (
        <ul className="flex flex-row">
            <li className="mx-4" >
                <a onClick={() => handlePageChange('Home')}>
                    About Me
                </a>
            </li>
            <li className="mx-4">
                <a onClick={() => handlePageChange('Portfolio')}>
                    Portfolio
                </a>
            </li>
            <li className="mx-4">
                <a onClick={() => handlePageChange('Resume')}>
                    Resume
                </a>
            </li>
            <li className="mx-4">
                <a onClick={() => handlePageChange('Contact')}>
                    Contact
                </a>
            </li>
        </ul>

    )
}

export default Nav;