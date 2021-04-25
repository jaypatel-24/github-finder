import React , {useContext, useState} from 'react'
import GithubContext from '../../context/github/GithubContext'

const SearchUser = () => {
    const githubContext = useContext(GithubContext);

    const [searchText, setSearchText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(searchText === '') {
            githubContext.showAlert('Please provide some input','light');
        } else {
            githubContext.removeAlert();
            githubContext.searchUser(searchText);
            setSearchText('');
        }
    }

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" 
                        name="searchText" 
                        placeholder="Search User ..."
                        value={searchText}
                        onChange={handleChange}
                    />
                    <button type="submit" className="btn btn-dark btn-block">Search</button>
                    {githubContext.users.length > 0 && 
                        <button type="submit" 
                            className="btn btn-light btn-block"
                            onClick={githubContext.clearUsers}>
                            Clear
                        </button> }    
                </form>
            </div>
        )
}

export default SearchUser
