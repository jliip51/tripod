import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import './Menu.css';

export default class MenuExampleLabeledIcons extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing>
        <Menu.Item name='image' active={activeItem === 'image'} onClick={this.handleItemClick}>
          <img src='http://www.stickpng.com/assets/images/584abe602912007028bd932f.png' />
          Camera
        </Menu.Item>

        <Menu.Item name='camera' active={activeItem === 'camera'} onClick={this.handleItemClick}>
          <img src='http://www.workingatmcmaster.ca/med/photo/large/gallery-icon-1-627.png' />
          Images
        </Menu.Item>

        <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
          <img src='https://maxcdn.icons8.com/Share/icon/Security//facial_recognition_scan1600.png' />
          Search
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSP4CLMcDvMhEGhbG_a9f0gwmdFvO3oXMK9JntkLPNoVyP_SSs' />
            Home
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}>
            <img src='https://www.shareicon.net/download/2015/10/17/657490_arrow_512x512.png' />
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}