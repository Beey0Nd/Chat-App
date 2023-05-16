import classes from "./ChatHistoryItem.module.css"

function ChatHistoryItem({ message, type }) {
    return (
        <li className={`message ${type === "incoming" ? classes.incoming : classes.outgoing}`}>
            {message}
        </li>
    );
}

export default ChatHistoryItem;