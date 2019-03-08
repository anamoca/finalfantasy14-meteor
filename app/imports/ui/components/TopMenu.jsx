import React from 'react';
import { Container, Icon, Menu, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item class="square enix"><Image class="ui image item" src="https://square-enix-games.com/static/images/squareenix_logo.svg" id="logo" width="250"/></Menu.Item>
            <Menu.Item>GAMES</Menu.Item>
            <Menu.Item>NEWS</Menu.Item>
            <Menu.Item position="left">STORE</Menu.Item>
            <Menu.Item><Icon name="search" /></Menu.Item>
            <Menu.Item>JOIN</Menu.Item>
            <Menu.Item>LOG IN</Menu.Item>
          </Container>
        </Menu>
    );
  }
}