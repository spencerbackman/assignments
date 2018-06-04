import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './nav.css'

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
      <div>
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
            <Link className='one' to="/first">Jon</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link className='two' to="/second">winterfell</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link className='four' to="/Fourth">Book</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link className='three' to="/third">Dogs</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link className='five' to="/fifth">Joke</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
          <Link className='six' to="/sixth">Dad Joke </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
          <Link className='seven' to="/Seven">Ron Quotes </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
          <Link className='eight' to="/Eight">Sun today </Link>
          </MenuItem>
        </Menu>
      </div>
    )
}
}

export default Navbar;
