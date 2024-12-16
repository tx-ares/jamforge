import { FC } from 'react';
import styles from './Dashboard.module.scss'; // Import the SCSS module
import { Outlet } from 'react-router';

const Dashboard: FC = () => {

	return (
		<div>
			<p>Its a dash!</p>
      <Outlet />
		</div>
	);
};

export default Dashboard;
