import { useRef } from "react";
import classes from "./Authorization.module.css"

function Authorization({ setCredentials }) {
    const idInstanceRef = useRef();
    const apiTokenRef = useRef();

    function submitCredentials(e) {
        e.preventDefault()
        const _idInstance = idInstanceRef.current.value;
        const _apiTokenInstance = apiTokenRef.current.value;

        localStorage.setItem("credentials", JSON.stringify({
            _idInstance,
            _apiTokenInstance
        }))

        setCredentials({ _idInstance, _apiTokenInstance })
    }

    return (
        <section className={"authorization " + classes.authorization}>
            <form onSubmit={submitCredentials}>
                <div>
                    <label htmlFor="idInstance">Введите idInstance</label>
                    <input ref={idInstanceRef} type="text" id="idInstance" />
                </div>
                <div>
                    <label htmlFor="apiTokenInstance">Введите apiTokenInstance</label>
                    <input ref={apiTokenRef} type="text" id="apiTokenInstance" />
                </div>
                <button type="submit">Авторизоваться</button>
            </form>
        </section>
    );
}

export default Authorization;