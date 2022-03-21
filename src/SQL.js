import React, { Component } from "react";
import SqlLogo from "./images/Sql.png";

class Exercises extends Component {
    render() {
        return (
            <>
                <span class="a" id="left">
                <div><img class="image" src={SqlLogo} alt="HTML Logo" height="150" width="400"/></div>
                    <h1 id="left-header">SQL Tutorial</h1>
                    <p>
                        SQL is the standard language for storing, manipulating and retrieving data in databases<br></br>
                        Our SQL tutorial will teach you how to use SQL in : MySQL, SQL Server, MS Access, Oracle,<br></br>
                        Sybase, Informix, Postgres, and other database systems
                    </p>
                    <h1 id="left-header">"Try it Yourself</h1>
                    <p>
                    With or "Try it Yourself" editor, you can edit the SQL<br></br>
                    statements, click query and view the result:<br></br>
                    </p>
                </span>
                <span class="a" id="center">
                    <p>SELECT * FROM Customers</p>
                    <button>Query</button>
                </span>
                <span class="a" id="right">
                    <h1 id="right-header">"Try it Yourself" Result:</h1>
                    <p></p>
                    <p></p>
                    <div class="result-box">
                        <h1>SQL QUERY RESULT</h1>
                    </div>
                </span>
            </>
        );
    }
}

export default Exercises;