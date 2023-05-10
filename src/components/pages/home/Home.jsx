import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./home.scss";

const home = () => {
  return (
    <>
      <div className="page_wrapper">
        <div className="container">
          <div className="home_content">
            <div className="home_image"></div>

            <div className="home_title">
              <h3>
                Hi! I Am Jhusup Toktosunov{" "}
                <span className="fullstack">
                  <a href="https://www.google.com/search?q=fullstack+is&sxsrf=APwXEdeH7BGmAgzdOE2nCNENHr0qvAJZ7w%3A1683709672459&ei=6F5bZPjNG5WTwPAPgOKQmAI&ved=0ahUKEwj44bmns-r-AhWVCRAIHQAxBCMQ4dUDCA8&uact=5&oq=fullstack+is&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQDRCABDIGCAAQFhAeMggIABAWEB4QDzIGCAAQFhAeMgYIABAWEB4yCAgAEBYQHhAKMgYIABAWEB4yBggAEBYQHjIICAAQFhAeEAoyBggAEBYQHjoKCAAQigUQsAMQQzoMCAAQigUQsAMQChBDOgUIABCABDoICAAQgAQQywE6CggAEIAEEBQQhwI6CAguEIAEEMsBOgoIABCABBAKEMsBSgQIQRgAUPIFWN4QYIUSaAFwAXgAgAG4AYgB-wOSAQMwLjOYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp">
                    FullStack
                  </a>
                </span>{" "}
                <br />
                And I
                <span className="text_animation">
                  <Typewriter
                    words={[" develop", " design", " create"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={100}
                    delaySpeed={1000}
                  />
                </span>
                user-friendly products.
              </h3>
            </div>
          </div>
          <div className="box_container">
            <div className="box_title">
              <div className="photo">
                <img
                  src="https://www.pngmart.com/files/13/Killua-Zoldyck-PNG-Image.png"
                  alt=""
                />
              </div>
              <div className="title">
                <h3>Hello World</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Repellendus ipsa deserunt impedit sit in culpa odio incidunt{" "}
                  <br />
                  nobis tempore natus a assumenda corrupti iusto, veritatis{" "}
                  <br />
                  tempora non? Accusamus, deleniti ipsa!
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Repellendus ipsa deserunt impedit sit in culpa odio incidunt{" "}
                  <br />
                  nobis tempore natus a assumenda corrupti iusto, veritatis{" "}
                  <br />
                  tempora non? Accusamus, deleniti ipsa!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;