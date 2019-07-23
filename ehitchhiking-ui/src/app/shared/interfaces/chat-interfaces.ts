interface ChatMessage {
  text: string;
  person: string;
  avaSrc: string;
  time?: number;
  isMy: boolean;
}

interface Dialog {
  title: string;
  lastMsg: ChatMessage;
}
