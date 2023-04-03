import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ICharacter } from '../../types/character';

interface Props {
	item: ICharacter;
}

const CharacterCard: FC<Props> = ({ item }) => {
	if (!item) {
		return <div>notFound</div>;
	}

	return (
		<Card sx={{ height: '100%' }}>
			<CardMedia component="img" image={item.image} alt={item.name} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{item.name}
				</Typography>
				<Grid container>
					<Grid item>
						<Typography gutterBottom variant="body2" component="h1" fontWeight={600}>
							status:
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body2">{item.status}</Typography>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item>
						<Typography gutterBottom variant="body2" component="h1" fontWeight={600}>
							gender:
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body2">{item.gender}</Typography>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item>
						<Typography gutterBottom variant="body2" component="h1" fontWeight={600}>
							species:
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body2">{item.species}</Typography>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions>
				<Button variant="contained" endIcon={<SendIcon />} href={`/details/${item.name}`}>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default CharacterCard;
