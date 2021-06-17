import './offset-card.scss'

const OffsetCard = (props) => {
    const setVareables = () => {
        return {
            '--height' : props.height  ? props.height :  '400px' ,
            '--card-width': props.cardWidth  ? props.cardWidth : '120px'
        };
    }
    const spacer = <div className="spacer"/>;
    return ( 
        <div className="offset-card" style={setVareables()}>
            {props.put === 'bottom' || props.put ==='middle' ? spacer : null}
            <div className="card">
                <div>
                    <img src={props.imgSrc}></img>
                </div>
                <p>{props.text}</p>
            </div>
            {props.put === 'top' || props.put === 'middle' ? spacer : null}
        </div>
     );
}
 
export default OffsetCard;