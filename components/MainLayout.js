import Navbar from "./Navbar"

const Layout = ({children}) => {
    return (
        <div className="main-layout">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;