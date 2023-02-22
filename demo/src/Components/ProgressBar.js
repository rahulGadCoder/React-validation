import React from 'react'

const Progressbar = (props) => {
    const width = 37;
    return (
        <div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: `${width}%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{width}%</div>
            </div>

        </div>
    )
}

export default Progressbar
