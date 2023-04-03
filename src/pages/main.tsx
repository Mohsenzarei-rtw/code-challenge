import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import useGraphQl from '../hooks/useGraphQl';
import Loading from '../components/loading';
import CharacterCard from '../components/Card';

const Main = () => {
	const { getData, data } = useGraphQl();
	console.log(data);

	useEffect(() => {
		getData(`
		{
			characters(page: 1) {
			  info {
				count
				pages
			  }
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
	}, []);

	return (
		<Box>
			<Grid container spacing={2}>
				<Grid item xs={4}></Grid>
				<Grid item xs={12}>
					{data.loading ? (
						<Loading />
					) : (
						<Grid container spacing={4}>
							{data?.characters?.results &&
								data?.characters?.results?.map((character: any) => (
									<Grid key={character.id} item xs={12} sm={6} md={4} lg={2}>
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
