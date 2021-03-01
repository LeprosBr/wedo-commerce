import * as React from 'react'
import Navbar from '../navbar'

const Layout: React.FunctionComponent = ({ children }) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    )
}
export default Layout
