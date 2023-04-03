import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, ToggleButtonGroup, ToggleButton } from '@mui/material';
import useGraphQl from '../hooks/useGraphQl';
import Loading from '../components/loading';
import CharacterCard from '../components/Card';

const Main = () => {
	const [gender, setGender] = useState<string>('');
	const { getData, data } = useGraphQl();

	const handleSetGender = (event: React.MouseEvent<HTMLElement>, newGender: string) => {
		setGender(newGender || '');
	};

	useEffect(() => {
		getData(`
		{
			characters(filter:{gender: "${gender}"}) {
			  results {
				id
				name
				status
				gender
				type
				image
				created
			  }
			}
		  }
		`);
	}, [gender]);

	return (
		<Box>
			<Grid container spacing={2}>
				<Grid item xs={12} md={4}>
					<Paper sx={{ padding: 2, position: { lg: 'sticky' } }} elevation={4}>
						<ToggleButtonGroup
							color="primary"
							value={gender || null}
							exclusive
							onChange={handleSetGender}
							aria-label="Platform"
						>
							<ToggleButton value="Male">Male</ToggleButton>
							<ToggleButton value="Female">Female</ToggleButton>
						</ToggleButtonGroup>
					</Paper>
				</Grid>
				<Grid item xs={12} md={8}>
					{data.loading ? (
						<Loading />
					) : (
						<Grid container spacing={4}>
							{data?.characters?.results &&
								data?.characters?.results?.map((character: any) => (
									<Grid key={character.id} item xs={12} sm={6} md={4} xl={3}>
										<CharacterCard item={character} />
									</Grid>
								))}
						</Grid>
					)}
				</Grid>
			</Grid>
		</Box>
	);
};

export default Main;
