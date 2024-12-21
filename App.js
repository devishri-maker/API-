const App = () => {
    const[username,setUsername]=useState("");
    const[selectedNav,setSelectedNav]=useState(1);
    const[profileinfo,setProfileinfo]=useState("")
    const getinformation=async() =>
    {
      const{data}=await axios.get(`https://api.github.com/users/${username}`)
      console.log(data);
      setProfileinfo(data);
    }
      return(
        <>
         <div className='app'>
          <h1>Github User Information</h1>
          <input type='text'placeholder='Enter your Profile Name:'
          value={username}onChange={(e) => setUsername(e.target.value)}/>
          <button onClick={getinformation}>Search</button>
         </div>
          <br/>
          <br/>
          <nav>
            <ul>
              <li className={selectedNav === 1 ? 'navActive' : undefined}
              onClick={() =>setSelectedNav(1)}> Login</li>
              <li className={selectedNav === 2 ? 'navActive' : undefined}
              onClick={() =>setSelectedNav(2)}>ID</li>
              <li className={selectedNav === 3 ? 'navActive' : undefined}
              onClick={() =>setSelectedNav(3)}>Type</li>
              <li className={selectedNav === 4 ? 'navActive' : undefined}
              onClick={() =>setSelectedNav(4)}>URL</li>
              <li className={selectedNav === 5 ? 'navActive' : undefined}
              onClick={() =>setSelectedNav(5)}>Received_events _url</li>
            </ul>
          </nav>
          {/* answer print */}
          <div className='app-container'>
            {selectedNav === 1 ? profileinfo!== "" ?
            <div><h3>{profileinfo.login}</h3>
            </div>:
            <h2>No data found</h2>:null}
            {selectedNav === 2 ? profileinfo!== "" ?
            <div><h3>{profileinfo.id}</h3>
            </div>:
            <h2>No data found</h2>:null}
            {selectedNav === 3 ? profileinfo!== "" ?
            <div><h3>{profileinfo.type}</h3>
            </div>:
            <h2>No data found</h2>:null}
            {selectedNav === 4 ? profileinfo!== "" ?
            <div><h3>{profileinfo.url}</h3>
            </div>:
            <h2>No data found</h2>:null}
            {selectedNav === 5 ? profileinfo !== ""?
            <div><h3>{profileinfo.received_events_url}</h3>
            </div>:
            <h2>No data found</h2>:null}
        </div>
          </>
      )
    }