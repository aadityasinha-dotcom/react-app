import React from 'react';
import {Button} from '../ButtonElements';
import {InfoContainer, InfoWrapper, InfoRow, Column1,Column2,TextWrapper,
TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap
} from './infoElements';
import image from '../../images/svg-3.svg';

const InfoSection = (lightBg, id, imgStart, topLine, lightText, headline, darkText, description,buttonLabel, 
    img, alt) => {
  return (
    <>
        <InfoContainer lightBg={true} id='about'>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Yoooooooo</TopLine>
                            <Heading lightText={true}>hello</Heading>
                            <Subtitle darkText={false}>hello and welcome to my new website</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={true}
                                dark={true}
                                >Hello</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={image} alt='hello'/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  );
};

export default InfoSection;
