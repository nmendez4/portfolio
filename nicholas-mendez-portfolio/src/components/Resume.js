import React from "react";

function Resume() {

    // would like to have function to hover over download button
    // need to read up on documentation https://upmostly.com/tutorials/react-onhover-event-handling-with-examples
    // function changeHover(e) {
    //     e.target.style.color = 'blue'
    // } -> code to enter into line 14 onMouseOver={changeHover}
    return (
        <div className="container">
            <div className="col">
                <p className="card">Resumé</p>
                <hr />

                <a className="button" href="https://www.dropbox.com/s/5iqfn2bqvub9n42/NicholasEMendez11-2-22%20copy.pdf?dl=0" target="_blank" rel="noreferrer" > 
                    <span className="icon">
                        <i className="download"></i>
                    </span>
                    <span className="font">Download Here!</span>
                </a>
                <img className="my-resume" src="images/NicholasEMendezResume.png" alt="myresume"></img>
                <hr />
            </div>
            <div className="col">
                <p className="card">Technical Skills</p>
                <ul className="list">
                    <li>JavaScript, React, Node.js</li>
                    <li>HTML, CSS, Markdown </li>
                    <li>Databases: MongoDB, MySQL, NoSQL</li>
                    <li>Minor Experience: Java, Python, C#</li>
                    <li>Git, Github</li>
                    <li>Code Editors: VS Code, IntelliJ, Insomnia</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;