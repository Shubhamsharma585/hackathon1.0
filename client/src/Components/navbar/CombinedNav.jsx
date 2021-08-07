import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import Styles from "./CombinedNav.module.css";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    width: "400px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border: "1px solid gray",
    justifyContent: "center",
  },
}));

function CombinedNav() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");

  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = () => {
    var pay = {
      name: fullname,
      user_name: username,
    };

    //dispatch(registering(pay))
    handleClose();
  };

  dispatch(registering(pay));
  handleClose();
}

return (
  <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <div>
            <TextField
              variant="outlined"
              style={{
                width: "80%",
                height: "15px",
                marginBottom: "30px",
                marginTop: "30px",
                marginLeft: "30px",
              }}
              inputProps={{ autoFocus: false }}
              label="Enter name"
              type="name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div>
            <TextField
              style={{
                width: "80%",
                margin: "auto",
                height: "15px",
                marginBottom: "30px",
                marginTop: "40px",
                marginLeft: "30px",
              }}
              variant="outlined"
              inputProps={{ autoFocus: false }}
              label="User name"
              type="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <Button
            variant="contained"
            style={{ margin: "auto", marginLeft: "30%", marginTop: "40px" }}
            startIcon={<SendIcon />}
            onClick={() => submit()}
          >
            Enroll
          </Button>
        </div>
      </Fade>
    </Modal>

    <div>
      <TextField
        style={{
          width: "80%",
          margin: "auto",
          height: "15px",
          marginBottom: "30px",
          marginTop: "40px",
          marginLeft: "30px",
        }}
        variant="outlined"
        inputProps={{ autoFocus: false }}
        label="User name"
        type="name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>

    <Nav handleopenform={handleOpen} />
  </div>
);

export default CombinedNav;
