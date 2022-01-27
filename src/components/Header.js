import Nav from './Nav'

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header className="flex flex-row w-full items-center justify-between">
            <div>
                <h1 className="text-4xl font-bold underline text-left">
                    Max Humpherys
                </h1>
            </div>
            <div className="flex flex-row justify-end ">
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </div >
        </header>
    )
}

export default Header;