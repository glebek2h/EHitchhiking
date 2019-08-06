import {ChatMessage} from '@shared/interfaces/chat-interface';

export interface Dialog {
	title: string;
	msgList: ChatMessage[];
}
