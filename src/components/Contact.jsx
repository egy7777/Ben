import { CONTACT } from "../constants";
import resumeFile from "../assets/Ben Abraham Resume--.pdf"; // Adjust the path if needed

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
        <div className="my-4">
          <a
            href={resumeFile} // Link to the resume file
            download // Enables download
            className="text-blue-600 underline" // Optional styling
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
