import { useRef } from "react";
import { setupCredentials } from "../../../api/api";

function NewChatMessage({credentials, recipient}) {
    const { _idInstance, _apiTokenInstance } = credentials
    const useAPI = setupCredentials(_idInstance, _apiTokenInstance);
    const { sendMessage } = useAPI(recipient);

    const formRef = useRef();
    const messageRef = useRef();

    function submitSending(e) {
        e.preventDefault();

        const message = messageRef.current.value;
        sendMessage(message)

        formRef.current.reset()
    }

    return (
        <form ref={formRef} onSubmit={submitSending}>
            <textarea ref={messageRef} name="message" placeholder='Type your message'></textarea>
            <button type="submit">Send Message</button>
        </form>
    );
}

export default NewChatMessage;