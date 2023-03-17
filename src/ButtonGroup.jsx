import React from 'react'
import Buttons from './Buttons'

function ButtonGroup({setStepNo,stepNo,maxStep}) {
    return (
        <>
            <Buttons name={'previous'} setStep={setStepNo} step={stepNo} maxStep={maxStep} />
            <Buttons name={'next'} setStep={setStepNo} step={stepNo} maxStep={maxStep} />
        </>
    )
}

export default ButtonGroup