import React from 'react'


const Profile = ({name,desc,image,subTile}) => {
  return (
    <div style={{backgroundColor: 'black', color: 'white', margin:'20px' ,padding:5}}>
      <div style={{display: "flex", justifyContent:"center"}}>
          <img src= {image} 
          height='100px' style={{borderRadius: '30px'}} />
          <div>
            <h2 style={{ marginLeft: "10px"}}>{name}</h2>
            <h4 style={{ marginLeft: "10px"}}>{subTile}</h4>
          </div>
        </div>
        <div style={{display: "flex", justifyContent:"center"}}>
        <p>
        {desc}
        </p>
        </div>
    </div>

  )
}

export default Profile
