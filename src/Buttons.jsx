import React from 'react'

function Buttons({name,setStep,step,maxStep}) {
  return (
    <>
    {
        name==='next'?(step===maxStep?null:<button type='button' onClick={()=>setStep(++step)}>Next</button>):(step===1?null:<button type='button' onClick={()=>setStep(--step)}>Previous</button>)       
    }
    
    </>
  )
}

export default Buttons