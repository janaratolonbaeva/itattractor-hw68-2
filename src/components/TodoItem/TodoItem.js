import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(3),
		margin: `${theme.spacing(2)}px auto`,
		width: '100%',
		color: theme.palette.text.secondary
	},
	iconsWrapper: {
		textAlign: 'right'
	},
	text: {
		fontSize: '18px'
	}
}));

const TodoItem = ({text}) => {
	const classes = useStyles();

	return (
		<Paper elevation={3} className={classes.paper}>
			<Grid container justify="space-between" alignItems="center">
				<Grid item xs={10}>
					<Typography variant="caption" display="block"
											gutterBottom className={classes.text}
					>{text}</Typography>
				</Grid>
				<Grid item xs={2} className={classes.iconsWrapper}>
					<IconButton>
						<EditIcon/>
					</IconButton>
					<IconButton color="secondary">
						<DeleteIcon/>
					</IconButton>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default TodoItem;