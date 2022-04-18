let form = document.querySelector("#form");

let bot = {
    token: '5399290456:AAG1-HmseAQgqpIbKJ__hsvSDOt872zpjhI',
    chatID: '-1001479918154',
}

form.addEventListener("submit", e=> {
    e.preventDefault();

    let message1 = document.querySelector("#aa");
    let message2 = document.querySelector("#ss");


    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}&text=${message1.value+message2.value}`, {
        method: "POST"
    })
    .then(success => {
        alert("Message send successfully!")
    }, error => {
        alert("Message not send!")
        console.log(error);
    })
})




// const bot = new Bot("5399290456:AAG1-HmseAQgqpIbKJ__hsvSDOt872zpjhI", -1001479918154)

// document.getElementById("form")
// .addEventListener("submit", e => {
//     e.preventDefault();

//     const text1 = document.getElementById("some_message1").value;
//     const text2 = document.getElementById("some_message2").value;


//     bot,sendMessage(text1, text2)
//     .then(res => {
//         console.log(res);
//     })
// })

