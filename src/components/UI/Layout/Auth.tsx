import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Auth = () => {
	return (
		<React.Fragment>
			<Header />
			<Outlet />
			<Footer />
		</React.Fragment>
	)
}

export default Auth
