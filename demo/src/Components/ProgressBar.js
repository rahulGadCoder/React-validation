import React from 'react'

const Progressbar = (props) => {
   const {progress} = props;
    const width = 37;
    return (
        <div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Basic example" style={{ width: `${progress}%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

        </div>
    )
}

export default Progressbar
