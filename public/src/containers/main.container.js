import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import Grid from 'material-ui/Grid';

import MessageContainer from 'containers/message.container';
import Task1Container from 'containers/task1.container';
import Task2Container from 'containers/task2.container';

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    textAlign: 'center',
  },
});

class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {isChecked: false};
	}

	static propTypes = {
		classes: PropTypes.object.isRequired 
	}

	handleChange(event) {
		this.setState({isChecked: event.nativeEvent.target.checked});
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Grid container>
					<Grid item xs={12} sm={3}>
						<Task1Container title="test1" isChecked={this.state.isChecked} />
					</Grid>
					<Grid item xs={12} sm={5}>
						<MessageContainer />
			        </Grid>
					<Grid item xs={12} sm={1}>
						<Checkbox label="Simple" onChange={this.handleChange.bind(this)} />
					</Grid>
					<Grid item xs={12} sm={3}>					
						<Task2Container title="test2" isChecked={this.state.isChecked} />
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default (withStyles(styles)(MainContainer));