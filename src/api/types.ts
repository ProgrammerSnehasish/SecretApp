export interface ApiResponse<T> {
    message: T,
    statusCode: number
}