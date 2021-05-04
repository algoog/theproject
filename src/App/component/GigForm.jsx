import React from 'react'
import PublishIcon from '@material-ui/icons/Publish';
function GigForm() {
    return (
        <form className="GigForm" >
            <div className="input-wrapper">
                <label htmlFor="title">Title</label>
                <input type="text" id="title"/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="description">Description</label>
                {/* <text type="text" id="description"/> */}
                <textarea name="" id="description" cols="30" rows="10"></textarea>
            </div>
            <div className="input-wrapper file-input-wrapper">
                <label htmlFor="file-input">
                    <PublishIcon/>
                    <p>Image Upload</p>
                </label>
                <input type="file" id="file-input" className="gig-file-input"/>
            </div>

            <input type="submit" value="Create Gig" class="gig-create-button"/>
        </form>
    )
}

export default GigForm
