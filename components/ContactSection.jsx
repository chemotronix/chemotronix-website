import React from "react";

function ContactSection() {
  return (
    <div className="bg-[#DCFFEB] min-h-[50vh] flex items-center justify-center pt-20 pb-20">
      <div className="flex items-center flex-wrap mx-auto md:w-[50%] w-[86%] justify-between">
        <div>
          <p>Looking to partner with us?</p>
          <h2 className="font-bold text-2xl lg:text-4xl">Contact Us</h2>
          <p>
          info@chemotronix.org<br/>
          </p>
        </div>
        <div className="md:w-[50%] w-[86%] ">
          <form className="mr-auto">
            <div
              style={{
                background: "rgba(220, 255, 235, 0.93)",

                border: "2px solid rgba(0, 128, 54, 0.51)",
                /* Drop Shadow */

                boxShadow: "0px 10px 20px 5px rgba(0, 0, 0, 0.02)",
                borderRadius: "10px",
              }}
              className="px-3 py-4 w-full my-6"
            >
              {" "}
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="border-none bg-transparent outline-none placeholder:text-[#928B8B] w-full"
              />
            </div>

            <div
              style={{
                background: "rgba(220, 255, 235, 0.93)",

                border: "2px solid rgba(0, 128, 54, 0.51)",
                /* Drop Shadow */

                boxShadow: "0px 10px 20px 5px rgba(0, 0, 0, 0.02)",
                borderRadius: "10px",
              }}
              className="w-full p-5"
            >
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message"
                className="border-none bg-transparent outline-none"
              ></textarea>
            </div>
            <button className="btn-primary">Contact Us</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
