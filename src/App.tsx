import { Route, Routes } from 'react-router';
import './App.css';
import LoginPage from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
	return (
		<Routes>
			<Route
				path='*'
				element={<LoginPage />}
			/>

			<Route
				path='/login'
				element={<LoginPage />}
			/>
			<Route
				path='/dashboard'
				element={<Dashboard />}
			/>
		</Routes>
	);
}

export default App;
