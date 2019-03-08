import React from 'react';

const Bar = props => {
	return (
		<div className="toolbar">
			<span id="bar-title">{props.title}</span>
			<i className={props.icon} id="opener" onClick={props.openerClick} />
		</div>
	);
};

export default Bar;
