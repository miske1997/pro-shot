import { useEffect, useState } from 'react';
import './scroll-reveal.css'

const ScrollReveal = (props) => {

    const [isFixed, setIsFixed] = useState('fixed');
    useEffect( () => {
        window.addEventListener('scroll', listenToScroll);
        return () => {
          window.removeEventListener('scroll', listenToScroll);
        };
      }, [])
    
      
    const listenToScroll = () => {
    const scrolled = window.pageYOffset;
    const height = document.documentElement.clientHeight;
    if(scrolled >= height + 15)
        setIsFixed('stop');
    // else if (isFixed != "fixed")
    //     setIsFixed('fixed');
    }

    return ( 
        <div className="scroll-reveal">
            
            <div className="cover">
                
                {props.children[0]}
            </div>
            <div className={`viewer-${isFixed} viewer`}></div>
                <div className={isFixed}>
                    {props.children[1]}
                </div>
        </div>
     );
}
 
export default ScrollReveal;