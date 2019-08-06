export interface ChatMessage {
	text: string;
	person: string;
	email: string;
	avaSrc: string;
	time?: number;
	isMy: boolean;
}
