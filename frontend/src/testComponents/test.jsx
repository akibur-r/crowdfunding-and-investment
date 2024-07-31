import './test.scss'

import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

function Test(){

    const form = useForm();
    const {register, control, handleSubmit, formState} = form;

    const onSubmit = (data) => {
        console.log("form submitted", data);
    }

  return (
    <div className='test'>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" 
                {...register("username", 
                    {
                        required: 'usernamen is mandatory'
                    })
                } 
            />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" {...register("email", 
                    {
                        pattern: {
                            value: /^[a-zA-Z]*$/,
                            message: "Invalid email"
                        }
                    })
                }  />

            <label htmlFor="channel">Channel</label>
            <input type="text" name="channel" id="channel" {...register("channel", 
                    {
                        required: 'channel is mandatory'
                    })
                }  />

            <button>Submit</button>
        </form>

        <DevTool control={control} />
    </div>
  )
}

export default Test