
import { useState } from 'react';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle the form submission here (e.g., send the email to your server)
    console.log('Name submitted:', name);
    console.log('Email submitted:', email);

    // You can reset the email input field after submission
    setEmail('');
    setName('');
  };

  return (
    <div className="bg-[#DCFFEB] min-h-[50vh] flex items-center pt-20 pb-20">
      <div className="flex items-center flex-wrap mx-auto md:w-[80%] w-[80%] justify-between">
        <div>
          <h2 className="font-bold text-2xl lg:text-4xl">Subscribe to our Newsletter</h2>
          <p>
          Get educational content on clean energy and carbon emissions<br/>
          </p>
        </div>
        <div className="md:w-[50%] w-[86%] ">
          <form  onSubmit={handleSubmit} className="mr-auto">
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
                onChange={(e) => setName(e.target.value)}
                value={name}
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
              className="px-3 py-4 w-full my-6"
            >
              {" "}
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                placeholder="Email"
                className="border-none bg-transparent outline-none placeholder:text-[#928B8B] w-full"
              />
            </div>
            <button className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
