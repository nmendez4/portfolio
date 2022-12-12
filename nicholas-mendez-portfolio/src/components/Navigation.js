import React from "react";

function Navigation(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];

    return (
        <div className="tabs">
            <ul className="nav nav-tabs">
                {tabs.map((tab) => (
                    <li className={props.currentPage === tab ? "nav-link active" : "nav-link"}
                    key={tab}>
                        <a href={"#" + tab.toLowerCase()}
                        // whenever a tab is clicked on
                        //the current page is set through the handlePageChange props
                        onClick={() => props.handlePageChange(tab)}
                        className={props.currentPage === tab ? "nav-link active" : "nav-link"}
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;