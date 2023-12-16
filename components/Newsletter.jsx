
import { useState } from 'react';
import jsonp from 'jsonp';
const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

     if (name === 'FNAME' ) {
        const letterRegex = /^[A-Za-z\s]+$/;
        if (!value.match(letterRegex) && value !== '') {
          return;
        }
      }

      setName(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'https://chemotronix.us21.list-manage.com/subscribe/post-json?u=82d230ec4c16d214f3f9d2d45&amp;id=d38ba1704e&amp;f_id=00b6f4e6f0';
    jsonp(`${url}&EMAIL=${email}&FNAME=${name}`, { param: 'c' }, (_, data) => {
        const { msg, result } = data
        // do something with response
        alert(msg);
    });


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
          <form onSubmit={handleSubmit} className="mr-auto">
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
                name="FNAME"
                id="mce-FNAME"
                onChange={handleInputChange}
                value={name}
                required
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
                name="EMAIL"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                id="mce-EMAIL"
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

