import { useRef, useState } from "react";
import { arrayToMap, mapToArray } from "../../utils";
import classes from "./Recipient.module.css"

function Recipient({ setRecipient }) {
    const [hasError, setHasError] = useState(false)
    const telRef = useRef();
    const chatsList = JSON.parse(localStorage.getItem("chatsList"))

    const handleSubmit = (e) => {
        e.preventDefault()
        setHasError(false)

        const tel = telRef.current.value.trim()

        telRef.current.value = ""

        if (!tel || tel.length < 11) {
            setHasError(true)
            return
        }

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
        <section className={"recipient " + classes.recipient}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input">{hasError ? "Проверьте правильность введенного номера" : "Введите номер телефона получателя"}</label>
                <input id="input" ref={telRef} type="tel" />
                <button type="submit">Установить получателя</button>
            </form>
        </section>
    );
}

export default Recipient;