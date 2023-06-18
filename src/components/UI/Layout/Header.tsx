import React from 'react'
import logo from '../../../assets/logo.svg'

const Header = () => {
	return (
		<React.Fragment>
			<header>
				<img src={logo} className="w-24 h-12 object-cover" alt="onecodecom logo" />
			</header>
		</React.Fragment>
	)
}

export default Header
