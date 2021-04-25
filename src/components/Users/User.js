import React , {Fragment, useEffect, useContext} from 'react'
import Spinner from '../layout/Spinner'
import {Link } from 'react-router-dom'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/GithubContext'


const User = ({ match}) => {

    const githubContext = useContext(GithubContext)
    const {user,getSingleUser, loading, getSingleUserRepos, repos} = githubContext

    //we are extracting username from props.match and passing back into getSingleUser function 
    useEffect(() => {
        getSingleUser(match.params.login);    
        getSingleUserRepos(match.params.login); 
        //eslint-disable-next-line   
    }, [])
    
    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        company

    } = user;

    if(loading) return <Spinner />;

    return (
        <Fragment>
            <Link to='/' className='btn btn-success'>Back to search</Link>
            Hireable: {' '} {hireable ? 
                ( <i className="fas fa-check text-success" /> ) : 
                ( <i className="fas fa-times-circle text-danger"/> )
                }
            <div className='card grid-2'>
                <div className='all-center'>
                    <img 
                        src={avatar_url}
                        className='round-img'
                        alt=''
                        style={ { width:'150px' } }
                    />
                    <h1>{name}</h1>
                    <p>Location : {location}</p>
                </div>
                <div>
                    <h3>Bio</h3>
                    <p>{bio && (
                        <Fragment>
                            {bio}
                        </Fragment>
                        )}
                    </p>
                    <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>

                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username:</strong> {login}
                                </Fragment>
                            ) }
                        </li>

                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company:</strong> {company}
                                </Fragment>
                            ) }
                        </li>

                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website:</strong> {blog}
                                </Fragment>
                            ) }
                        </li>
                    </ul>
                </div>
            </div>    
            <div className='card text-center'>
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">public repos: {public_repos}</div>
                <div className="badge badge-dark">Public gists: {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </Fragment>

    )
}


export default User
