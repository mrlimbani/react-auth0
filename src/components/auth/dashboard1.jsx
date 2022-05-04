import React from 'react'
import { Link } from 'react-router-dom'

function dashboard1() {
    return (
        <div className="App">
            <header className="App-header">
                Dashbpard 1
                <p>
                    Example
                </p>
                <Link
                    className="App-link"
                    to="/2"
                    rel="noopener noreferrer"
                >
                    Move 2
                </Link>
            </header>
        </div>
    );
}

export default dashboard1;
