import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
ServiceIcon,
ServicesH2, 
ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServiceIcon src={Icon1}/>
                <ServicesH2>Reduce expences</ServicesH2>
                <ServicesP>We help to reduce your fees
                    and increase your revenue.                  
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServiceIcon src={Icon2}/>
                <ServicesH2>Virtual offices</ServicesH2>
                <ServicesP>You can access online
                    classess anywhere.                 
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServiceIcon src={Icon3}/>
                <ServicesH2>Premium benefits</ServicesH2>
                <ServicesP>Unlock special membership card.                
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>  
    </ServicesContainer>
  );
};

export default Services;
