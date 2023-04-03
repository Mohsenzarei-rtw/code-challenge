import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loading = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<CircularProgress color="primary" />
		</Box>
	);
};

export default Loading;
