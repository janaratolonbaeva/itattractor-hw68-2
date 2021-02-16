import React from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import {useDispatch, useSelector} from "react-redux";
import {add, postTask} from "../../actions";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: `${theme.spacing(5)}px auto`,
		textAlign: 'center'
	}
}));

const AddTodo = () => {
	const dispatch = useDispatch();
	const taskOne = useSelector(state => state.task);

	const classes = useStyles();

	const submitToDo = e => {
		e.preventDefault();
		const post = {
			task: taskOne
		}
		dispatch(postTask(post))
	}

	const taskHandler = e => {
		const value = e.target.value;
		dispatch(add(value));
	}

	return (
		<Grid container justify="center">
			<Grid item xs={6} className={classes.root}>
				<form onSubmit={submitToDo}>
					<Grid container justify="space-between">
						<Grid item xs={9} >
							<TextField id="standard-basic"
												 label="Standard" fullWidth
												 onChange={taskHandler}
							/>
						</Grid>
						<Grid item xs={3}>
							<IconButton type="submit" color="primary">
								<ControlPointIcon/>
							</IconButton>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
};

export default AddTodo;