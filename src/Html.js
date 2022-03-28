import React, { Component } from "react";
import htmlLogo from './images/HTML.png'

class Html extends Component {
    render() {
        return (
            <div>
                <span class="a" id="left">
                <div><img class="image" src={htmlLogo} alt="HTML Logo" height="150" width="400"/></div>
                    <h1 id="left-header">HTML Tutorial</h1>
                    <p>
                        HTML is the standard markup language for Web pages.<br></br>
                        With HTML you can create your own Website.<br></br>
                        HTML is easy to learn - You will enjoy it!
                    </p>
                    <h1 id="left-header">Example</h1>
                    <p>
                        An example of how HTML would look in an editor has been <br></br>
                        provided to the right of this text. Further to the right you <br></br>
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
                        <span class="blue">head</span>
                        <span class="gray">&gt;</span>
                    </p>
                    <p>
                        <span class="gray">&lt;</span>
                        <span class="blue">title</span>
                        <span class="gray">&gt;</span>
                        PageTitle
                        <span class="gray">&lt;</span>
                        <span class="blue">/title</span>
                        <span class="gray">&gt;</span>
                    </p>
                    <p>
                        <span class="gray">&lt;</span>
                        <span class="blue">/head</span>
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
                        <span class="blue">h1</span>
                        <span class="gray">&gt;</span>
                        This is a Heading
                        <span class="gray">&lt;</span>
                        <span class="blue">/h1</span>
                        <span class="gray">&gt;</span>
                    </p>
                    <p>
                        <span class="gray">&lt;</span>
                        <span class="blue">p</span>
                        <span class="gray">&gt;</span>
                        This is a paragraph
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
                        <h1>This is a Heading</h1>
                        <p>This is a paragraph</p>
                    </div>
                </span>                
            </div>
        );
    }
}

export default Html;