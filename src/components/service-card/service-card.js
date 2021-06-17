import './service-card.scss'
import Fade from 'react-reveal/Fade';

export const ServiceCard = (props) => {

    const setVareables = () => {
        return {
            '--height' : props.height  ? props.height :  '300px' ,
            '--img-size': props.imgSize  ? props.imgSize : '80px'
        };
    }
    return (
        <div style={setVareables()} className="service-card">
            <img src= {props.imgUrl} alt=""></img>
            <p>{props.title}</p>
            <main>
                <p> {props.description} </p>
            </main>
        </div>
    )
}