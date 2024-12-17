import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div id="Contact">
      <div>
        <h1>
          Join Our{" "}
          <span className="introduction__span">
            <span className="introduction__spantext">
              <a
                className="con__community"
                href="https://discord.gg/t6uTBnufMf"
              >
                Community:
              </a>
            </span>
          </span>
        </h1>
      </div>

      <div>
        <p>
          As someone who is passionate about leveraging the power of artificial
          intelligence (AI) and machine learning (ML) to enhance user
          experiences and create innovative solutions, I am reaching out to you.
        </p>
        <p>
          We are looking for talented individuals with expertise in AI/ML and
          UI/UX to join our team or contribute to our open-source projects. Your
          contributions would not only help in the development and growth of
          Jaga.live and our open-source projects but also contribute to a
          community that values innovation, collaboration, and the pursuit of
          excellence in technology. If you are interested in collaborating,{" "}
          <br></br>contributing, or simply learning more about our projects,
          please do not hesitate to get in touch. We would be delighted to
          discuss potential opportunities and how you can contribute to our
          mission. Thank you for considering this invitation. We look forward to
          the possibility of working together.
        </p>
      </div>
    </div>
  );
};
