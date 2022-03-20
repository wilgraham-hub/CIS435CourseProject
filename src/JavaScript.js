import React, { Component } from "react";

class References extends Component {
    render() {
        return (
            <div>
                <span class="a" id="left">
                    <h1 id="left-header">JavaScript Tutorial</h1>
                    <p>
                        JavaScript is the world's most popular programming language.<br></br>
                        JavaScript is the programming language of the Web.<br></br>
                        JavaScript is easy to learn.<br></br>
                        This tutorial will teach you JavaScript from basic to advanced
                    </p>
                    <h1 id="left-header">"Try it Yourself</h1>
                    <p>
                    With or "Try it Yourself" editor, you can edit the source<br></br>
                    code, click compile and view the result:<br></br>
                    </p>
                </span>
                <span class="a" id="center">
                    <p>&lt;!DOCTYPE html&gt;</p>
                    <p>&lt;html&gt;</p>
                    <p>&lt;body&gt;</p>
                    <p></p>
                    <p>&lt;button type="button"<br></br>
                    onClick="document.getElementById('demo').innerHTML = Date()"&gt;</p>
                    <p>Click me to display Date and Time.</p>
                    <p></p>
                    <p>&lt;p id="demo"&gt;/p</p>
                    <p></p>
                    <p>&lt;/body&gt;</p>
                    <p>&lt;/html&gt;</p>
                    <button>Compile</button>
                </span>
                <span class="a" id="right">
                    <h1 id="right-header">"Try it Yourself" Result:</h1>
                    <p></p>
                    <p></p>
                    <h1>My First JavaScript</h1>
                    <button>Click me to display Date and Time</button>
                </span>
            </div>
        );
    }
}

export default References;