import Authorization from '../Authorization/Authorization';
import Chat from '../Chat/Chat';
import { useState } from 'react';
import Recipient from '../Recipient/Recipient';

function App() {
    const [credentials, setCredentials] = useState(
        JSON.parse(localStorage.getItem("credentials"))
    )
    const [recipient, setRecipient] = useState();
    
    if (!credentials) {
        return <Authorization setCredentials={setCredentials}/>
    }

    if(!recipient) {
        return <Recipient setRecipient={setRecipient}/>
    }

    return (
        <div className="App">
            <Chat credentials={credentials} recipient={recipient} setRecipient={setRecipient}/>
        </div>
    );
}

export default App;
