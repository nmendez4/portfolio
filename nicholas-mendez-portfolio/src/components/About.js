import React from "react";

function About() {
    return (
        <div>
            <p className="about card">About Me</p>
            <hr />
            <img className="my-photo" src="images/IMG_6113.png" alt="my pic" />
            <hr />
            <p className="card square bg-primary rounded">
                My Name is Nicholas Mendez and I'm a web development bootcamp graduate. I currently work in a hospital and have been in the healthcare sector for the last 6 years. 
                It's been a truly wild ride especially with all that's gone on in recent years. But working like that made me realize that it's time to make a change, so I decided to take a leap and try something new. 
                I've always had a passion for technology, I was always tinkering with electronics, taking them apart and trying to figure out how they worked. Coding and web development works in that same way with tests, debugging and learning to find errors in syntax. 
                Learning to figure out how the code functioned felt similar in the way I used to do trial and error and it felt right. This webpage is dedicated to my past and future projects. 
                I hope you'll take a look around and explore my portfolio.
                <hr />
                Thank you for visiting my page!
                <hr />
            </p>
            {/* <p className="card">
            </p> */}
        </div>
    );
}

export default About;


// https://mdbootstrap.com/docs/react/utilities/borders/
// bootstrap items to think about