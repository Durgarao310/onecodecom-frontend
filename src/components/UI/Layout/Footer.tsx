import React from 'react'
import footer from '../../../assets/footer.jpg'
import FooterLottie from '../Lottie/Footer'
const Footer = () => {
	return (
		<React.Fragment>
			<footer className="w-full h-full text-black">
				<div className="max-w-7xl mx-auto relative">
					<div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-4">
						<div className="w-full h-full">
							<p className="text-xl font-semibold">No copyright issues. Feel free to copy. If you need any help, ping me !</p>
						</div>
						<div className="flex flex-col gap-4 justify-center items-center">
							<div className="w-44 h-44">
								<FooterLottie />
							</div>
							<div className="text-center">
								<p className=" text-xl">
									Made with <span className="text-red-900">&hearts;</span> in India
								</p>
							</div>
						</div>
						<div>
							<p className="text-xl font-semibold mb-4">You can find me:</p>
							<div className="flex justify-start gap-6 items-center text-red-600">
								<a href="https://twitter.com/ganta_durgarao" target="_blank" rel="noreferrer" className="border-2 p-2 border-red-700">
									<svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" width="28px" height="28px">
										<path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
									</svg>
								</a>
								<a href="https://www.instagram.com/durga99321" target="_blank" rel="noreferrer" className="border-2 p-2 border-red-700">
									<svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" width="28px" height="28px">
										<path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
									</svg>
								</a>
								<a href="https://www.linkedin.com/durgaraoganta/" target="_blank" rel="noreferrer" className="border-2 p-2 border-red-700">
									<svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" width="28px" height="28px">
										<path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" />
									</svg>
								</a>

								<a
									href="https://www.github.com/durgarao310"
									target="_blank"
									rel="noreferrer"
									className="border-2 p-2 border-red-700 flex justify-center items-center"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="red" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div>
						<img src={footer} alt="footer" className="w-full h-full object-cover" />
					</div>
				</div>
			</footer>
		</React.Fragment>
	)
}

export default Footer
