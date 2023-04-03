import React, { FC } from 'react';
import { AppBar, Button, Toolbar, Grid, Typography, Box } from '@mui/material';
import { NavLinks } from './navLinks';

const Header: FC = () => {
	return (
		<Box component="nav">
			<AppBar>
				<Grid container justifyContent={'space-between'}>
					<Grid item xs={12} md={4} justifyContent={'center'} container>
						<Toolbar>
							<Typography variant="h4" fontFamily={'cursive'} fontStyle={'italic'}>
								Rick and Morty
							</Typography>
						</Toolbar>
					</Grid>
					<Grid container item xs={12} md={6} alignItems="center">
						{NavLinks.map(({ label, href }) => (
							<Grid key={href} item xs={12} md={3} textAlign={'center'}>
								<Button href={href} color="inherit">
									{label}
								</Button>
							</Grid>
						))}
					</Grid>
				</Grid>
			</AppBar>
		</Box>
	);
};

export default Header;
