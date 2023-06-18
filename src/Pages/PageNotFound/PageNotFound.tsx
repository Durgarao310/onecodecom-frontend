import React from 'react'
import Lottie from 'lottie-react'
import pageNotFound from './pagenotfound.json'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
	return (
		<React.Fragment>
			<div className="w-full min-h-screen h-full flex flex-col items-center justify-center bg-red-600">
				<div className="lg:w-1/2 lg:h-1/2 md:h-2/3 md:w-2/3 h-3/4 w-3/4">
					<Lottie animationData={pageNotFound} loop={true} />
				</div>
				<div className="my-10 ">
					<Link to="/" className="px-4 py-2 text-white border-2 border-white">
						Go to Home
					</Link>
				</div>
			</div>
		</React.Fragment>
	)
}

export default PageNotFound
