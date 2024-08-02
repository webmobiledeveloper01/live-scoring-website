import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
    return(
        <>
        <h1>404 error</h1>
        <Link to="/">Go to Home</Link>
        </>
    )
}
export default NotFound;