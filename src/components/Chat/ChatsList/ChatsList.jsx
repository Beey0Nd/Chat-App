import ChatsListItem from "./ChatsListItem";

function ChatsList({ setRecipient }) {
    const chatsList = JSON.parse(localStorage.getItem("chatsList"))

    if (!chatsList) {
        return (
            <div>
                <p>Список активных чатов пуст</p>
            </div>
        )
    }

    return (
        <ul>
            {chatsList.map(chat => {
                const tel = chat[1].tel
                return (
                    <ChatsListItem key={tel}
                        tel={tel}
                        setRecipient={setRecipient}
                    />
                )
            })}
        </ul>
    );
}

export default ChatsList;