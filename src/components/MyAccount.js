import welcome from './welcome.svg';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';




const MyAccount = () => {
    return(
        <Jumbotron fluid>
            <header style={{backgroundColor: 'purple', borderBottom: '3px solid black'}}>
                {/* <div className="overlay"></div> */}
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center App-header">
                    <img src={welcome} className="App-logo" alt="welcome" />
                    <div className="w-100 text-white">
                        <h1 className="display-3">Welcome back, Claire!</h1>
                        <Button className="btn-lg text-dark" style={{width: '7em', margin: 3, backgroundColor: '#ffb1b9', border:'3px solid white', cursor: 'pointer', boxShadow: '0 10px 20px -8px rgba(0,0, 0, .7)'}} variant="primary">Sign Out</Button>
                        <Button className="btn-lg text-dark" style={{ width: '7em', margin: 3, backgroundColor: 'grey', border:'3px solid white', cursor: 'pointer',  boxShadow: '0 10px 20px -8px rgba(0,0, 0, .7)', transition: 'all 0.5s'}} variant="primary">Edit Profile</Button>
                    </div>
                    </div>
                </div>
            </header>
        </Jumbotron>
        
    )
}
export default MyAccount;