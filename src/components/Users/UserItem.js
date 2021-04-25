import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const UserItem = ({user : {avatar_url, login } }) =>  {

    return (
        <div className="card text-center">
            <img src={avatar_url} 
                alt=""
                style={{ height: "30%", width: "30%", borderRadius:"50%"}} 
            />
            <h3>{login}</h3>
            <div> <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">more</Link> </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
