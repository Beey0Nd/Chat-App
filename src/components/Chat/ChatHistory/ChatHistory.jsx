import { useEffect, useState } from "react";
import { setupCredentials } from "../../../api/api";
import ChatHistoryItem from "./ChatHistoryItem";

function ChatHistory({ credentials, recipient }) {
    const [messages, setMessages] = useState([]);
    const { _idInstance, _apiTokenInstance } = credentials
    const useAPI = setupCredentials(_idInstance, _apiTokenInstance);
    const { /*getChatHistory, */getNotification } = useAPI(recipient);

    console.log(messages)

    useEffect(() => {
        setMessages(() => {
            const updateNotificationList = () => {
    
                const state = []
    
                while(true) {
                    let newNotification;

                    getNotification().then(not => {
                        newNotification = not;
                    })

                    if(!newNotification) {
                        break
                    }
                    state.push(newNotification)
                }

                return state
            }
            return updateNotificationList()
        })
        // getChatHistory().then(messages => {
        //     if (messages) {
        //         const revMessages = messages.reverse()
        //         setMessages(revMessages)
        //     }
        // }).then(() => getNotification())
    }, [recipient])

    if (!messages || !messages.length) {
        return (
            <div>
                <p>Список сообщений пуст</p>
            </div>
        )
    }
    console.log(messages);
    return (
        <div>
            <button onClick={getNotification}>get message</button>
            {/* {messages.length && messages.map(message => (
                <ChatHistoryItem
                    key={message.idMessage}
                    textMessage={message.textMessage}
                />
            ))} */}
        </div>
    );
}

export default ChatHistory;