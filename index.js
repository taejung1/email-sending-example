const nodemailer = require('nodemailer')
const { id, pw, host } = require('./config.json')

const from = "누구에서 메일이 오는지 , 예:(김태정 < taejung@taejung.xyz >"
const to = "이메일을 보낼계정 아아디 , 예 : taejung@taejung.xyz"
const subject = "메일제목"
const text = "메일 내용"

async function send() {

    const account = nodemailer.createTransport({
        host: host,
        secure: true,
        auth: {
            user: id,
            pass: pw
        }
    })

    account.sendMail({ 
        from: from,
        to: to,
        subject: subject,
        text: text,  
    })

}

send().catch(console.error)
