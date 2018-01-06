import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import index from 'assets/styles/index.scss';

import {getTask1Data} from '../middlewars/tasks.middleware';
import TaskHOC from '../HOC/taskHOC';

const styles = () => ({
	button: {
		width: '100%'
	}
});

class Task1Container extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		task1: PropTypes.arrayOf(PropTypes.shape({
			data: PropTypes.shape({
				id: PropTypes.number.isRequired,
		    	text: PropTypes.string.isRequired,
			}).isRequired
	   	})).isRequired,
	}

	render() {
		const { classes, task1, title, handleClick } = this.props;

		return (
			<div>
				<Button raised color="primary" className={classes.button} onClick={handleClick}>{title}</Button>
				<ul>	
					{
						task1.length ? 
							task1.map(task => {
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
		task1: state.Task1
	}),
	dispatch => ({
		setTask1Data: (url, data) => {
			dispatch(getTask1Data(url, data))
		}		
	})
)(withStyles(styles)(TaskHOC(Task1Container)));