
// children type prop

type Headingsprops = {

    children : string;
}

export default function Headings  (props: Headingsprops)  {

    return (
        <>
        <h2>{props.children}</h2>
        </>
    )
} 