import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron , Container, Row ,Col, Image} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
           <div className={Container}>
            <Jumbotron>
               <h4> OVERLORD (オーバーロード) </h4>
               <p>In the year 2138, the era of virtual reality gaming is thriving with different DMMO-RPGs. In the center of its popularity, was YGGDRASIL which garnered the most attention publicly. At some point though, YGGDRASIL, a popular online game begun to lose the vibrancy it used to have and eventually, it was scheduled to be shut down in due time. However, one player named Momonga decides not to log out during the final day of its closure, choosing to sleep within the Throne Room in the meantime while online until the game automatically logged him out. After the game shuts down, Momonga awoke to find himself still in the form of his heteromorphic avatar, a skeleton wizard who later on became "the most powerful magic caster in the world." As the world continues to change all around him, he was met with non-player characters (NPCs) who are beginning to have a consciousness of their own. Upon realizing what his next course of action will be: Having no parents, friends, or place in society, this ordinary young man, Momonga decides to go out, explore and conquer the new world.</p> 
               <Link to='about'>
                    <button bsStyle="dark"> READ </button>
                </Link>
            </Jumbotron>
            <div>
            <Row className="show-grid text-center" >
            <Col xs={12} sm={4} className="person-wrapper">
                <Image src="Foto/OverlordShaltear.png" roundedCircle className="profil-pic"/>
                <h3>Shalltear Bloodfallen (シャルティア・ブラッドフォールン)</h3>
                <p>True vampire and a Floor Guardian of the first to third floors in the Great Tomb of Nazarick. She was created by Peroroncino.</p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                <Image src="Foto/OverlordAinz.png"  className="profil-pic"/>
                <h3>Ainz Ooal Gown (アインズ・ウール・ゴウン), </h3>
                <p>Formerly known as Momonga (モモンガ), is the main protagonist of the Overlord series. He is the guild master of Ainz Ooal Gown, Overlord of the Great Tomb of Nazarick and the creator of Pandora's Actor. He is regarded as the highest of the Almighty Forty-One Supreme Beings by the NPCs of Nazarick.
In the New World, he is the Sorcerer King of the Sorcerer Kingdom and the most powerful magic caster in the world. His other identity is famously known as "Momon," a dark warrior and leader of Darkness, an adamantite ranked adventurer group of that nation. He is an adamantite class adventurer and the strongest adventurer known in E-Rantel.</p>
                </Col>
                
                <Col xs={12} sm={4} className="person-wrapper">
                <Image src="Foto/OverlordAlbedo.png" className="profil-pic"/>>
                <h3>Albedo (アルベド)</h3>
                <p>The Overseer of the Guardians of the Great Tomb of Nazarick. She is in charge of the general management and supervises the activities of the seven Floor Guardians, meaning that she ranks above all the other NPCs in Nazarick. She is the middle sister of the older sister Nigredo and younger sister Rubedo. Along with her sisters, she was created by Tabula Smaragdina.</p>
                </Col>
            </Row>
            </div>    
           </div>
        );
    }
}
export default Home;
