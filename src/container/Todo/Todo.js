import React, {useEffect} from 'react';
import TodoItem from "../../components/TodoItem/TodoItem";
import AddTodo from "../../components/AddTodo/AddTodo";
import Title from "../../components/Title/Title";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../actions";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	grid: {
		margin: `${theme.spacing(1)}px auto`,
	},
}))

const Todo = () => {
	const dispatch = useDispatch();
	const tasks = useSelector(state => state.tasksList);
	const classes = useStyles();

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch]);

	return (
		<>
			<Title/>
			<AddTodo/>
			<Grid container className={classes.root}>
				<Grid item xs={8} className={classes.grid}>
				{tasks ? Object.keys(tasks).map((task, id) => (
					<TodoItem key={id} text={tasks[task].task}/>
				)): 'not tasks'}
				</Grid>
			</Grid>
		</>
	);
};

export default Todo;