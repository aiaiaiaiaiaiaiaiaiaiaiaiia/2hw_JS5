const booksLoaded = (newBooks) => {
    return {
        type: "FETCH_BOOKS_SUCCES", 
        playload: newBooks,
    }
}

export {booksLoaded};