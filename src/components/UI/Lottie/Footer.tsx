import React from 'react'
import Lottie from 'lottie-react'
import FooterJson from './footer.json'

const FooterLottie = () => {
	return (
		<React.Fragment>
			<Lottie animationData={FooterJson} loop={true} />
		</React.Fragment>
	)
}

export default FooterLottie
