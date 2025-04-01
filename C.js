
import E from './E'

let C = (props) =>{
    return (<>
           <h1>I am component C</h1>
           <E username={props.username}/>
    </>)
}
    

export default C