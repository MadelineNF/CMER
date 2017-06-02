import React, {Component} from 'react';
import '../App.css';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <h3 className='aboutText'>CMER is a community playlist app. Anyone can add their favorite song 
                link to our playlist, so we can all enjoy it together. Our app takes a 
                persons' song link and queues it to our player. You have the option 
                to delete or edit your song if you would like to. (*WARNING* PLEASE 
                DON'T DELETE ANYONE'S ELSE SONG! THANK YOU) CMER is a project made by 
                a group from the WDI Ada class at General Assembly. It is a work in 
                progress so be warned tht some features may not work as intended or at 
                all. If you have any questions regarding this project (or just want to 
                shoot the breeze), feel free to visit my <a href='https://www.github.com/MadelineNF'>github</a>! 
                This project was created in collaboration with Chim, Madeline, Emel, and Robert.
                </h3>
            </div>
        )
    }
}

export default About;