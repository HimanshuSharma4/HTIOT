import React , {useState} from 'react';
import Developer from './Developer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Contact.css';
import SendIcon from '@material-ui/icons/Send';

function Contact() {
    
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
      
    

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Subject, setSubject] = useState('');
    const [Query, setQuery] = useState('');

    console.log(Name ,Email , Subject, Query);
    const classes = useStyles();
    return (
        <div className='contact'>
            
            <div className="contact__left">
            
                <Developer  avatar ='https://lh3.googleusercontent.com/a-/AOh14GgDl4TwNN-ZuXphno43VtesCBxe9pd7LPOrLbxjuQ=s70-p-k-rw-no' 
                            title='Anany Deep' 
                            Mail__id='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbhDtjrRWnNjHwDhWnSKRMLjxdmXfHXFGLWvNtRSJZtXvdRCsQFJmGQpCcsmkGbCRSgTdD' 
                            LinkedIn__Url='https://www.linkedin.com/in/anany-deep-6a9130174/'/>
            
                <Developer  avatar ='https://avatars.githubusercontent.com/u/60513362?s=60&v=4' 
                            title='Suraj Kumar' 
                            Mail__id='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCbJgdVxhrlwvwBxbjFFnnvPHvLCVnWntbwJMzHCMmQVFknkfJhbDzXhmWVsrqpjlnmwsTL' 
                            LinkedIn__Url='https://www.linkedin.com/in/suraj-kumar-552183197/'/>
            
                <Developer  avatar ='https://lh3.googleusercontent.com/a-/AOh14Gg4eF5ia76nzdOVODF6FRVjdO8jQ7saQklUPJS49A=s70-p-k-rw-no' 
                            title='Himanshu Sharma' 
                            Mail__id='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbhDtjrRWnNjHwDhWnSKRMLjxdmXfHXFGLWvNtRSJZtXvdRCsQFJmGQpCcsmkGbCRSgTdD' 
                            LinkedIn__Url='linkedin.com/in/himanshu-sharma-5289451ab/'/>
            </div>
            
            <div className="contact__right">
            
            <form className="contact-form">
                
                <input  className="Contact__input" 
                        type="text" 
                        placeholder="Name" 
                        onChange={(event)=>{setName(event.target.value)}}/>
                
                <input  className="Contact__input" 
                        type="email" 
                        placeholder="Email" 
                        onChange={(event)=>{setEmail(event.target.value)}}/> 
                
                <input  className="Contact__input" 
                        type="text" 
                        placeholder="Subject" 
                        onChange={(event)=>{setSubject(event.target.value)}}/> 
                
                <input  className="Query__input"   
                        type="text"     
                        placeholder="Query"
                        onChange={(event)=>{setQuery(event.target.value)}}/> 
               
                <Button type="Submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<SendIcon />}          >
                        
                        Send
            
                </Button>
            
            </form>
        </div>
    </div>
    )
}

export default Contact
