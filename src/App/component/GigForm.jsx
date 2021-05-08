import React, { useState } from 'react'
import PublishIcon from '@material-ui/icons/Publish';
import axios from 'axios'
function GigForm() {
    const [Title,setTitle]=useState("")
    const [
        Description,setdescription]=useState("")
    const [file,setFile]=useState([])
    const [Role,setRole]=useState("")
   
    const HandleSubmit=(e)=>{
        const FilesObj=document.querySelector(".gig-file-input").files
 
        const FilesArray=[...FilesObj]

        console.log(FilesArray)
        e.preventDefault()
        let formdata=new FormData()
        formdata.append("title",Title)
        formdata.append("description",Description)
        formdata.append("role",Role)
        formdata.append("user","60967401a1db0d21e05494e7")
        formdata.append("image",FilesObj)

        axios.post("http://localhost:4000/api/gig/create",formdata,{
            headers: {
                  "Content-Type": "multipart/form-data",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOTY3NDAxYTFkYjBkMjFlMDU0OTRlNyIsImlhdCI6MTYyMDQ3Mjg3MSwiZXhwIjoxNjIxMzM2ODcxfQ.W-UJQsZRlL8CzYYbQBEpduyRulXljVl129LGWuHCkSw`
            }
        }).then(res=>console.log(res)).catch(err=>console.log(err))
        // http://localhost:4000/api/gisg/create
    }
    return (
        <form className="GigForm"  method="post" encType="multipart/form-data">
            <div className="input-wrapper">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="description">Description</label>
                {/* <text type="text" id="description"/> */}
                <textarea name="" id="description" cols="30" rows="10" onChange={e=>setdescription(e.target.value)}></textarea>
            </div>
            <div className="select-wrapper">
                <label htmlFor="role">Role</label>
                <select name="role-select" id="" onChange={e=>setRole(e.target.value)}>
                    <option value="provider">Provider</option>
                    <option value="receiver">Receiver</option>
                </select>
            </div>
            <div className="input-wrapper file-input-wrapper">
                <label htmlFor="file-input">
                    <PublishIcon/>
                    <p>Image Upload</p>
                </label>
                <input type="file" id="file-input" className="gig-file-input" multiple onChange={e=>setFile(e.target.files)} />
            </div>

            <input type="submit" value="Create Gig" class="gig-create-button" onClick={HandleSubmit}/>
        </form>
    )
}

export default GigForm
