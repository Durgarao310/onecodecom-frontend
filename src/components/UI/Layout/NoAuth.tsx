import React from 'react'
import { Outlet } from 'react-router-dom'

const NoAuth = () => {
	return (
		<React.Fragment>
			<Outlet />
		</React.Fragment>
	)
}

export default NoAuth
