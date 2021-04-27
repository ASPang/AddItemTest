import React from "react";
import "../styles/errorBox.scss";

const ErrorBox = ({text, ...props}) => (
    <div className="error-box">
        {props.children}
    </div>
);
export default ErrorBox;