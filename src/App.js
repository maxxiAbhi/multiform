import { useState } from 'react';
import { MultiStepForm, Step } from 'react-multi-form';
import ButtonGroup from './ButtonGroup';
import Buttons from './Buttons';
import Form from './Form';
function App() {
  const [stepNo, setStepNo] = useState(1)
  const MAX_STEP = 4
  return (
    <>
      <div className='container'>
        <MultiStepForm activeStep={stepNo}>
          <Step label="one">
            <p>One</p>
            <Form lable1={'Name'} type1={'text'} lable2={'Phone'} type2={'number'} stepNo={stepNo} maxStep={MAX_STEP} />
            <ButtonGroup setStepNo={setStepNo} stepNo={stepNo} maxStep={MAX_STEP} />
          </Step>
          <Step label="Two">
            <p>Two</p>
            <Form lable1={'Email'} type1={'email'} lable2={'Address'} type2={'text'} stepNo={stepNo} maxStep={MAX_STEP} />
            <ButtonGroup setStepNo={setStepNo} stepNo={stepNo} maxStep={MAX_STEP} />
          </Step>
          <Step label="Three">
            <p>Three</p>
            <Form lable1={'Pin'} type1={'number'} lable2={'Adher Card'} type2={'number'} stepNo={stepNo} maxStep={MAX_STEP} />
            <ButtonGroup setStepNo={setStepNo} stepNo={stepNo} maxStep={MAX_STEP} />
          </Step>
          <Step label="Four">
            <p>Four</p>
            <Form lable1={'Pan Card'} type1={'text'} lable2={'Message'} type2={'text'} stepNo={stepNo} maxStep={MAX_STEP} />
            <ButtonGroup setStepNo={setStepNo} stepNo={stepNo} maxStep={MAX_STEP} />
          </Step>
        </MultiStepForm>
      </div>
    </>
  );
}

export default App;
