export interface AddSecretResponse {
    "id": string,
    "title": string,
    "Value": string,
    "createdAt": string,
    "updatedAt": string,
    "active": boolean,
    "createdBy": {
        "id": string,
        "email": string,
        "firstName": string,
        "lastName": string
    }
}

export interface ApiRespone<T> {
    message: T,
    statusCode: number
}