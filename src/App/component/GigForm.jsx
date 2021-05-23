import React, { useState } from "react";
import PublishIcon from "@material-ui/icons/Publish";
import {AxiosInstance} from '../../Lib/Axios/axios'
function GigForm() {
  const [Title, setTitle] = useState("");
  const [Description, setdescription] = useState("");
  const [file, setFile] = useState();
  const [Role, setRole] = useState("");
 
  const HandleSubmit = (e) => {
    e.preventDefault();
  
    let formdata = new FormData();
    formdata.append("title", Title);
    formdata.append("description", Description);
    formdata.append("role", Role);
    let User=window.sessionStorage.getItem("user_id")
    formdata.append("user", User);
    if (file) {
      for (let i = 0; i < file.length; i++) {
        formdata.append("image", file[i]);
      }
    } else {
      formdata.append("image", file);
    }
    let AuthToken = window.sessionStorage.getItem("Auth");
    AxiosInstance
      .post("gig/create", formdata, {
        headers: {
          Authorization: `Bearer ${AuthToken}`,
        },
      })
      .then((res) => {

        console.log(res)
        window.location.reload()
      })
      .catch((err) => console.log(err));
  };
  return (
    <form className="GigForm" method="post" encType="multipart/form-data">
      <div className="input-wrapper">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="description">Description</label>
        {/* <text type="text" id="description"/> */}
        <textarea
          name=""
          id="description"
          cols="30"
          rows="10"
          onChange={(e) => setdescription(e.target.value)}
        ></textarea>
      </div>
      <div className="select-wrapper">
        <label htmlFor="role">Role</label>
        <select
          name="role-select"
          id=""
          onChange={(e) => setRole(e.target.value)}
        >
          <option select>Select</option>
          <option value="provider">Provider</option>
          <option value="receiver">Receiver</option>
        </select>
      </div>
      <div className="input-wrapper file-input-wrapper">
        <label htmlFor="file-input">
          <PublishIcon />
          <p>Image Upload</p>
        </label>
        <input
          type="file"
          id="file-input"
          className="gig-file-input"
          multiple
          onChange={(e) => setFile(e.target.files)}
        />
      </div>

      <input
        type="submit"
        value="Create Gig"
        class="gig-create-button"
        onClick={HandleSubmit}
      />
    </form>
  );
}

export default GigForm;
