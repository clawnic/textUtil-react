import React from "react";

export default function TextForm(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label for="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" id="myBox" rows="8"></textarea>
                <button className="btn btn-outline-primary">Convert to Upper Case</button>
            </div>
        </div>
    );
}
