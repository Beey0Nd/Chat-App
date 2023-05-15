import { setupCredentials } from "../../api/api";
import ChatHistory from "./ChatHistory/ChatHistory";
import ChatsList from "./ChatsList/ChatsList";
import NewChatMessage from "./NewChatMessage/NewChatMessage";

function Chat({ credentials, recipient, setRecipient }) {
    const { _idInstance, _apiTokenInstance } = credentials
    
    const useAPI = setupCredentials(_idInstance, _apiTokenInstance);
    const { getChatHistory } = useAPI(recipient);

    return (
        <div className="chat">
            <button onClick={getChatHistory}>Get Chats</button>
            <ChatsList setRecipient={setRecipient}/>
            <ChatHistory recipient={recipient} credentials={credentials}/>
            <NewChatMessage recipient={recipient} credentials={credentials} />
        </div>
    );
}

export default Chat;