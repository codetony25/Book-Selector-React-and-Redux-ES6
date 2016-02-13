// Returns an action
export function selectBook(book) {
	// selecBook is an ActionCreater, it needs to return an action an object with a type property.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}

