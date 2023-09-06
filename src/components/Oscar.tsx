

// children type prop

type Oscarprops = {

    children : React.ReactNode;   // it is provided by react type 
}

export default function Oscar  (props:Oscarprops)  {

    return (
        <>
        <h2>{props.children}</h2>
        </>
    )
} 