import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './style.scss';

function ContactsBar(props) {
  return (
    <div className="contactsBar">
      <AppBar position="fixed" className="appBar">
        <Toolbar className="toolbar">
          <Typography variant="h6" color="inherit" noWrap>
            Contacts List
          </Typography>
          <Paper className="searchWrapper">
            <InputBase
              placeholder="Search…"
            />
            <SearchIcon />
          </Paper>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ContactsBar;