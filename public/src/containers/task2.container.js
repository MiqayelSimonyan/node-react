import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import {getTask2Data} from '../middlewars/tasks.middleware';
import TaskHOC from '../HOC/taskHOC';

const styles = () => ({
	button: {
		width: '100%'
	}
});

class Task2Container extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		task2: PropTypes.arrayOf(PropTypes.shape({
			data: PropTypes.shape({
				id: PropTypes.number.isRequired,
		    	text: PropTypes.string.isRequired,
			}).isRequired
	   	})).isRequired,
	}

	render() {
		const { classes, task2, title, handleClick } = this.props;

		return (
			<div>
				<Button raised color="primary" className={classes.button} onClick={handleClick}>{title}</Button>
				<ul>	
					{
						task2.length ? 
							task2.map(task => {
								return <li key={task.data.id}>{task.data.id} -- {task.data.text}</li>
							})
						: ''
					}
				</ul>
			</div>
		)
	}
}

export default connect(
	state => ({
		task2: state.Task2
	}),
	dispatch => ({
		setTask2Data: (url, data) => {
			dispatch(getTask2Data(url, data))
		}
	})
)(withStyles(styles)(TaskHOC(Task2Container)));