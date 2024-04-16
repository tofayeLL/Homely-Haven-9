import image from '../../assets/images/contact3.jpg'

const Contact = () => {
    return (
        <div>


            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  bg-slate-200">
                <div className="flex flex-col justify-between lg:px-6 space-y-5 ">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="text-gray-500">Fill in the form to start a conversation.</div>
                    </div>
                    <div>
                        <img src={image} alt="" className="h-52 md:h-72 object-cover object-center " />
                    </div>
                </div>
                <form noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="Your  name" className="w-full p-3 rounded " />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded " placeholder='Your email'/>
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded " placeholder='Message...'></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;