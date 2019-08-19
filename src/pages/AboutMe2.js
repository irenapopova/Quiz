import React, { Component } from "react";
import AboutCard from "../components/AboutCards";
import Navbar2 from "../components/globalComponents/Navbar2";
import Footer2 from "../components/globalComponents/Footer2";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberName: ["Irena Popova",],
      memberPhoto: [
         "https://media.licdn.com/dms/image/C5603AQHP0vsKuSmMEQ/profile-displayphoto-shrink_200_200/0?e=1570060800&v=beta&t=zILrhUquW88J-qyV4sjnCPUdrBxPi7phYtBCcl76njQ",
        
      ],
      memberBio: ["bla", "bla", "bla"],
      memberGithub: [
        "https://github.com/irenapopova",
          
      ],
      memberLinkedin: [
        "https://www.linkedin.com/in/irenapopova",
        
        
      ]
      // TO DO : CREATE AN OBJECT WITH MEMBERS AND ALL THERE INFO INSIDE, INSTEAD OF MULTIPLE ARRAYS
    };
  }

  render() {
    return (
      <div>
        <Navbar2 />
        <main className="mainSize">
          <section id="AboutMe">
            <h1>Discover more about me...</h1>
            <div className="flexCards">
              <AboutCard
                photo={this.state.memberPhoto[0]}
                name={this.state.memberName[0]}
                bio={this.state.memberBio[0]}
                github={this.state.memberGithub[0]}
                linkedin={this.state.memberLinkedin[0]}
              />
              
              
            </div>
          </section>
        </main>
        <Footer2 />
      </div>
    );
  }
}

export default AboutMe;
