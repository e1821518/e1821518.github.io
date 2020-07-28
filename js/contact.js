function check() {
  if (contact.mail.value != "") {
    alert("ご連絡ありがとうございます。\n"+contact.mail.value + "にてお問い合わせを承りました。");
  } else {
    alert("必須項目が入力されていません。")
  }
}
