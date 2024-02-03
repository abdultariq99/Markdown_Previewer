import './App.css';
import Markdown from "https://esm.sh/react-markdown";
import React, {Component} from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <MarkdownPreviewer />;
  }
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `# Welcome to My Markdown Editor!

## Getting Started

To create a new paragraph, simply press enter twice.

For **bold text**, wrap the desired text with double asterisks "**".

For *italic text*, use single underscores "_" or single asterisks "*".

### Lists

Unordered List:

- Item 1
- Item 2
- Item 3

Ordered List:

1. First item
2. Second item
3. Third item

> Blockquote

### Code

Inline code: \`const example = 'Hello World!';\`

Block code:

\`\`\`javascript
function greet(name) {
  console.log('Hello, ' + name + '!');
}
\`\`\`

### Links

[Visit my website](https://www.example.com)

### Images

![Alt text](https://placekitten.com/200/300)

Feel free to start typing your Markdown content here!

Happy editing!`
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <body>
        <div className="main-container d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row gap-3 toolbar-wrapper">
              <div className="col toolbar toolbar-1">
                <ul className="d-flex flex-row align-items-center ulist">
                  <li className="uli">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/686/686112.png"
                      width="25px"
                      height="25px"
                    ></img>
                  </li>
                  <li className="uli">Editor</li>
                </ul>
              </div>
              <div className="col toolbar toolbar-2">
                <ul className="d-flex flex-row align-items-center ulist">
                  <li className="uli">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3856/3856060.png"
                      width="35px"
                      height="35px"
                    ></img>
                  </li>
                  <li className="uli">Previewer</li>
                </ul>
              </div>
            </div>
            <div className="row gap-3 editor-wrapper">
              <textarea
                id="editor"
                className="col editor editor-column"
                value={this.state.input}
                onChange={this.handleChange}
              ></textarea>
              <div
                id="preview"
                className="col editor previewer-column text-wrap overflow-auto"
              >
                <Markdown>{this.state.input}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
