export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br></br>
          {/* Complete on your own */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select>
                <option value="actual value 1">ASSINGMENTS</option>
                <option value="actual value 2">Display Text 2</option>
                <option value="actual value 3">Display Text 3</option>
                </select>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select>
                <option value="actual value 1">Percentage</option>
                <option value="actual value 2">Points</option>
                <option value="actual value 3">Letter</option>
                </select>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select>
                <option value="actual value 1">Online</option>
                <option value="actual value 2">Person</option>
            
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Online Entry Options: </label>
              <br></br>
            </td>
            <td>
            <form>
                <label htmlFor="text-entry">Text Entry</label><input type="checkbox" id="wd-text-entry" value="text-entry"/>
                <br></br>
                <label htmlFor="website-url">Website URL</label><input type="checkbox" id="wd-website-url" value="website-url"/>
                <br></br>
                <label htmlFor="media-recordings">Media Recordings</label><input type="checkbox" id="wd-media-recordings" value="media-recordings"/>
                <br></br>
                <label htmlFor="student-annotations">Student Annotations:</label><input type="checkbox" id="wd-student-anotations" value="student-anotations"/>
                <br></br>
                <label htmlFor="file-uploads">File Uploads</label><input type="checkbox" id="file-uploads" value="file-uploads"/>

            </form>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Assign to</label>
            </td>
            <td>
              <input id="wd-assing-to" value={"Everyone"} />
              <br></br>
              <br></br>
              Due
              <br></br>
              <label htmlFor="wd-due-date">  </label>
                <input type="date"
                    id="wd-due-date"
                    value="2000-01-21"/><br/>
                <br></br>
                Available From 
            
                <br></br>
                <label htmlFor="wd-due-date">  </label>
                <input type="date"
                    id="wd-available-from"
                    value="2024-05-06"/>
                <br></br>
                Until
                <br></br>
                <input type="date"
                    id="wd-available-until"
                    value="2024-05-20"/>
            </td>
          </tr>
          <br></br>
        </table>
        <hr></hr>
        <button>Cancel</button>{" "}
        <button>Save</button>{" "}
      </div>
  );}
  
  