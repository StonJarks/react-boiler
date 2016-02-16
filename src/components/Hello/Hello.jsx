import React from 'react';
import styles from './Hello.less';

export default React.createClass({
	getName() {
		return this.props.name || "";
	},
	render() {
		return (
			<div className="hello">
				<h1>Hello {this.getName()}</h1>
			</div>
		);
	}
});