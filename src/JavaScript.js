import React, { Component } from "react";
import JavaScriptLogo from "./images/JavaScript.png";

class References extends Component {
    render() {
        return (
            <div>
                <span class="a" id="left">
                <div><img class="image" src={JavaScriptLogo} alt="HTML Logo" height="150" width="400"/></div>
                    <h1 id="left-header">JavaScript Tutorial</h1>
                    <p>
                        JavaScript is the world's most popular programming language.<br></br>
                        JavaScript is the programming language of the Web.<br></br>
                        JavaScript is easy to learn.<br></br>
                        This tutorial will teach you JavaScript from basic to advanced
                    </p>
                    <h1 id="left-header">Example</h1>
                    <p>
                        An example of how JavaScript would look in an editor has<br></br>
                        been provided to the right of this text. Further to the right you <br></br>
                        can see the sample output.<br></br>
                    </p>
                </span>
                <span class="a" id="center">
                    <p>
                        <span class="gray">&lt;</span>
                        <span class="dark-blue">!DOCTYPE</span>
                        <span class="blue"> html</span>
                        <span class="gray">&gt;</span>
                    </p>
                    <p>
                        <span class="gray">&lt;</span>
                        <span class="blue">html</span>
                        <span class="gray">&gt;</span>
                    </p>
                    <p>
                        <span class="gray">&lt;</span>
                        <span class="blue">body</span>
                        <span class="gray">&gt;</span>
                    </p>
                    <p></p>
                    <p>
                        <span class="gray">&lt;</span>
                        <span class="blue">button type</span>
                        =
                        <span class="red">"button"</span><br></br>
                        <span class="blue">onClick</span>
                        =
                        <span class="red">"document.getElementById('demo').innerHTML = Date()"</span>
                        <span class="gray">&gt;</span>
                    </p>
                    <p>
                        Click me to display Date and Time.
                        <span class="gray">&lt;</span>
                        <span class="blue">/button</span>
                        <span class="gray">&gt;</span>
                    </p>
                    <p></p>
                    <p>
                        <span class="gray">&lt;</span>
                        <span class="blue">p id</span>
                        =
                        <span class="red">"demo"</span>
                        <span class="gray">&gt;</span>
                        <span class="gray">&lt;</span>
                        <span class="blue">/p</span>
                        <span class="gray">&gt;</span>
                    </p>
                    <p></p>
                    <p>
                        <span class="gray">&lt;</span>
                        <span class="blue">/body</span>
                        <span class="gray">&gt;</span>
                    </p>
                    <p>
                        <span class="gray">&lt;</span>
                        <span class="blue">/html</span>
                        <span class="gray">&gt;</span>
                    </p>
                </span>
                <span class="a" id="right">
                    <h1 id="right-header">Result:</h1>
                    <p></p>
                    <p></p>
                    <div class="result-box">
                        <h1>My First JavaScript</h1>
                        <button>Click me to display Date and Time</button>
                    </div>
                </span>
            </div>
        );
    }
}

export default References;