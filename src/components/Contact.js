const Contact = () => {
    return (
        <section className="flex flex-col justify-center items-center h-screen bg-[#e5e5e5]">
            <div>
                <div className="my-4 w-[400px] shadow-lg">
                    <input className="contact py-2 pl-2 w-full" type='text' placeholder='Name'></input>
                </div>
                <div className="my-4 w-[400px] shadow-lg">
                    <input className="contact py-2 pl-2 w-full" type='text' placeholder='Email'></input>
                </div>
                <div className="my-4 w-[400px] h-[150px] shadow-lg">
                    <textarea className="contact py-2 pl-2 w-full h-full" placeholder="Message">

                    </textarea>
                </div>
                <div className="my-4">
                    <button className="btn py-2 px-6 bg-[#FFF] ">Submit</button>
                </div>
            </div>
        </section>
    )
}

export default Contact;