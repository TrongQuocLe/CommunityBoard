import { useState } from 'react'
import Event from "./components/Event.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 return (
    <div className="App">
      <img className="img-theme" src="https://media2.fdncms.com/saltlake/imager/u/original/2885821/usflag.jpg"></img>
      <h1>Top 10 Most Current Presidents</h1>
      <div className='events-container'>
        <Event name={"Joe Biden"} 
        image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/440px-Joe_Biden_presidential_portrait.jpg"} 
        politicalParty={"Democratic"}/>
        <Event name={"Donald Trump"}  image={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/440px-Donald_Trump_official_portrait.jpg"} politicalParty={"Republican"}/>
        <Event name={"Barack Obama"}  image={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/440px-President_Barack_Obama.jpg"} politicalParty={"Democratic"}/>
        <Event name={"George W. Bush"}  image={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/George-W-Bush.jpeg/440px-George-W-Bush.jpeg"} politicalParty={"Republican"}/>
        <Event name={"Bill Clinton"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/440px-Bill_Clinton.jpg"} politicalParty={"Democratic"}/>
        <Event name={"George H. W. Bush"}  image={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/George_H._W._Bush_presidential_portrait_%28cropped%29.jpg/440px-George_H._W._Bush_presidential_portrait_%28cropped%29.jpg"} politicalParty={"Republican"}/>
        <Event name={"Ronald Reagan"}  image={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Portrait_of_President_Reagan_1981.jpg/440px-Official_Portrait_of_President_Reagan_1981.jpg"} politicalParty={"Republican"}/>
        <Event name={"Jimmy Carter"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/JimmyCarterPortrait2.jpg/440px-JimmyCarterPortrait2.jpg"} politicalParty={"Democratic"}/>
        <Event name={"Gerald Ford"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Gerald_Ford_presidential_portrait_%28cropped%29.jpg/440px-Gerald_Ford_presidential_portrait_%28cropped%29.jpg"} politicalParty={"Republican"}/>
        <Event name={"Richard Nixon"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Richard_Nixon_presidential_portrait_%281%29.jpg/440px-Richard_Nixon_presidential_portrait_%281%29.jpg"} politicalParty={"Republican"}/>
        </div>
    </div>
  )
}

export default App
