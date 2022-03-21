
export default function Card(props) {
    //concat class in suing card component
    
    const classes = 'card ' + props.className
    return (
        <>
            <div className={classes}>
                {props.children}
            </div>
        </>
    )
}   
