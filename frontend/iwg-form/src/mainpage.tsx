import React from 'react';
import './mainpage.css';
import './formcomponents.css';
import imageSrc from './assets/tmc-logo.jpeg';
import CheckWithText from './components/checkwithtext';
import Spacer from './components/spacer';
import TextfieldWithLabel from './components/textfieldlabeled';
import SelectLabels from './components/selectmenu';

const MainPage: React.FC = () => {
    return (
        <main id="mainpage">
            <div className="form-container">
                {/* header-logo row div */}
                <div className="parent">
                    {/* header div */}
                    <div className="child">
                        <h1 className="form-heading">Report an Incident</h1>
                    </div>
                    {/* image div */}
                    <div className="child">
                        <img
                            style={{
                                maxWidth: '60px',
                                maxHeight: '61px',
                                height: 'auto',
                                width: 'auto',
                                flexShrink: 0
                            }}
                            src={imageSrc}
                            alt="Description"
                        />
                    </div>
                </div>
                
                <div>
                    <span className="asterisk">*</span>
                    <span className="information"> </span>
                    <span className="required">Required</span>
                </div>
                <Spacer height={20} />
                <div className="subheader">Send my report to:</div>
                <Spacer height={10} />
                <div className='parent'>
                    <div className="child">
                        <CheckWithText text="CAIR" />
                    </div>
                    <div className="child">
                        <CheckWithText text="DPSS" />
                    </div>
                    <div className="child">
                        <CheckWithText text="ECRT" />
                    </div>
                </div>
                <Spacer height={30} />
                <div className="subheader">Enter your Information:</div>
                <Spacer height={10} />
                <CheckWithText text= "Keep my report anonymous"/>
                <CheckWithText text= "I consent to give media my contact info"/>
                <Spacer height={30} />
                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='Umich Email' />
                    </div>
                    <div className="child">
                        <SelectLabels labelText='Affiliation'/>
                    </div>
                </div>
                <Spacer height={10}/>
                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='First Name' />
                    </div>
                    <div className="child">
                        <TextfieldWithLabel labelText='Last Name' />
                    </div>
                </div>
                <Spacer height={10}/>
                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='Phone' />
                    </div>
                    <div className="child">
                        <TextfieldWithLabel labelText='Zip' />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainPage;