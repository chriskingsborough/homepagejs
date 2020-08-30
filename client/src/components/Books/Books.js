import React from 'react';
import './Books.css';

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            books: []
        };
    }


    componentDidMount() {
        fetch(
            'http://0.0.0.0:5000/books'
        )
        .then(response => {
            return response.json();
        })
        .then(result => {
                this.setState({
                    isLoaded: true,
                    books: result});
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, books } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading books...</div>;
        } else {
            return (
                <div className="container" align="center">
                <h1>Books</h1>
                <p className="content">I'm an avid reader of both fiction and non-fiction books. See my past reads and what I'm currently working through below.</p>
                <table className="table" align="center">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date Finished</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id.toString()}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.date_finished}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
                </div>
            )
        }
    }
}

export default Books;