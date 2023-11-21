
function home() {
    const history = useHistory();
    const handleClick = () =>history.push("/search")
      return (
        <div className='Home-Main'>
          <div className='Header'>
            <img src={Gmicon} alt=''/>
            </div>
            <div className='first-container'>
              <img src={image2} alt=''/>
            </div>
            <div className='podcast'>
              <img src={podcast} alt=''/>
            </div>
            <div className='icons'>
              <img src={HomeBtn} alt=''/>
              <img src={srchbtn} alt='' onClick={handleClick}/>
              <img src={librarybtn} alt=''/>
            </div>
        </div>
      
      );
    }
    
    export default Home;