import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
	},
	title: {
		margin: `30px auto 10px`
	}
}));

const Title = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.root}>
			<Typography variant="h4" component="h1" gutterBottom className={classes.title}>
				TO DO LIST
			</Typography>
		</Grid>
	);
};

export default Title;