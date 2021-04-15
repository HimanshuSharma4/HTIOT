// https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCbJgdVxhrlwvwBxbjFFnnvPHvLCVnWntbwJMzHCMmQVFknkfJhbDzXhmWVsrqpjlnmwsTL
import React from 'react'
import { Avatar } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import './Developer.css';
function Developer({avatar, title, Mail__id, LinkedIn__Url}) {
    return (
        <div className="developer">
            {avatar && (
                <Avatar className='headerOption__icon' src={avatar} />
            ) }
            <h4>{title}</h4>
            
            <IconButton aria-label="gmail.com" onClick={() => window.open(Mail__id)}>
                <MailOutlineIcon fontSize="large"/>
            </IconButton>
            <IconButton aria-label="Linkedin.com" onClick={() => window.open(LinkedIn__Url)}>
                    <LinkedInIcon fontSize="large"/>                
            </IconButton>
        </div>
    )
}

export default Developer
