import React from 'react';
import './Home.css';

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <div className="title">
                    <h1>Welcome</h1>
                </div>
                <div className="content">
                    <p>
                        I build tools to deliver data driven insights in real time. I want to make analyzing millions of records at a time as easy as the push of a button. Outside of work I'm an amateur photographer and avid reader and most importantly a dog dad. I try to stay active through a combination of running, boxing, rock climbing and paddle boarding. Take a look around, check out what I'm doing and if you want to know more send me a note.
                    </p>
                </div>
            </div>
        )
    }
}

export default Home;