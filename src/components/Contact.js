const Contact = () => {
    return (
        <section className="flex flex-col justify-center items-center h-screen">
            <div>
                <div>
                    <input type='text' placeholder='Name'></input>
                </div>
                <div>
                    <input type='text' placeholder='Email'></input>
                </div>
                <div>
                    <textarea placeholder="Message">

                    </textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </section>
    )
}

export default Contact;