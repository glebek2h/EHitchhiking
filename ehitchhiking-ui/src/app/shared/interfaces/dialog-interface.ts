import {ChatMessage} from '@shared/interfaces/chat-interface';

export interface Dialog {
	id: number;
	startPoint: string;
	endPoint: string;
	msgList: ChatMessage[];
}
