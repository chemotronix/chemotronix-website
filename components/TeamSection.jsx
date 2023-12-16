import { AnimatePresence } from "framer-motion";
import React from "react";
import LetterCircle from "./LetterCircle";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
function TeamSection({ teamRef }) {
  const [details, setDetails] = React.useState(
    <AnimatePresence>
      <motion.span exit={{ opacity: 0 }} className="text-[17px] lg:text-[20px]">
        Scroll over your cursor on later to see the magic!
      </motion.span>
    </AnimatePresence>
  );

  return (
    <div className="min-h-[50vh] pt-20 pb-20" ref={teamRef} id="#team">
      <div className="flex items-center justify-center my-auto">
        <div className="flex items-center flex-wrap w-[80%] mx-auto justify-between mt-auto">
          <div className=" max-w-lg transition-all duration-500">
            <p className="text-[25px] lg:w-[400px]">{details}</p>
          </div>
          <div className="flex justify-center flex-wrap max-w-xl mt-10">
          
            <LetterCircle
              image={"team/peace.jpg"}
              letter="P"
              color={"#0FE76A"}
              hover={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.4, type: "spring" }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-1xl font-[400]">
                          Peace Bello
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Energy Innovator (Team Lead)
                        </span>
                        <div className='flex flex-row py-5'>
                        <a href="https://www.linkedin.com/company/chemotronix/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: 30, color: "#0b41ad", marginRight: 10}}></FontAwesomeIcon></a>
                        <a href="https://github.com/chemotronix/Chemotronix"><FontAwesomeIcon icon={faGithub} style={{fontSize: 30, color: "#000000", marginRight: 10}} /></a>
                        <a href="https://twitter.com/chemotronix"><FontAwesomeIcon icon={faTwitter} style={{fontSize: 30, color: "#3875f0"}}></FontAwesomeIcon></a>
                        </div>
                      </span>
                      
                    </motion.span>
                  </AnimatePresence>
                )
              }
              hoverOut={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Peace Bello
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Energy Innovator (Team Lead)
                        </span>
                        <div className='flex flex-row py-5'>
                        <a href="https://www.linkedin.com/company/chemotronix/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: 30, color: "#0b41ad", marginRight: 10}}></FontAwesomeIcon></a>
                        <a href="https://github.com/chemotronix/Chemotronix"><FontAwesomeIcon icon={faGithub} style={{fontSize: 30, color: "#000000", marginRight: 10}} /></a>
                        <a href="https://twitter.com/chemotronix"><FontAwesomeIcon icon={faTwitter} style={{fontSize: 30, color: "#3875f0"}}></FontAwesomeIcon></a>
                        </div>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
            />
            <LetterCircle
             image={"team/victor.jpg"}
              letter="V"
              color={"#FEF025"}
              hover={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.4, type: "spring" }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Victor Olufemi
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Hardware Engineer
                        </span>
                        <div className='flex flex-row py-5'>
                        <a href="https://www.linkedin.com/company/chemotronix/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: 30, color: "#0b41ad", marginRight: 10}}></FontAwesomeIcon></a>
                        <a href="https://github.com/chemotronix/Chemotronix"><FontAwesomeIcon icon={faGithub} style={{fontSize: 30, color: "#000000", marginRight: 10}} /></a>
                        <a href="https://twitter.com/chemotronix"><FontAwesomeIcon icon={faTwitter} style={{fontSize: 30, color: "#3875f0"}}></FontAwesomeIcon></a>
                        </div>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
              hoverOut={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Victor Olufemi
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Hardware Engineer
                        </span>
                        <div className='flex flex-row py-5'>
                        <a href="https://www.linkedin.com/company/chemotronix/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: 30, color: "#0b41ad", marginRight: 10}}></FontAwesomeIcon></a>
                        <a href="https://github.com/chemotronix/Chemotronix"><FontAwesomeIcon icon={faGithub} style={{fontSize: 30, color: "#000000", marginRight: 10}} /></a>
                        <a href="https://twitter.com/chemotronix"><FontAwesomeIcon icon={faTwitter} style={{fontSize: 30, color: "#3875f0"}}></FontAwesomeIcon></a>
                        </div>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
            />
            <LetterCircle
              image={"team/iyanu.jpg"}
              letter="B"
              color={"#029CFF"}
              hover={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.4, type: "spring" }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Boluwatife Jemiriye
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          UI/UX designer
                        </span>
                        <div className='flex flex-row py-5'>
                        <a href="https://www.linkedin.com/company/chemotronix/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: 30, color: "#0b41ad", marginRight: 10}}></FontAwesomeIcon></a>
                        <a href="https://github.com/chemotronix/Chemotronix"><FontAwesomeIcon icon={faGithub} style={{fontSize: 30, color: "#000000", marginRight: 10}} /></a>
                        <a href="https://twitter.com/chemotronix"><FontAwesomeIcon icon={faTwitter} style={{fontSize: 30, color: "#3875f0"}}></FontAwesomeIcon></a>
                        </div>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
              hoverOut={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Boluwatife Jemiriye
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          UI/UX designer
                        </span>
                        <div className='flex flex-row py-5'>
                        <a href="https://www.linkedin.com/company/chemotronix/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: 30, color: "#0b41ad", marginRight: 10}}></FontAwesomeIcon></a>
                        <a href="https://github.com/chemotronix/Chemotronix"><FontAwesomeIcon icon={faGithub} style={{fontSize: 30, color: "#000000", marginRight: 10}} /></a>
                        <a href="https://twitter.com/chemotronix"><FontAwesomeIcon icon={faTwitter} style={{fontSize: 30, color: "#3875f0"}}></FontAwesomeIcon></a>
                        </div>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
            />
            <LetterCircle
              image={"team/grace.jpg"}
              letter="G"
              color={"#FEF025"}
              hover={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.4, type: "spring" }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Grace Omojola
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Data scientist
                        </span>
                        <div className='flex flex-row py-5'>
                        <a href="https://www.linkedin.com/company/chemotronix/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: 30, color: "#0b41ad", marginRight: 10}}></FontAwesomeIcon></a>
                        <a href="https://github.com/chemotronix/Chemotronix"><FontAwesomeIcon icon={faGithub} style={{fontSize: 30, color: "#000000", marginRight: 10}} /></a>
                        <a href="https://twitter.com/chemotronix"><FontAwesomeIcon icon={faTwitter} style={{fontSize: 30, color: "#3875f0"}}></FontAwesomeIcon></a>
                        </div>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
              hoverOut={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Grace Omojola
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Data scientist
                        </span>
                        <div className='flex flex-row py-5'>
                        <a href="https://www.linkedin.com/company/chemotronix/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: 30, color: "#0b41ad", marginRight: 10}}></FontAwesomeIcon></a>
                        <a href="https://github.com/chemotronix/Chemotronix"><FontAwesomeIcon icon={faGithub} style={{fontSize: 30, color: "#000000", marginRight: 10}} /></a>
                        <a href="https://twitter.com/chemotronix"><FontAwesomeIcon icon={faTwitter} style={{fontSize: 30, color: "#3875f0"}}></FontAwesomeIcon></a>
                        </div>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
            />
          
            <LetterCircle
              image={"team/grace.jpg"}
              letter="O"
              color={"#0FE76A"}
              hover={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.4, type: "spring" }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Oreoluwa Akinola
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Blockchain developer
                        </span>
                        <div className='flex flex-row py-5'>
                        <a href="https://www.linkedin.com/company/chemotronix/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: 30, color: "#0b41ad", marginRight: 10}}></FontAwesomeIcon></a>
                        <a href="https://github.com/chemotronix/Chemotronix"><FontAwesomeIcon icon={faGithub} style={{fontSize: 30, color: "#000000", marginRight: 10}} /></a>
                        <a href="https://twitter.com/chemotronix"><FontAwesomeIcon icon={faTwitter} style={{fontSize: 30, color: "#3875f0"}}></FontAwesomeIcon></a>
                        </div>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
              hoverOut={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Oreoluwa Akinola
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Blockchain developer
                        </span>
                        <div className='flex flex-row py-5'>
                        <a href="https://www.linkedin.com/company/chemotronix/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: 30, color: "#0b41ad", marginRight: 10}}></FontAwesomeIcon></a>
                        <a href="https://github.com/chemotronix/Chemotronix"><FontAwesomeIcon icon={faGithub} style={{fontSize: 30, color: "#000000", marginRight: 10}} /></a>
                        <a href="https://twitter.com/chemotronix"><FontAwesomeIcon icon={faTwitter} style={{fontSize: 30, color: "#3875f0"}}></FontAwesomeIcon></a>
                        </div>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
