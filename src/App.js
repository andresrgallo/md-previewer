import React, { Component } from 'react';
import MarkdownComp from './components/MarkdownComp.jsx';
import Previewer from './components/Previewer.jsx';
import Bar from './components/Bar.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: placeholder,
			editorOpener: false,
			previewOpener: false
		};
		this.handleInput = this.handleInput.bind(this);
		this.previewOpenerClick = this.previewOpenerClick.bind(this);
		this.editorOpenerClick = this.editorOpenerClick.bind(this);
	}

	handleInput(e) {
		// console.log(e);
		this.setState({ text: e.target.value });
	}

	editorOpenerClick(e) {
		this.setState({ editorOpener: !this.state.editorOpener });
	}
	previewOpenerClick(e) {
		this.setState({ previewOpener: !this.state.previewOpener });
	}

	render() {
		let { text, editorOpener, previewOpener } = this.state;
		const classList = editorOpener
			? [
					'maximized editor',
					'preview-section hide',
					'fas fa-compress-arrows-alt'
			  ]
			: previewOpener
			? [
					'editor hide',
					'maximized preview-section',
					'fas fa-compress-arrows-alt'
			  ]
			: ['editor', 'preview-section', 'fas fa-expand-arrows-alt'];
		return (
			<main>
				<h1 id="header">Markdown Previewer</h1>
				<div className={classList[0]}>
					<Bar
						openerClick={this.editorOpenerClick}
						icon={classList[2]}
						title={'Editor'}
					/>
					<MarkdownComp text={text} onInput={this.handleInput} />
				</div>
				<div className={classList[1]}>
					<Bar
						openerClick={this.previewOpenerClick}
						icon={classList[2]}
						title={'Previewer'}
					/>
					<Previewer text={text} />
				</div>
			</main>
		);
	}
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:



Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |



Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
