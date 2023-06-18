import React from 'react'
import Lottie from 'lottie-react'
import PasswordJson from './password.json'

const Password = () => {
	return (
		<React.Fragment>
			<Lottie animationData={PasswordJson} loop={true} />
		</React.Fragment>
	)
}

export default Password
