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
            }).then(console.log).catch(console.log)
        }

        async function getNotification() {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
              
            const notification = await fetch(`https://api.green-api.com/waInstance${_idInstance}/receiveNotification/${_apiTokenInstance}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error))
            if(!notification) {
                console.log("Notificaiton list is empty")
                return
            } 
            deleteNotification(notification.receiptId)
            console.log(notification);

            return notification
        }

        function deleteNotification(receiptId) {
            fetch(`https://api.green-api.com/waInstance${_idInstance}/DeleteNotification/${_apiTokenInstance}/${receiptId}`, {
                method: 'DELETE',
                redirect: 'follow'
            })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
        }

        async function getChatHistory() {
            const messages = await fetch(`https://api.green-api.com/waInstance${_idInstance}/GetChatHistory/${_apiTokenInstance}`, {
                method: "POST",
                body: JSON.stringify({
                    chatId
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                if (res.ok) {
                    return res
                } else {
                    throw new Error(res.statusText)
                }
            }).then(res => res.json()).catch(e => {
                console.log(e)
            })

            return messages;
        }

        return {
            sendMessage,
            getNotification,
            getChatHistory
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