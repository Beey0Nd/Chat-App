export function setupCredentials(_idInstance, _apiTokenInstance) {
    function useAPI(phoneNumber) {

        const chatId = `${phoneNumber}@c.us`

        function sendMessage(message) {
            fetch(`https://api.green-api.com/waInstance${_idInstance}/SendMessage/${_apiTokenInstance}`, {
                method: "POST",
                body: JSON.stringify({
                    chatId,
                    message
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(console.log)
            .catch(err => {
                console.log("An error occured while sending a message", err)
            })
        }

        async function getNotification() {
            const notification = await fetch(`https://api.green-api.com/waInstance${_idInstance}/ReceiveNotification/${_apiTokenInstance}`)
            .then(res => res.json())
            .catch(err => console.log('An error occurred while fetching a notification', err))

            if(notification) {
                deleteNotification(notification.receiptId)
            } 

            return notification
        }

        function deleteNotification(receiptId) {
            fetch(`https://api.green-api.com/waInstance${_idInstance}/DeleteNotification/${_apiTokenInstance}/${receiptId}`, {
                method: 'DELETE',
                redirect: 'follow'
            })
            .then(response => response.json())
            .catch(error => console.log('An error occurred while trying to delete a notification', error))
        }
        return {
            sendMessage,
            getNotification
        };
    }

    return useAPI;
}


// import whatsAppClient from "@green-api/whatsapp-api-client"; 

// Ошибка в импорте

// export function useAPI(idInstance, apiTokenInstance) {
//     const restAPI = whatsAppClient.restAPI({
//         idInstance,
//         apiTokenInstance
//     })

//     function sendMessage(message, phoneNumber) {
//         restAPI
//         .message
//         .sendMessage(`${phoneNumber}@c.us`, null, message)
//         .then(data => {
//             console.log(data)
//         })
//     }

//     return { sendMessage };
// }