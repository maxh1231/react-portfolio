import Nav from './Nav'

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header className="flex">
            <div>
                <h1 className="text-4xl font-bold underline">
                    Max Humpherys
                </h1>
            </div>
            <div>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </header>
    )
}

export default Header;