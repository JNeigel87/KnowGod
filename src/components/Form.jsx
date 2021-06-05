import React, {useState } from 'react';
import {navigate} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Form = props => {
    const [form, setForm] = useState({
        reference: ""
    });


    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        // error2Handler();
    };

  //   const error2Handler = () => {
  //     if(form !== null){
  //         setError2(false)
  //     }
  //     else{
  //         setError2(true)
  //     }
  //   }

    const onSubmitHandler = (e) => {
        e.preventDefault();
                navigate("/${reference}")
    };

    };

    export default Form;