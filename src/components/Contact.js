import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

const Contact = () => {
    const [view, setView] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setView(true);
        emailjs.sendForm('service_zirnhu8', 'template_z5s2y9b', form.current, 'user_MiPMA7RruofT1yJEswkdw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
    };

    if (view) {
        return (
            <div className="flex flex-col justify-center items-center h-5/6 text-2xl">
                <h3>Thank you!</h3>
            </div>
        )
    }

    return (
        <section className="flex flex-col justify-center items-center h-5/6 bg-[#e5e5e5]">
            <h3 className="text-3xl text-[#4D0823]">Send me an email!</h3>
            <div>
                <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                    <div className="my-4 w-[400px] ">
                        <input className="contact py-2 pl-2 w-full" type='text' placeholder='Name' name='from_name' {...register('name', { required: true })} />
                        {errors.name && <span className="block bg-[#e5e5e5] text-[#4D0823]">This field is required.</span>}


                    </div>
                    <div className="my-4 w-[400px]">
                        <input className="contact py-2 pl-2 w-full" type='text' placeholder='Email' name='from_email'
                            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })} />
                        {errors.name && <span className="block bg-[#e5e5e5] text-[#4D0823]">Must be a valid email address.</span>}
                    </div>
                    <div className="my-4 w-[400px] h-[150px] shadow-lg">
                        <textarea className="contact py-2 pl-2 w-full h-full" placeholder="Message" name='message'
                            {...register('message', { required: true })} />
                        {errors.message && <span className="block bg-[#e5e5e5] text-[#4D0823]">Please provide a message.</span>}

                    </div>
                    <div className="my-4">
                        <button className="mt-4 btn py-2 px-6 bg-[#FFF] ">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;