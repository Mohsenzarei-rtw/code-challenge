import React from 'react';
import Header from './header/header';
import { Box } from '@mui/system';
import { Toolbar } from '@mui/material';

const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			<Toolbar sx={{ marginTop: { xs: '10rem', md: 'inherit' } }} />
			<Box component="main">{children}</Box>
		</>
	);
};

export default Layout;
