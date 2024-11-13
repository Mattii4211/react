import { useState } from 'react'
import { Button } from 'react-bootstrap';


function Form(props: any) {
    const [name, setName] = useState(props.name ?? '');
    const [email, setEmail] = useState(props.email ?? '');
    const [tel, setTel] = useState(props.tel ?? '');
    const inputClasses = 'm-1';

    const submitHandle = (e: any) => {
        e.preventDefault();
        props.onFormSubmit(
            {
                id: props.id ?? crypto.randomUUID(),
                name: name,
                email: email,
                tel: tel
            }
        );

        if (!props.id) {
            Array.prototype.forEach.call(e.target.elements, (element) => {
                if (element.type !== 'submit') {
                    element.value = null 
                }
            });   
        }

        setEmail('');
        setName('');
        setTel('');
    }

    return (
        <>
            <form onSubmit={submitHandle}>
                <div>
                    <input
                        type="text"
                        name="name"
                        className={inputClasses}
                        placeholder='Name'
                        defaultValue={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <input
                        type="phone"
                        name="tel"
                        className={inputClasses}
                        placeholder='Phone'
                        defaultValue={tel}
                        onChange={(e) => {
                            setTel(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        className={inputClasses}
                        placeholder='Email'
                        defaultValue={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <Button
                    type='submit'
                    className='btn btn-primary btn-sm'
                    disabled={name.length === 0 || tel.length === 0}
                >
                    Submit
                </Button>
            </form>
        </>
    )
}

export default Form;