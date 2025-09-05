export interface SecretResponse {
    "id": string,
    "title": string,
    "Value": string,
    "createdAt": string,
    "updatedAt": string,
    "active": boolean
}

export interface PaginatedSecretResponse {
    data: SecretResponse[],
    count: number
}

// export interface AddSecretResponse {
//     "id": string,
//     "title": string,
//     "Value": string,
//     "createdAt": string,
//     "updatedAt": string,
//     "active": boolean,
//     "createdBy": {
//         "id": string,
//         "email": string,
//         "firstName": string,
//         "lastName": string
//     }
// }
