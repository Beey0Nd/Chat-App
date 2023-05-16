import { useRef } from "react";
import { setupCredentials } from "../../../api/api";

function NewChatMessage({ setMessages, credentials, recipient }) {
    const { _idInstance, _apiTokenInstance } = credentials
    const useAPI = setupCredentials(_idInstance, _apiTokenInstance);
    const { sendMessage } = useAPI(recipient);

    const formRef = useRef();
    const messageRef = useRef();

    function submitSending(e) {
        e.preventDefault();

        const message = messageRef.current.value.trim();
        if (message) {
            setMessages(prevState => {
                return [...prevState, {
                    recipient, message, type: "outgoing"
                }]
            })
            sendMessage(message)
        }

        formRef.current.reset()
    }

    return (
        <form ref={formRef} onSubmit={submitSending}>
            <input
                ref={messageRef}
                name="message"
                placeholder='Введите сообщение'
            />
            <button type="submit">Отправить</button>
        </form>
    );
}

export default NewChatMessage;