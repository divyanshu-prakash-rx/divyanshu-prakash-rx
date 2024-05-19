import React from 'react'
import front_image from '../images/Front_image.png'
function Home(props) {


  return (
    <>
      <div className='row mt-0 pt-0'>
        <img className={` col-6
            `} src={front_image} alt="Front_image" style={{
            width: "50%",
            height: "auto",
          }} />
        <div className={`d-flex justify-content-center flex-column col-6 
          }`}
        >
          <h1 className={`gradient-text-${props.mode} `}>Divyanshu Prakash</h1>
          <h4 className={`gradient-text2-${props.mode} `}>Developer|AI|ML|Web|Robotics</h4>
        </div>
      </div>
    </>
  )
}

export default Home