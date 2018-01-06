import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  textField: {
    marginTop: -10,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
});

class MessageContainer extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		_socket: PropTypes.arrayOf(PropTypes.string)
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps._socket[0] === this.props._socket[0]) return false;
		return true;
	}

	render() {
		const { classes, _socket } = this.props;

		return (
			<TextField
	        	id="sorting_checkbox"
	        	disabled={true}
	        	label={_socket[0]}
	        	className={classes.textField}
	        	margin="normal"
	        />
		)
	}
}

export default connect(
	state => ({
		_socket: state._Socket,
	})
)(withStyles(styles)(MessageContainer));