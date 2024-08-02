import * as React from "react";
import { Link } from "react-router-dom";

function Test() {
    return (
        <>
            <h1>Test URL</h1>
            <ul>
                <ul>
                    manager page
                    <ul>
                        <li><Link to="/manager">manager page</Link></li>
                    </ul>
                </ul>
                <ul>
                    admin page
                    <ul>
                        <li><Link to="/admin1">admin1</Link></li>
                        <li><Link to="/admin2">admin2</Link></li>
                    </ul>
                </ul>
                <ul>
                    user page
                    <ul>
                        <li><Link to="/user">common page</Link></li>
                    </ul>
                </ul>

            </ul>

        </>
    );
}

export default Test;
