function Card(props) {
    return (
        <div>
            <h2><a href={props.title}>{props.title}</a></h2> 
            <img src = {props.img} width="300" height="300" />
            <hr/>
            <p>{props.description}</p>
        </div>         
    )
  }
  
  export default Card