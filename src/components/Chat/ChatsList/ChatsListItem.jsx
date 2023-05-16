function ChatsListItem({ tel, setRecipient }) {

    const handleClick = () => {
        setRecipient(tel)
    }

    return (
        <li onClick={handleClick}>
            Контакт {tel}
        </li>
    );
}

export default ChatsListItem;