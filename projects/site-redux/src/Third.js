import React from 'react';
import { connect } from 'react-redux';
import { getDogData } from './redux';
import { withRouter } from 'react-router-dom';


class Third extends React.Component {
    componentDidMount() {
        this.props.getDogData()
    }
    render() {    
        function refreshPage(){
            window.location.reload()
        }
        console.log(this.props.dogData)
        return (
            <div>
                <img className='doggo' src={ this.props.dogData } alt='pic' />
                <div className='butContainer'>
                <button className='but' type="submit" onClick={refreshPage}>New Doggo</button>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(state => state, { getDogData })(Third));
