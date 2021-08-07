import React, {useState, useEffect} from 'react'
import Styles from "./Dashleft.module.css";
import { Button, TextField } from "@material-ui/core";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Axios from "axios"


function DashLeft() {
  const dispatch = useDispatch();

  const userid = useSelector((state) => state.regi.object_id);

  const history = useHistory();
  const [groupname, setGroupname] = useState("");
  const [qualification, setQualification] = useState("");
  const [topic, setTopic] = useState("");
  const [enr, setEnr] = useState(false);
  const [grpid, setGrpid] = useState("")
  


    const name = useSelector(state => state.regi.username)
    //console.log(name)

  const makegrp = () => {
    var pay = {
      name: groupname,
      qualification: qualification,
      topic: topic,
      limit: 50,
      admin: userid,
      members_id: [],
    };

    if(userid)
    {
      console.log(pay)
      setEnr(true); 
      Axios.post("http://localhost:5000/groups",{
        ...pay
      }).then((res) => {
          setGrpid(res.data.data._id) 
          history.push(`/group/${res.data.data._id}`)
      })
    }
    else
    { 
      setEnr(false)
    }
   
    setGroupname("");
    setQualification("");
    setTopic("");

  };

  

  return (
    <div>
      <div className={Styles.left}>
        <div className={Styles.inp}>
          <h4 style={{ marginBottom: "0px", fontWeight: "400", color: "grey" }}>
            Don't Find Your Group? Create new
          </h4>

          <div>
            <TextField
              className={Styles.logo}
              variant="outlined"
              style={{
                width: "80%",
                height: "20px",
                marginBottom: "30px",
                marginTop: "30px",
              }}
              inputProps={{ autoFocus: false }}
              label="Groupname"
              type="name"
              value={groupname}
              onChange={(e) => setGroupname(e.target.value)}
            />
          </div>

          <div>
            <TextField
              style={{
                width: "80%",
                height: "20px",
                marginBottom: "30px",
                marginTop: "40px",
              }}
              variant="outlined"
              inputProps={{ autoFocus: false }}
              label="Qualification"
              type="name"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </div>

          <div>
            <TextField
              variant="outlined"
              style={{
                width: "80%",
                height: "20px",
                marginBottom: "30px",
                marginTop: "40px",
              }}
              inputProps={{ autoFocus: false }}
              label="Topic"
              type="name"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
        </div>
        
        {(userid)?(""):(<p style={{color:"red", marginBottom:"0px"}}>Please Enroll first to make group</p>)}

        <Button
          variant="contained"
          style={{ marginTop: "40px" }}
          startIcon={<SendIcon />}
          onClick={() => makegrp()}
        >
          Make
        </Button>
      </div>
    </div>
  );
}

export default DashLeft;
