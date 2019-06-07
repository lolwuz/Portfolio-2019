import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { withStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";

const style  = theme => ({
  modal: {
    top: `${50}%`,
    alignItems:'center',
    justifyContent:'center'
  },
  paper: {
    width: "60%",
    outline: "none",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
  },
});

class ContactModal extends Component {
  state = {
    open: false
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
      transform: `translate(-${50}%, -${50}%)`,
    };
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen} size="small" fullWidth>Contact me</Button>
        <Modal
          className={ classes.modal }
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <div style={this.getModalStyle()} className={classes.paper}>
          <Typography variant="h6">Contact me</Typography>
            <Typography variant="subtitle2">I will respond asap</Typography>
            <TextField
              id="filled-email-input"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="filled-email-input"
              className={classes.textField2}
              label="First name"
              type="text"
              name="first_name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="filled-email-input"
              className={classes.textField}
              label="Last name"
              type="text"
              name="last_name"
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="filled-email-input"
              label="Subject"
              type="text"
              name="subject"
              variant="outlined"
              fullWidth
              margin="normal"
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
            />

            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.button}
            >
              <SendIcon />
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(style)(ContactModal);
