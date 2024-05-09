export interface IUser {
  id?: number,
  title?: string,
  firstName: string,
  lastName: string,
  gender?: string,
  email: string,
  dateOfBirth?: string,
  registerDate?: string,
  phone?: string,
  picture: string,
  location?: ILocation
}

export interface ILocation {
  street?: string,
  city: string,
  state: string,
  country?: string,
  timezone?: string
}

export interface ApiResponse {
  data: IUser[];
  total: number;
  page: number;
  limit: number;
}
