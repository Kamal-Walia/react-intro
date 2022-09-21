export const FunctionalComponent = (props) => {
    const {fname, lname} = props;
    console.log("Props", props)
    return (
        <div>{`Hello From Functional Component ${fname} ${lname}`}</div>
    )
}

export const lastName = "walia";

export const getFirstName = () => {
    return "Kamal"
}