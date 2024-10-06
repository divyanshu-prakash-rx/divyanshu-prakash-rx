import React from 'react'
import '../style/Timeline.css'
import amazon from '../images/amazon.png'

function Timeline() {

    return (
        <>
            <div className="" style={{width: "70%"}}>
                <div className="tl">
                    <div className="container left-c  ">
                        <img src={amazon} alt="amazon" />
                        <div className="text-box">
                            <h2>Amazon</h2>
                            <h3>2018-2019</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec</p>
                            <span className="left-c-arrow"></span>
                        </div>
                    </div>
                    <div className="container right-c  ">
                        <img src={amazon} alt="amazon" />
                        <div className="text-box">
                            <h2>Amazon</h2>
                            <h3>2018-2019</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec</p>
                            <span className="right-c-arrow"></span>
                        </div>
                    </div>
                   
                    <div className="container left-c  ">
                        <img src={amazon} alt="amazon" />
                        <div className="text-box">
                            <h2>Amazon</h2>
                            <h3>2018-2019</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec</p>
                            <span className="left-c-arrow"></span>
                        </div>
                    </div>

                    <div className="container right-c  ">
                        <img src={amazon} alt="amazon" />
                        <div className="text-box">
                            <h2>Amazon</h2>
                            <h3>2018-2019</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec</p>
                            <span className="right-c-arrow"></span>
                        </div>
                    </div>
                    <div className="container left-c  ">
                        <img src={amazon} alt="amazon" />
                        <div className="text-box">
                            <h2>Amazon</h2>
                            <h3>2018-2019</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec</p>
                            <span className="left-c-arrow"></span>
                        </div>
                    </div>
                    <div className="container right-c  ">
                        <img src={amazon} alt="amazon" />
                        <div className="text-box">
                            <h2>Amazon</h2>
                            <h3>2018-2019</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec</p>
                            <span className="right-c-arrow"></span>
                        </div>
                    </div>
                </div></div>
        </>
    );
}

export default Timeline