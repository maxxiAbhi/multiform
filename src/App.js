import { useState } from 'react';
import { MultiStepForm, Step } from 'react-multi-form';
import ButtonGroup from './ButtonGroup';
import Buttons from './Buttons';
import Form from './Form';
import { form1, form2, form3, form4 } from './formData';
import { useForm } from 'react-hook-form';
function App() {
  const [stepNo, setStepNo] = useState(1)
  const [fildError,setFildError]=useState({});
  const MAX_STEP = 4
  const { register, handleSubmit, formState: { errors, } } = useForm();
  const handelForm = (data) => {
    console.log(data)
    for (const item of errors) {
      setFildError({...fildError,item})
    }
    console.log(fildError)
  }
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit(handelForm)}>
          <MultiStepForm activeStep={stepNo}>

            <Step label="one">
              <p>One</p>
              {
                form1.map(data => <Form register={register} label={data.label} fildname={data.name} fildType={data.type} errors={errors} />)
              }
              <ButtonGroup setStepNo={setStepNo} stepNo={stepNo} maxStep={MAX_STEP} />
            </Step>
            <Step label="Two">
              <p>Two</p>
              {
                form2.map(data => <Form register={register} label={data.label} fildname={data.name} fildType={data.type} />)
              }
              <ButtonGroup setStepNo={setStepNo} stepNo={stepNo} maxStep={MAX_STEP} />
            </Step>
            <Step label="Three">
              <p>Three</p>
              {
                form3.map(data => <Form register={register} label={data.label} fildname={data.name} fildType={data.type} />)
              }
              <ButtonGroup setStepNo={setStepNo} stepNo={stepNo} maxStep={MAX_STEP} />
            </Step>
            <Step label="Four">
              <p>Four</p>
              {
                form4.map(data => <Form register={register} label={data.label} fildname={data.name} fildType={data.type} />)
              }
              <ButtonGroup setStepNo={setStepNo} stepNo={stepNo} maxStep={MAX_STEP} /><br />
              <button type='submit'>Submit</button>
            </Step>
          </MultiStepForm>
        </form>
      </div>
    </>
  );
}

export default App;
