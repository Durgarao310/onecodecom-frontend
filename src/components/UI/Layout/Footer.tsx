import React from 'react'
import logo from '../../../assets/logo.svg'

const Footer = () => {
	return (
		<React.Fragment>
			<footer className="w-full h-full text-black">
				<img src={logo} className="w-24 h-12 object-cover" alt="onecodecom logo" />
			</footer>
		</React.Fragment>
	)
}

export default Footer
