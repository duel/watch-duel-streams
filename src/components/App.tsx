import React, { useState, useEffect } from 'react'
import About from './About';
import Watch from './Watch';

const App = () => {
    const [path, setPath] = useState(window.location.pathname)

    useEffect(() => {
        if (window.location.pathname.length > 1) {
            setPath(window.location.pathname)
        }
    }, [path])

    return (
        path.length <= 1 ? <About /> : <Watch />
    )
}

export default App