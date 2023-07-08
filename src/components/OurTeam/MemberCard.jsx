import React from 'react'
import './MemberCard.css'
import img from '../../assets/Members/Harsh_Jain.jpg'

const MemberCard = (props) => {
  return (
    <>
        <div className="card">
            <div className="img_container">
                <img src={props.img} alt="" />
            </div>
            <br />
            <span id="name">{props.name}</span>
            <span id="position">{props.position}</span>
            <br />
            <div className='urls'><span><a href=''>Linkedin</a></span>&nbsp;&nbsp;&nbsp;<span><a href=''>Github</a></span></div>
        </div>
    </>
  )
}

export default MemberCard
