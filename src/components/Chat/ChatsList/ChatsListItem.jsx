function ChatsListItem({tel, setRecipient}) {
    // props = {sender, lastMessage}

    const handleClick = () => {
        setRecipient(tel)
    }

    return (
        <li onClick={handleClick}>
            Абонент {tel}
        </li>
    );
}

export default ChatsListItem;