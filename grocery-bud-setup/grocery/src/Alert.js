import React ,{useEffect}from 'react'

function Alert({show,msg,type,removeAlert,list}) {
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            removeAlert();
        },3000)
        return ()=> clearTimeout(timeout);
    },[list,removeAlert])
    //console.log(show);
    return (
        <p className={`alert alert-${type}`}>{msg}</p>
    )
}

export default Alert;
