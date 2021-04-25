import React , {Fragment} from 'react'
import spinner from './spinner.gif'

const Spinner = () => <Fragment>
            <img src={spinner} alt="loading..." style={{height : "100%", width: "100%", display:"block", alignSelf:"center"}}/>
        </Fragment>
    

export default Spinner
