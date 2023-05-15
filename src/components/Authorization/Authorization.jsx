import { useRef } from "react";

// const _idInstance = 1101819760
// const _apiTokenInstance = "cc7581f4fdb54744a3c3fd8c035c18d4bc356eb789504c9cb2"


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
    );
}

export default Authorization;