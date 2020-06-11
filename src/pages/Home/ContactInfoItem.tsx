import React from 'react';
import Flex from '../../components/utils/Flex';
import Icon from '../../components/shared/Icon';



const ContactInfoItem = (props: {url: string, text: string, icon: string, iconColor: string}) => {

    return  <a style={{textDecoration: "none", color: "inherit"}} href={props.url}>
                <Flex className="Contact__Container__Item" alignItems="center">
                    <Icon name={props.icon} style={{ fontSize: "24px", margin: "6px", color: props.iconColor }} /> 
                    {props.text}
                </Flex>
            </a>
}


export default ContactInfoItem;