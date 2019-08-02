export interface User {
  idPass?: number;
  idDriver?: number;
	rate: number;
}

export interface BlacklistedUser {
	id: number;
	isBlocked: boolean;
}
