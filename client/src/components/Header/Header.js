import React from 'react';
import './Header.css';

class Header extends React.Component {


    constructor(props) {
        super(props);
        this.handlePage = this.handlePage.bind(this);
    }

    handlePage(page) {
        if (this.props.page === page) {
            return 'active'
        }
        return '';
    }

    render() {
        return (
            <div className="page-header">
                <ul>
                    <li id="home" className={this.handlePage("home")} onClick={this.props.handlePageChange}>Home</li>
                    <li id="photos" className={this.handlePage("photos")} onClick={this.props.handlePageChange}>Photos</li>
                    <li id="books" className={this.handlePage("books")} onClick={this.props.handlePageChange}>Books</li>
                    <li id="projects" className={this.handlePage("projects")} onClick={this.props.handlePageChange}>Projects</li>
                    <li id="resume" className={this.handlePage("resume")} onClick={this.props.handlePageChange}>Resume</li>
                    <li id="contact" className={this.handlePage("contact")} onClick={this.props.handlePageChange}>Contact</li>
                    <li id="site-name">Chris Kingsborough</li>
                </ul>
            </div>
        )
    }
}

export default Header;