import React, { Component } from 'react';
import { Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className="aboutme-div">
            <Card className="aboutme-card"shadow={2} style={{width: '1012px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '300px', background: 'url(/img/aboutme_header.jpg) center / cover'}}>Welcome to My Portfolio Page</CardTitle>
                <CardText style={{margin: 'auto', textAlign: 'left', display:'box'}}>
                    Hello! My name is Kyle and I am a recent graduate from San Diego State University with a B.S. in Computer Science.
                    <br></br>
                    <br></br>
                    Born and raised in San Diego, I grew up through the rise of the internet and technology. I have always enjoyed utilizing technology ranging from media creation software
                    such as Adobe Photoshop to hardware projects such as the raspberry pi, which has led me into pursuing a degree in Computer Science.
                    Additionally, I have 3 years of experience in Information Technology supporting hardware, software and end-users in the public sector. In my free time I enjoy 
                    playing video games such as animal crossing and creating projects such as this website, my home-lab, and more which can be found in the projects section of this site. Currently, I am seeking job opportunities
                    in the IT and Cyber Secruity fields to utilize my skillset. 
                    <br></br>
                    <br></br> 
                    If you would like to get in touch with me, please do not hesitate to click the button below for my contact, 
                    or check out my resume and projects.
                    <br></br>
                    <br></br>
                    Thanks for stopping by!
                </CardText>
                <CardActions border>
                    <CardText style={{color: '#5a6069'}}> <b style={{color: '#5a6069'}}>Email:</b> KyleSheaGloria@gmail.com     |      <a style= {{color: '#5a6069'}} href="https://www.linkedin.com/in/kyle-gloria/"><b>LinkedIn:</b></a></CardText>
                </CardActions>
            </Card>
            </div>
        )
    }
}

export default About;