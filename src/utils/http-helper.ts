interface HttpResponse {
    statusCode: number;
    body: any;
}

export const ok = (data: any): HttpResponse => {
    return {
        statusCode: 200,
        body: data
    }
}