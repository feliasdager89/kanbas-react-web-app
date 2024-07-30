import React, { useState } from "react";


export default function EventObject() {

    const [event, setEvent] = useState(null);
    const handleClick = (e:any)=>{
        e.target = e.target.outerHTML;
        delete e.view;
        setEvent(e)
    }

  return (
    <div>
      <h2>Event Objects</h2>
      <button onClick={(e)=> handleClick(e)}
       className="btn btn-primary"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr/>
    </div>
  )
}