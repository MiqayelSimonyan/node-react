import React, { Component } from 'react';

const TaskHOC = (WrappedComponent) => {
	return class TaskHOC extends Component {
		constructor(props) {
			super(props);
			this.handleClick = this.handleClick.bind(this);
		}

		componentWillReceiveProps(nextProps) {
			if (nextProps.isChecked) return this.sortData(1);
			return this.sortData(-1);
		}

		sortData(order) {
			const { title, task1, task2 } = this.props;

			if (title === 'test1') {
				if (order == 1) return task1.sort((a, b) => a.data.id > b.data.id);
				task1.sort((a, b) => a.data.id < b.data.id);
			} else {
				if (order == 1) return task2.sort((a, b) => a.data.id > b.data.id);
				task2.sort((a, b) => a.data.id < b.data.id);
			}
		}

		handleClick() {
			const { title, isChecked, setTask1Data, setTask2Data } = this.props;

			if (isChecked) this.sortData(); 
			if (title === 'test1') return setTask1Data('/test1', {});
			setTask2Data('/test2', {});
		}

		render() {
			return <WrappedComponent handleClick={this.handleClick} {...this.props} />
		}
	}
}

export default TaskHOC;