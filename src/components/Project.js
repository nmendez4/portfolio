import React from "react";

function Project(props) {
    return (
      <div>
        <div className="container">
          {props.projects.map((project) => (
            <div className="col">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <img src={process.env.PUBLIC_URL + project.image} alt="Placeholder project" />
                    </a>
                  </figure>
                </div>
                <div className="card">
                  <div className="media">
                    <div className="media-left"></div>
                    <div className="media-content">
                      <p className="title" key={project.id}>
                        {project.title}
                      </p>
                    </div>
                  </div>
  
                  <div className="col">
                    {project.description}
                    <br />
                    <br />
                    <div className="card">
                      Languages: {project.languages}
                      <br />
                      Packages/Libraries: {project.packages}
                    </div>
                    <div className="card">
                      <footer className="card-footer">
                        <a
                          href={project.repository}
                          className="card"
                          target="_blank" rel="noreferrer"
                        >
                          Repository Link
                        </a>
                        <br />
                        <a
                          href={project.live}
                          className="card"
                          target="_blank" rel="noreferrer"
                        >
                          Live Site 
                        </a>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Project;