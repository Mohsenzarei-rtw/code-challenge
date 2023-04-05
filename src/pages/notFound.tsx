import Grid from '@mui/system/Unstable_Grid/Grid';
import React, { FC } from 'react';

const NotFound: FC = () => {
	return (
		<Grid container alignItems="center" justifyContent="center" minHeight="100vh">
			404 | NotFound
		</Grid>
	);
};

export default NotFound;
