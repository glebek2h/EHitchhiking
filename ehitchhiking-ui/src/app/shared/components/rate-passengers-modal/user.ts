export interface Pass {
	idPass: number;
	rate: number;
}

export interface Driver {
	idDriver: number;
	rate: number;
}

export interface BlacklistUser {
	id: number;
	isBlocked: boolean;
}
