const Contact = () => (
  <section className="mx-4 my-10  max-w-screen-lg md:pl-8 md:mx-auto">
    <h2 className="text-2xl md:text-4xl">Contact me</h2>
    <div className="border-2 rounded-2xl p-4 w-full my-8 border-slate-500 md:w-3/4">
      <form action="https://formspree.io/f/irae45@gmail.com" method="post">
        <div className="md:flex justify-between">
          <input className="border-2 rounded-2xl p-4 w-full md:mr-4 my-3 border-slate-500  bg-transparent" type="text" name="" id="" placeholder="Full Name" />
          <input className="border-2 rounded-2xl p-4 w-full md:ml-4 my-3 border-slate-500  bg-transparent" type="email" name="" id="" placeholder="Email Address" />
        </div>
        <input className="border-2 rounded-2xl p-4 w-full my-3 border-slate-500  bg-transparent" type="text" name="" id="" placeholder="Subject" />
        <textarea className="border-2 rounded-2xl p-4 w-full my-3 border-slate-500  bg-transparent" name="" id="" cols="30" rows="10" placeholder="How can I help you?" />
        <button className="border-2 rounded-full p-4 w-full my-3 border-slate-500" type="submit">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
