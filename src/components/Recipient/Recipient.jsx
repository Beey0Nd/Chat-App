import { useRef } from "react";
import { arrayToMap, mapToArray } from "../../utils";

function Recipient({ setRecipient }) {
    const telRef = useRef();
    const chatsList = JSON.parse(localStorage.getItem("chatsList"))

    const handleSubmit = (e) => {
        e.preventDefault()
        const tel = telRef.current.value

        if (chatsList) {
            const chatListMap = arrayToMap(chatsList)
            chatListMap.set(tel, { tel })

            const chatListArray = mapToArray(chatListMap)
            localStorage.setItem("chatsList", JSON.stringify(chatListArray))
        } else {
            const chatsListMap = new Map()
            chatsListMap.set(tel, { tel })
            localStorage.setItem("chatsList", JSON.stringify(
                mapToArray(chatsListMap)
            ))
        }

        setRecipient(tel)
    }


    return (
        <form onSubmit={handleSubmit} className="recipient">
            <input ref={telRef} type="tel" />
            <button type="submit">Установить получателя</button>
        </form>
    );
}

export default Recipient;