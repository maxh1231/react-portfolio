import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [view, setView] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setView(true);
        // emailjs.sendForm('service_zirnhu8', 'template_z5s2y9b', form.current, 'user_MiPMA7RruofT1yJEswkdw')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text)
        //     });
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
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="my-4 w-[400px] shadow-lg">
                        <input className="contact py-2 pl-2 w-full" type='text' placeholder='Name' name='from_name'></input>
                    </div>
                    <div className="my-4 w-[400px] shadow-lg">
                        <input className="contact py-2 pl-2 w-full" type='text' placeholder='Email' name='from_email'></input>
                    </div>
                    <div className="my-4 w-[400px] h-[150px] shadow-lg">
                        <textarea className="contact py-2 pl-2 w-full h-full" placeholder="Message" name='message'>

                        </textarea>
                    </div>
                    <div className="my-4">
                        <button className="btn py-2 px-6 bg-[#FFF] ">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;