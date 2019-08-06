import {ChatMessage} from '@shared/interfaces/chat-interface';

export interface Dialog {
	id: number;
	title: string;
	msgList: ChatMessage[];
}
