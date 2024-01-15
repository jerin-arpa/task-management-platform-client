import { FaGripfire } from "react-icons/fa";
import contact from "../../assets/images/contact.png";
import contact1 from "../../assets/images/contact1.png";

const Contact = () => {
  return (
    <div className="mt-10">
      <div className="container mx-auto px-5 pt-5 py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <div>
              <div className="flex gap-3">
                <div className="flex">
                  <FaGripfire className="text-2xl text-[#fc5a03]"></FaGripfire>
                </div>
                <p className="mb-4 text-xl">Contact With Us</p>
              </div>
              <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
                Drop us a <span className="text-[#fc5a03]">line below</span>
              </h1>
              <p className="mb-5">
                Top rated construction packages we pleasure rationally encounter
                consequences interesting who loves or pursue or desires.
              </p>
            </div>

            <div>
              <div className=" gap-8 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="gap-8 mb-6">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className=" mb-6">
                <textarea
                  className="textarea textarea-bordered  textarea-lg w-full"
                  placeholder="Bio"
                ></textarea>
              </div>
              <button className="btn w-full bg-[#fc5a03] border-[#fc5a03] text-white hover:bg-white hover:text-[#fc5a03] hover:border-[#fc5a03] px-14">
                Submit
              </button>
            </div>
          </div>

          <div className="flex-1">
            <img className="w-full" src={contact} alt="" />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-20 mt-16">
          <div className="flex-1">
            <img className="w-full" src={contact1} alt="" />
          </div>

          <div className="border rounded-xl p-14 flex-1">
            <div>
              <h2 className="text-3xl font-bold">Office Address</h2>
              <hr className="my-3 w-1/3" />
              <p className="text-lg">Sylhet Sadar, Sylhet Bangladesh</p>
            </div>

            <div className="my-8">
              <h2 className="text-3xl font-bold">Phone Number</h2>
              <hr className="my-3 w-1/3" />
              <p className="text-lg">+880XXXXXXXXXX</p>
              <p className="text-lg">+880XXXXXXXXXX</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">Web Address</h2>
              <hr className="my-3 w-1/3" />
              <p className="text-lg">info@example.com</p>
              <p className="text-lg">www.example.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.05970633717!2d91.86103560000002!3d24.899986149999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1697648860464!5m2!1sen!2sbd"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
