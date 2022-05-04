import React from 'react'
import { Link } from 'react-router-dom'

function dashboard2() {
    return (
        <div className="App">
            <header className="App-header">
                Dashbpard 2
                <p>
                    Example
                </p>
                <Link
                    className="App-link"
                    to="/"
                    rel="noopener noreferrer"
                >
                    Move 1
                </Link>
            </header>
        </div>
    );
}

export default dashboard2;
