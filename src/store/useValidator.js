import { useState } from 'react';

const useValidator = (initModel, validatorConfig) => { 
    const [inputs, setInputs] = useState(initModel);
    //const [validators, setValidators] = useState(validatorConfig);
    const [errorMessage, seterrorMessage] = useState({});
    const validateAllInput = input => {
        // let alert = null;
        // validators && validators.forEach(v => alert = v.isValidFun && !v.isValidFun(input.value) ? v.alert : alert);
        // input.alert = alert;
      }
      const validateInput = input => {
        let alert = null;
        const validators = validatorConfig.find(x=>x.name === input.id)
        const test = validators && validators.validation.map(v => alert = v.isValidFun && !v.isValidFun(input.value) ?  v.alert : alert );
        const val =  test ? test[0] || test[1] : null
        seterrorMessage({...errorMessage, [input.id]: val})
      }

    return {errorMessage, validateInput, validateAllInput}
}

export default useValidator
