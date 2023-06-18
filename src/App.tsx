import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './components/UI/Layout/Auth'
import NoAuth from './components/UI/Layout/NoAuth'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import FullScreen from './components/Loading/FullScreen'

const Home = React.lazy(() => import('./Pages/Explore/Home'))
const Login = React.lazy(() => import('./Pages/Auth/Login'))

function App() {
	return (
		<React.Fragment>
			<Routes>
				<Route
					path="*"
					element={
						<React.Suspense fallback={<FullScreen />}>
							<PageNotFound />
						</React.Suspense>
					}
				/>
				// auth routes
				<Route
					path="/"
					element={
						<React.Suspense fallback={<FullScreen />}>
							<Auth />
						</React.Suspense>
					}
				>
					<Route index element={<Home />} />
				</Route>
				// without routes
				<Route
					path="/auth"
					element={
						<React.Suspense fallback={<FullScreen />}>
							<NoAuth />
						</React.Suspense>
					}
				>
					<Route index element={<Login />} />
					<Route path="login" element={<Login />} />
				</Route>
			</Routes>
		</React.Fragment>
	)
}

export default App
