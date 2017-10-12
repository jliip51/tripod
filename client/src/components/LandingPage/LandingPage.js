import React, {Component} from 'react'
import './LandingPage.scss'
import {Image, Button, Icon, Responsive, Segment} from 'semantic-ui-react'
import tripod from '../../asset/images/tripod-logo.png'
import {Link} from 'react-router';

// import Menu from '../Menu/Menu'

const LandingPage = () => (
  <div>

    <Responsive {...Responsive.onlyMobile} {...Responsive.onlyTablet} {...Responsive.onlyComputer} {...Responsive.onlyLargeScreen} {...Responsive.onlyWidescreen} as={Segment}/> {/* <Menu /> */}
    <header className='head'>
      <div className='content'>
        <h1 className='quote'>
          <img circular src={tripod}/>
          <br/>
          Take On A New Experience
          <br/>
          Let The Moment Capture You</h1>
        <h3 className='subQuote'>And See The World from Different "ANGLES"</h3>

          <Button className='login' size='large'>Login</Button>

          <Link to='/activity'><Button size='large' className='main'>Main</Button></Link>

          <Button size='large' className='signup'>Signup</Button>

      </div>

    </header>
  </div>
)

export default LandingPage
