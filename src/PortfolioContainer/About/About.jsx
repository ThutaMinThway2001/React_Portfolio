import React from 'react';
import './About.css'
import Award from '../../image/award.png'
const About = () => {
    return(
        <div className='a'>
            <div className='a-left'>
                <div className="a-card bg">
                </div>
                <div className="a-card">
                <img
                    src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="a-img"
                />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">
                    About Me
                </h1>
                <p className='a-title'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur saepe impedit asperiores facilis perferendi
                </p>
                <p className='a-desc'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe iusto velit accusantium dolore ea excepturi, qui aliquam alias, consequuntur nesciunt quibusdam vero eius quisquam itaque molestiae eveniet. Eos, iusto? Expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos asperiores rerum, veritatis corrupti quibusdam quod distinctio sapiente voluptate itaque molestias eos optio numquam veniam saepe eveniet ipsum eius ab nesciunt.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4>International Design</h4>    
                        <p className="a-award-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis asperiores ipsam necessitatibus laborum consectetur iste i
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;