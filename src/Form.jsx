import React from 'react'

function Form({ lable1, type1, lable2, type2, maxStep, stepNo }) {
    return (
        <>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">{lable1}</label>
                    <input type={type1} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">{lable2}</label>
                    <input type={type2} class="form-control" id="exampleInputPassword1" />
                </div>
                {
                    stepNo === maxStep ? <button type="submit" class="btn btn-primary">Submit</button> : null
                }

            </form>
        </>
    )
}

export default Form