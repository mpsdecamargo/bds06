import './styles.css';

type Props = {
    text: string;
}

const ButtonIcon = ({text} : Props) => {

    return (
        <div className="btn-container">
            
                <button className="btn btn-primary">
                    <p>{ text }</p>
                </button>
            
        </div>
    )
}

export default ButtonIcon;