
import "./index.css"


const List = (props) => {
    const { value, style } = props


    return (
        <div className="card">
            <p className={style}>{value}</p>
        </div>

    )
}

export default List