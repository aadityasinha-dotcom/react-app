import React, {useState} from 'react';
import { HeroBlog, HeroContainer, 
VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward,
ArrowRight } from './HeroElements';
import Video from '../../videos/video.mp4';
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
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBlog>
            <HeroContent>
                <HeroH1>Welcome to my new website</HeroH1>
                <HeroP>
                    Sign up for a new account
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} 
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
