import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
  const { anchorEl } = this.state;
    return(
      <div className="nav">
        <Button
          className='button'
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Link className='menu' to="/first">Game of Thrones</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link className='menu' to="/fifth">Jokes</Link>
          </MenuItem>
        </Menu>
      </div>
    )
}
}

export default Navbar;
