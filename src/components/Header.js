import Nav from './Nav'

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <header className="flex flex-row w-full items-center justify-between bg-[#4D0823]">
            <div>
                <h1 className="text-4xl text-left text-[#e5e5e5] p-2">
                    Max Humpherys
                </h1>
            </div>
            <div className="flex flex-row justify-end ">
                <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div >
        </header>
    )
}

export default Header;