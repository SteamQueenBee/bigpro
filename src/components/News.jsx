import React, { Component } from 'react';
import { Col, Image } from "react-bootstrap";
import './News.css';


class News extends Component {
    render() {
        return (
            <div>
                <Image src="Foto/Madhouse.png" className="Header-Image"/>
            <Col xs={12} sm={8} smOffset={2} >
                {/* <Image src="Foto/Madhouse.png" className="Pengarang"/> */}
                <h3>Company Profile</h3> 
                <p> The anime television series adaptation by Madhouse consists of 3 seasons with 13 episodes each, with the first season airing from July 7 to September 29, 2015. Two compilation anime films recapping the events from the first season were released in Japan on February 25, 2017, and March 11, 2017, respectively. The second season ran from January 9 to April 3, 2018, with the third season premiering later the same year on July 10, 2018, after which the last episode aired on October 2, 2018.</p>
            </Col>
            <Col>
                <h3>HISTORY</h3>
                <p>In February 2004, Madhouse became a subsidiary of Index Corporation.[1]

On February 8, 2011, Nippon TV became Madhouse's primary stockholder (replacing Index Corporation), via a third-party allocation of new shares.[2] NTV bought 128,667 new shares (each ¥7,772) issued by Madhouse for ¥999,999,924 total (about $12.4 million), raising its stake in the company from 10.4% to 84.5%. Index Corporation's stake in Madhouse fell from 60.91% to 10.54%.[3][4]

In January 2012, Madhouse announced their acquisition of the animation rights to the Peanuts comic strip.[5]

In March 2014, NTV bought all the shares belonging to Index Corporation, increasing its stake in Madhouse to 95%.[1]</p>
            </Col>
            </div>
        );
    }
}

export default News;