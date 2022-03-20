import React, { Component } from "react";

class Html extends Component {
    render() {
        return (
            <div>
                <span class="a" id="left">
                    <h1 id="left-header">HTML Tutorial</h1>
                    <p>
                        HTML is the standard markup language for Web pages.<br></br>
                        With HTML you can create your own Website.<br></br>
                        HTML is easy to learn - You will enjoy it!
                    </p>
                    <h1 id="left-header">"Try it Yourself</h1>
                    <p>
                    With or "Try it Yourself" editor, you can edit the HTML<br></br>
                    code, click compile and view the result:<br></br>
                    </p>
                </span>
                <span class="a" id="center">
                    <p>&lt;!DOCTYPE html&gt;</p>
                    <p>&lt;html&gt;</p>
                    <p>&lt;head&gt;</p>
                    <p>&lt;title&gt;PageTitle&lt;/title&gt;</p>
                    <p>&lt;/head&gt;</p>
                    <p>&lt;body&gt;</p>
                    <p></p>
                    <p>&lt;h1&gt;This is a Heading&lt;/h1&gt;</p>
                    <p>&lt;p&gt;This is a paragraph&lt;/p&gt;</p>
                    <p></p>
                    <p>&lt;/body&gt;</p>
                    <p>&lt;/html&gt;</p>
                    <button>Compile</button>
                </span>
                <span class="a" id="right">
                    <h1 id="right-header">"Try it Yourself" Result:</h1>
                    <p></p>
                    <p></p>
                    <h1>This is a Heading</h1>
                    <p>This is a paragraph</p>
                </span>
            </div>
        );
    }
}

export default Html;