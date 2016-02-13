import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title} 
					onClick={ () => this.props.selectBook(book) }
					className="list-group-item">
					{book.title}
				</li>
			)
		})
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	
	// Whatever gets returned here is in this.props
	return {
		books: state.books
	};
}


// Action Creator
// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

/** 
	connect will link redux and react together and promote BookList from a component to a container.
	it needs to know about this new dispatch method, selectBook. Make it available as a prop.
**/

export default connect(mapStateToProps, mapDispatchToProps)(BookList);