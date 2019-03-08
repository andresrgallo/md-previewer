import React, { Component } from 'react';

const MarkdownComp = props => {
	return <textarea onChange={props.onInput} value={props.text} />;
};

export default MarkdownComp;
