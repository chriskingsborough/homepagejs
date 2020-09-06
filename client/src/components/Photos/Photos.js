import React from 'react';
import './Photos.css';
import Config from '../../config/client';

const url = `http://${Config.url}:${Config.port}`;

class Photo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageSrc: this.props.imageSrc,
            description: this.props.description
        }
    }

    render() {
        return (
            <div className="container">
                <div className="gallery" align="center">
                    <a target="_blank" href={this.state.imageSrc} rel="noopener noreferrer">
                        <img src={this.state.imageSrc} alt={this.state.description} width="800" height="600"/>
                    </a>
                    <div className="desc">{this.state.description}</div>
                </div>
            </div>
        )
    }
}

class Photos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            photos: []
        }
    }

    componentDidMount() {
        fetch(
            `${url}/photos`,
            {headers:{
                Authorization: Config.apiKey
            }}
        )
        .then(response => {
            return response.json();
        })
        .then(result => {
            this.setState({
                isLoaded: true,
                photos: result
            })
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error: error
            });
        })
    }
    render() {
        const { error, isLoaded, photos } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading photos...</div>;
        } else {
            return (
                <div className="container">
                <div className="header">
                    <h1 align="center">Photos</h1>
                </div>
                <div className="content">
                <p>I'm a VERY amateur photographer. I primarily shoot landscapes and of course cute pictures of my dog, Nori. 
                    She's a Bichon Poodle mix with a whole lot of personality. Check out some of my favorite shots below.<br/>
                Camera - <strong>Nikon D3300</strong><br/>
                Phone - <strong>iPhone XS</strong>
                </p>

                {photos.map(photo => (
                    < Photo 
                        imageSrc={`${url}/images/${photo.photo_path}`}
                        description={photo.description}/>
                ))}
                </div>
            </div>
            )
        }
    }
}

export default Photos;