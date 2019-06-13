import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import Axios from 'axios';

const style = theme => ({
  modal: {
    top: `${50}%`,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: '60%',
    outline: 'none',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4)
  }
});

class ContactModal extends Component {
  state = {
    open: false,
    sent: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getModalStyle = () => {
    return {
      position: `absolute`,
      top: `${45}%`,
      left: `${50}%`,
      transform: `translate(-${50}%, -${50}%)`
    };
  };

  formSubmit = e => {
    e.preventDefault(); // prevents page reload

    const { firstName, lastName, email, subject, message } = this.state;

    // data to be send
    const data = {
      firstName,
      lastName,
      email,
      subject,
      message
    };

    // post to node.js server
    Axios.post('/mail', data)
      .then(res => {
        this.setState({ sent: true, errors: res.data.errors });
      })
      .catch(() => {});
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen} size="small" fullWidth>
          Contact me
        </Button>
        <Modal
          className={classes.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <div style={this.getModalStyle()} className={classes.paper}>
            <Typography variant="h6">Contact me</Typography>
            <Typography variant="subtitle2">I will respond asap</Typography>
            <form onSubmit={e => this.formSubmit(e)}>
              <TextField
                id="filled-email-input"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={e => this.handleChange(e)}
              />

              <TextField
                id="filled-email-input"
                className={classes.textField2}
                label="First name"
                type="text"
                name="firstName"
                margin="normal"
                variant="outlined"
                onChange={e => this.handleChange(e)}
              />
              <TextField
                id="filled-email-input"
                className={classes.textField}
                label="Last name"
                type="text"
                name="lastName"
                margin="normal"
                variant="outlined"
                onChange={e => this.handleChange(e)}
              />

              <TextField
                id="filled-email-input"
                label="Subject"
                type="text"
                name="subject"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={e => this.handleChange(e)}
              />

              <TextField
                id="filled-email-input"
                label="Message"
                type="text"
                name="message"
                margin="normal"
                variant="outlined"
                rows={6}
                fullWidth
                multiline
                onChange={e => this.handleChange(e)}
              />

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="small"
                className={classes.button}
              >
                <SendIcon />
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(style)(ContactModal);
