import React from 'react';
import Project from './Project';

// list of all past/current projects
// & their description + details
const projects = [
{
    id: 0,
    title: "title 1",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repository: "",
    live: ""
},
{
    id: 1,
    title: "title 2",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repository: "",
    live: ""
},
{
    id: 2,
    title: "title 3",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repository: "",
    live: ""
},
{
    id: 3,
    title: "title 4",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repository: "",
    live: ""
},
{
    id: 4,
    title: "title 5",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repository: "",
    live: ""
},
{
    id: 5,
    title: "title 6",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repository: "",
    live: ""
},
{
    id: 6,
    title: "title 7",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repository: "",
    live: ""
}
];

function Portfolio() {
    return (
        <div>
            <p className="card">
               My Portfolio
            </p>

            <Project projects={projects} />
        </div>
    );
}

export default Portfolio;