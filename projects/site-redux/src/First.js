import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData, getNewData, getBookData } from './redux';

class First extends React.Component {
componentDidMount() {
    this.props.getData();
    this.props.getNewData();
    this.props.getBookData();
}

render() {
    return (
            <div className="got">
                <div className="winterfell-house">
                    <h1> Winterfell </h1>
                    <h3>Region: { this.props.houseData.region} </h3>
                    <h3>Founded: { this.props.houseData.founded } </h3>
                    <h3>Words: { this.props.houseData.words }</h3>
                    <h3>Ancestarial Weapons: { this.props.houseData.ancestralWeapons }</h3>
                </div>
                <div className="about-jon">
                    <h1> { this.props.data.name } </h1>
                    <h3> Aliase: { this.props.data.aliases[0] } </h3>
                    <h3> Born: { this.props.data.born } </h3>
                    <h3> Gender: { this.props.data.gender } </h3>
                    <h3> Actor: { this.props.data.playedBy } </h3>
                    <h3> Titles: { this.props.data.titles } </h3>
                </div>
                <div className="book-info">
                    <h1> {this.props.bookData.name} </h1>
                    <h3> Author: {this.props.bookData.authors} </h3>
                    <h3> Number of Pages: { this.props.bookData.numberOfPages } </h3>
                    <h3> Publisher: { this.props.bookData.publisher } </h3>
                </div>
              </div>
    )
}
}


export default withRouter(connect(state => state, { getData, getNewData, getBookData })(First));
