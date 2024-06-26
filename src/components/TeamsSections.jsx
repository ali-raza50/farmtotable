import React from "react";
import "../Styles/teamSection.css"; // Ensure this is the correct path to your CSS file
import teamImg from "../img/teamImg1.png";
// Dummy images and replace with actual paths
import member1Image from "../img/manpic.png";
import member2Image from "../img/manpic.png";
import member3Image from "../img/manpic.png";
import supervisorImage from "../img/manpic.png";

const TeamSection = () => {
  let teamMembers = [
    {
      name: "Yellah Mehroze",
      position: "Supervisor",
      imageUrl: supervisorImage,
      description:
        "Maam Yellah Mehroze oversees our daily operations and ensures team efficiency.",
      isSupervisor: true,
    },

    {
      name: "Ali Raza",
      position: "Developer",
      imageUrl: member1Image,
      description:
        "Ali Raza is a dedicated developer passionate about crafting high-quality software solutions.",
    },
    {
      name: "Salahuddin",
      position: "Developer",
      imageUrl: member2Image,
      description:
        "Salahuddin brings creativity and innovation to every project, striving for excellence.",
    },
    {
      name: "Ahsan Sheikh",
      position: "Developer",
      imageUrl: member3Image,
      description:
        "Ahsan Sheikh is committed to delivering efficient and effective solutions with precision and expertise.",
    },
  ];
  //   teamMembers = teamMembers.sort((a, b) => b.isSupervisor - a.isSupervisor);

  return (
    <section
      className="team-section"
      style={
        {
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${teamImg})`,
        }
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2>Meet Our Team</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`col-12 col-sm-6 col-lg-${
                member.isSupervisor ? "12" : "4"
              }`}
            >
              <div className="single-team-member">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="team-member-image"
                />
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-position">{member.position}</p>
                <div className="team-description">
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
