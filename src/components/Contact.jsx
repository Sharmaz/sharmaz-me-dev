const Contact = () => (
  <section className="mx-4 my-10  max-w-screen-lg md:pl-8 md:mx-auto" id="contact">
    <h2 className="text-2xl md:text-4xl">Contact me</h2>
    <div className="form-container p-0.5 w-full my-8 md:w-3/4">
      <form className="bg-background rounded-2xl p-4" action="https://formspree.io/f/irae45@gmail.com" method="post">
        <div className="md:flex justify-between">
          <div className="form-field flex align-middle my-3 md:my-4 md:mr-4 w-full">
            <input className="rounded-2xl p-4 w-full m-0.5 bg-background" type="text" name="" id="" placeholder="Full Name" />
          </div>
          <div className="form-field flex align-middle my-3 md:my-4 md:ml-4 w-full">
            <input className="rounded-2xl p-4 w-full m-0.5 bg-background" type="email" name="" id="" placeholder="Email Address" />
          </div>
        </div>
        <div className="form-field flex align-middle my-3 md:my-4">
          <input className="rounded-2xl p-4 w-full m-0.5 bg-background" type="text" name="" id="" placeholder="Subject" />
        </div>
        <div className="form-field flex align-middle my-3 md:my-8">
          <textarea className="rounded-2xl p-4 w-full m-0.5 bg-background" name="" id="" cols="30" rows="10" placeholder="How can I help you?" />
        </div>
        <div className="button-orange flex align-middle mt-4 md:mt-8 md:w-[248px]">
          <button className="bg-background rounded-full p-4 w-full m-0.5" type="submit">Send Message</button>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;
