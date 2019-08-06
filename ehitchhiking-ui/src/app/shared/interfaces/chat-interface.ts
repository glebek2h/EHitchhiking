export interface ChatMessage {
	text: string;
	person: string;
	avaSrc: string;
	time?: number;
	isMy: boolean;
}
