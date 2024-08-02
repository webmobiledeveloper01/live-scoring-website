import React from "react";

function RuleCard({ rule }) {
    return (
        <div style={{ width: "10px", height: "14px",borderRadius:"3px", backgroundColor: rule == "warn" ? "yellow" : "red" }}> </div>
    );
}

export default RuleCard;
