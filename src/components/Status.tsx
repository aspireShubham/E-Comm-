
type StatusProps = {

    status : 'loading' | 'Success' | 'error'           // Union types  // don't take status: 'string' 
}


export default function Status  (props: StatusProps) {

    let message 

    if(props.status == 'loading') {
        message = 'loading'
    } else if(props.status == 'Success') {
        message = 'data fetched successfully'
    }    else if(props.status == 'error') {
        message = 'data fetched successfully'
    }

    return (
        <div>

          <h1>Status -{props.status}</h1>
        </div>
    )
}