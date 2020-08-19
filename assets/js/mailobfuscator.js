const mail_coded = "p5WXLv3Y@lybwSXA.Vyw"
const mail_key = "vudUoR3mBzKEhn2ca0GDWt46yO1wkiJelLPVSNHC9brsjxFMpXZ5A7fT8QIqgY"
const mail_shift = mail_coded.length

let mail_link = ""
let mail_ltr = ""

for (let i = 0; i < mail_coded.length; i++) {
  if (mail_key.indexOf(mail_coded.charAt(i)) == -1) {
    mail_ltr = mail_coded.charAt(i)
    mail_link += (ltr)
  }
  else {     
    mail_ltr = (mail_key.indexOf(mail_coded.charAt(i)) - mail_shift + mail_key.length) % mail_key.length
    mail_link += (mail_key.charAt(ltr))
  }
}
