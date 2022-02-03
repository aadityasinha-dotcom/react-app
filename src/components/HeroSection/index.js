import React, {useState} from 'react';
import { HeroBlog, HeroContainer, 
VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward,
ArrowRight } from './HeroElements';
import Video from '../../videos/video2.mp4';
import {Button} from '../ButtonElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <div>
        <HeroContainer>
            <HeroBlog>
                <VideoBg autoPlay loop muted src={Video} type='video2/mp4' />
            </HeroBlog>
            <HeroContent>
                <HeroH1>Welcome to my new website</HeroH1>
                <HeroP>
                    Sign up for a new account
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} 
                    smooth={true} duration={500} spy={true} exact={true} offset={-80}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight 
                        />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    </div>
    );
};

export default HeroSection;
