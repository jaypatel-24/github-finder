import React, {Fragment} from 'react'

import SearchUser from '../Users/SearchUser'
import Users from '../Users/Users'

const Home = () => {
    return (
    <Fragment>
        <SearchUser />
        <Users />
    </Fragment>
    )
}

export default Home
