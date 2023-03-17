import React from 'react'

function Buttons({name,setStep,step,maxStep}) {
  return (
    <>
    {
        name==='next'?(step===maxStep?null:<button onClick={()=>setStep(step+1)}>Next</button>):(step===1?null:<button onClick={()=>setStep(step-1)}>Previous</button>)       
    }
    
    </>
  )
}

export default Buttons