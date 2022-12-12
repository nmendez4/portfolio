import React, {useState} from "react";
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;

            default:
                return <About />;
        }
    };

    return (
        <div>
            <nav className="nav">
                <div className="nav-item">
                    <a className="nav-link" rel="noreferrer" target="blank" href="https://github.com/nmendez4?tab=repositories">
                        <span className="card my-name">Nicholas Mendez</span>
                    </a>
                </div>
            </nav>
            <Navigation currentPage={currentPage}
            handlePageChange={handlePageChange} />
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Header;