import {Component} from 'react'
import {FunctionalComponent} from './FunctionalComponent'

class ClassComponent extends Component {
    render(){
        const {fname, lname} = this.props;
        // Array Destructuring
        // const arr = ["kamal", 1]
        // const [firstName, number] = arr;
        return(
            <div style={{backgroundColor:'blue'}}>{`Hello From Class Component ${fname} ${lname}`}
            <FunctionalComponent fname={"EA"} lname={"14"}/>
            </div>
        )
    }
}

export default ClassComponent