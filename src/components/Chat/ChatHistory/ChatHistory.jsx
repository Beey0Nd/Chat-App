import { useEffect } from "react";
import { setupCredentials } from "../../../api/api";

import ChatHistoryItem from "./ChatHistoryItem";

function ChatHistory({ credentials, recipient, messages, setMessages }) {
    const { _idInstance, _apiTokenInstance } = credentials
    const useAPI = setupCredentials(_idInstance, _apiTokenInstance)
    const { getNotification } = useAPI(recipient)

    useEffect(() => {

        const intervalId = setInterval(updateMessageList, 5000)

        return () => {
            clearInterval(intervalId)
        }
    }, [recipient])

    function updateMessageList() {
        getNotification().then(notification => {
            if (notification) {
                const message = notification.body.messageData?.textMessageData?.textMessage

                if (message) {
                    setMessages(prevState => [
                        ...prevState,
                        { recipient, message, type: "incoming" }
                    ])
                }
            }
        })
    }


    return (
        <ul>
            {messages.map((message, i) => {
                if(recipient === message.recipient) {
                    return  (
                        <ChatHistoryItem
                            key={message.message + i}
                            message={message.message}
                            type={message.type}
                        />
                    )
                }
            })}
        </ul>
    );
}

export default ChatHistory;