import React from 'react'
import './OurTeam.css';
import MemberCard from './MemberCard';
import Harshpic from '../../assets/Members/Harsh_Jain.jpg';
import Anshpic from '../../assets/Members/Ansh.jpg';
import Rohanpic from '../../assets/Members/Rohan.jpg';
import Shatakshipic from '../../assets/Members/Shatakshi.jpg';
import Girishpic from '../../assets/Members/Girish.jpg';
import Tanvanshpic from '../../assets/Members/Tanvansh.jpg'

const OurTeam = () => {
  return (  
    <>
        <div className="ourteam_container">
            <div className="team_content">
                <h1 id="team_heading">Meet Our Team</h1>
                <div className="team_cards">
                    <div className="row1">
                        <MemberCard name=" Dr. Hem Dutt Joshi" position="President" github="url" linkedin="linkurl" img="imgurl"/>
                        <MemberCard name="Dr. Ashutosh Kumar Singh" position="Vice President" github="url" linkedin="linkurl" img="imgurl"/>
                    </div>

                    <div className="row2">
                        <MemberCard name="Ansh Shrivasthav" position="General Secretary" github="url" linkedin="linkurl" img={Anshpic}/>
                        <MemberCard name="Rohan Gupta" position="General Secretary" github="url" linkedin="linkurl" img={Rohanpic}/>
                        <MemberCard name="Harsh Jain" position="Joint Secretary" github="url" linkedin="linkurl" img={Harshpic}/>
                        <MemberCard name="Shatakshi Sharma" position="Joint Secretary" github="url" linkedin="linkurl" img={Shatakshipic}/>
                    </div>
                        <br /><br />
                    <div className="row3">
                        <MemberCard name="Girish Arora" position="Technical Head" github="url" linkedin="linkurl" img={Girishpic}/>
                        <MemberCard name="Tanvansh Singh" position="Marketing Head" github="url" linkedin="linkurl" img={Tanvanshpic}/>
                        <MemberCard name="Arnav Puri" position="Media and PR Head" github="url" linkedin="linkurl" img="imgurl"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurTeam
