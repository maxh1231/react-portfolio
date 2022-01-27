import Nav from './Nav'

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header>
            <div>
                <h1>
                    Max Humpherys
                </h1>
            </div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header;