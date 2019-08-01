export interface User {
  [idFieldName: string]: number;
	rate: number;
}

export interface BlacklistedUser {
	id: number;
	isBlocked: boolean;
}
