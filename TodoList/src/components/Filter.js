import React from 'react';
import { connect } from 'react-redux';
import { searchTextFilter } from '../actions/actions';

class Filter extends React.Component {

    onTextChange = (e) => {
        this.props.searchTextFilter(e.target.value);
    };

    render() {
        const { searchText } = this.props;
        return (
            <div>
                <input type="text" value={searchText} onChange={this.onTextChange} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        searchText: state.searchText
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchTextFilter: (searchText) => dispatch(searchTextFilter(searchText))
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter)