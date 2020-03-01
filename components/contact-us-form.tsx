export default function ContactUsForm() {
  return (
    <div className="my-5">
      <h2 className="font-bold text-lg">Contact Us</h2>
      <form
        className="bg-nhw-contact-us-bg block p-2 rounded mt-2"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact-us" />
        <label className="m-2 block">
          Name (required)
          <input
            type="text"
            className="block rounded mb-3 mt-1 w-full p-1"
            required
          ></input>
        </label>

        <label className="m-2 block">
          Email (required)
          <input
            type="email"
            className="block rounded mb-3 mt-1 w-full p-1"
            required
          ></input>
        </label>

        <label className="m-2 block">
          Mobile number (required)
          <input
            type="phone"
            className="block rounded mb-3 mt-1 w-full p-1"
            required
          ></input>
        </label>

        <label className="m-2 block">
          Send us your query - we'll get back to you as soon as we can!
          <textarea
            className="block rounded mb-3 mt-1 w-full p-1 resize-none"
            required
            rows={7}
          ></textarea>
        </label>

        <input
          type="submit"
          className="inline-block p-2 rounded m-2 border border-gray-500 border-solid hover:bg-gray-400 hover:cursor-pointer"
          value="Send"
        />
      </form>
    </div>
  );
}
