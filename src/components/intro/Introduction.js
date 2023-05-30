import React from 'react'
import './Introduction.css'
import codeImage from '../../images/codeImage.png'

function Introduction() {
  return (
    <div className='i' id="intro">
        <div className="iLeft">
            <div className="iLeftWrapper">
                <h2 className='iIntro'>Hello, My name is</h2>
                <h1 className='iName'>Maruf Khan</h1>

                <div className="iTitle">
                    <div className="iTitleWrapper">
                        <div className="iTitleItem">Game Dev</div>
                        <div className="iTitleItem">Web Dev</div>
                        <div className="iTitleItem">App Dev</div>
                        <div className="iTitleItem">Linux</div>
                        <div className="iTitleItem">Stock Markets</div>
                    </div>
                </div>
                <p className="iDesc">
                    A passionate undergrad student who is keen on developing solutions to complex real life problems using the power of technology!
                </p>
            </div>
        </div>
        <div className="iRight">
            <div className="iBg"></div>
            <img src={codeImage} alt="codeImage" className="iImage" />
        </div>
    </div>
  )
}

export default Introduction