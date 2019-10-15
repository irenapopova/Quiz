import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar2 from '../components/globalComponents/Navbar2';
import Footer2 from '../components/globalComponents/Footer2';
import 'tachyons';

import SmallCard from '../components/SmallCard';
import BigCard from '../components/BigCard';

class AboutMe extends Component {
  state = { hideInfo: true }; // component state
  
  onReadMoreClick = () => {
    this.setState({ hideInfo: false }); // update state and show more info
  }; 

onBackClick = () => {
  this.setState({ hideInfo: true }); 
}

  render() {
  return (
    <div>
      <Navbar2 />
      <main className="mainSize">
        <div id="AboutMe">
          <div className="AboutMeCard">
            <section className="tc grow dib f3-ns no-underline black-90 pa4" style={{ display: 'flex' }}>
            {this.state.hideInfo ? <SmallCard onReadMoreClick={this.onReadMoreClick}/> : null}
              <div style={{ width: 300 }}/>
              {this.state.hideInfo ? null : <BigCard onBackClick={this.onBackClick}/>}      
              </section>
          </div>
        </div>
      </main>
      <Footer2 />
    </div>
  );
  }
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AboutMe;
