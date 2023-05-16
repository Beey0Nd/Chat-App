import { useState } from "react";
import ChatHistory from "../ChatHistory/ChatHistory";
import ChatsList from "../ChatsList/ChatsList";
import NewChatMessage from "../NewChatMessage/NewChatMessage";
import classes from "./Chat.module.css"

function Chat({ credentials, setCredentials, recipient, setRecipient }) {
    const [messages, setMessages] = useState([])
    return (
        <section className={"chat " + classes.chat}>
            <div>
                <ChangeButton setCredentials={setCredentials} />
                <NewRecipientButton setRecipient={setRecipient} />
                <ChatsList setRecipient={setRecipient} />
            </div>
            <div>
                <div>
                    <h1>{`Чат с ${recipient}`}</h1>
                </div>
                <ChatHistory
                    messages={messages}
                    setMessages={setMessages}
                    recipient={recipient}
                    credentials={credentials}
                />
                <NewChatMessage
                    setMessages={setMessages}
                    recipient={recipient}
                    credentials={credentials}
                />
            </div>
        </section>
    );
}

function ChangeButton({ setCredentials }) {

    const handleClick = () => {
        localStorage.removeItem("credentials")
        setCredentials(null)
    }

    return <button onClick={handleClick}>Изменить данные пользователя</button>
}

function NewRecipientButton({ setRecipient }) {

    const handleClick = () => {
        setRecipient(null)
    }

    return <button onClick={handleClick}>Создать новый чат</button>
}

export default Chat;