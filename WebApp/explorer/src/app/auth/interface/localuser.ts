export interface LocalUser {
    email: string
    exp: Date
    iat: Date
    id: number
    isAdmin: boolean
    name: string
    surname: string
    tokenType: string
    username: string
}
