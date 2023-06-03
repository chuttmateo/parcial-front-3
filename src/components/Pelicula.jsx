/* eslint-disable react/prop-types */
function Pelicula(props) {
    return(
        <div className="pelicula">
            <h2>{props.titulo}</h2>
            <a href={props.trailer} target="_blank" rel="noopener noreferrer">Trailer</a>
        </div>
    )
}
export default Pelicula