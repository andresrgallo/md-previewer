import React, { Component } from 'react';

import marked from 'marked';
var renderer = new marked.Renderer();

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	breaks: true,
	tables: true,
	pedantic: false,
	sanitize: true,
	smartLists: true
});

class Previewer extends Component {
	constructor(props) {
		super(props);
	}

	MarkIt() {
		return { __html: marked(this.props.text) };
	}

	render() {
		return <div id="preview" dangerouslySetInnerHTML={this.MarkIt()} />;
	}
}

export default Previewer;
