import React from "react";

function Resume() {
    return (
        <div className="container">
            <div className="col">
                <p className="card">Resumé</p>
                <hr />

                <a className="button" href="www.something.com" target="_blank" rel="noreferrer">
                    <span className="icon">
                        <i className="download"></i>
                    </span>
                    <span className="font">Download Here!</span>
                </a>
                <img className="my-resume" src={""} alt="myresume"></img>
            </div>
            <div className="col">
                <p className="card">Technical Skills</p>
                <hr />
                <ul>
                    <li>JavaScript, React, Node.js</li>
                    <li>HTML, CSS, Markdown </li>
                    <li>MongoDB, MySQL</li>
                    <li>Minor Java and Python work</li>
                    <li>Git, Github</li>
                    <li>VS Code, IntelliJ, Insomnia</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;