import './res-row-wrapper.css'
import Fade from 'react-reveal/Fade';
export const ResRowWrapper = (props) => {


    return (
        <div className="row-wrapper" style={{ margin: props.margin}}>
            <h1> {props.title} </h1>
            <div className={`res-row-wrapper ${props.link}`} style={{justifyContent: props.justify}}>
                <Fade bottom>
                    {props.children}
                </Fade>
            </div>
        </div>
    )
}