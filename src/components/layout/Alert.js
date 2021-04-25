import React, { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

const Alert = () => {
    const githubContext =  useContext(GithubContext);

    const { alert } = githubContext;

    return (
        alert != null && (
        <div className={`alert alert-${alert.type}`}>
            <i className="fas fa-bell"></i>
            {alert.msg}    
        </div>
        )
    )
}

export default Alert
