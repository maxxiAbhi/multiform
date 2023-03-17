import React from 'react'

function Form({label,fildname,register,fildType,errors}) {  
    // console.log(errors===undefined) 
    // console.log(errors)
    // if(errors!==undefined){
    //     // console.log(typeof errors[fildname])
    //     console.log(typeof errors[fildname]===typeof {})
    //     if(typeof errors[fildname]===typeof {}){
    //         console.log(errors[fildname])
    //     }
    // }
    return (
        <>
                <div className="mb-3">
                    <label className="form-label">{label}</label>
                    <input type={fildType} {...register(fildname, { required: false })} />
                    {/* {errors!==undefined?null:typeof errors[fildname]===typeof {}?errors[fildname] && <span style={{color:'red'}}>This field is required</span>:null} */}
                    {/* {
                        errors!==undefined?(typeof errors[fildname]===typeof {}?errors[fildname].type === 'required' && <span style={{color:'red'}}>This field is required</span>:null):null
                    } */}
                </div>
        </>
    )
}

export default Form