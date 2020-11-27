declare module 'lewdorder' {
    import { IncomingHttpHeaders, RequestOptions } from "http";

    /**
    * random lewd fgo image
    * @returns {Promise<string>} promise
    */
    function lewd(): Promise<String>;

    /**
    * Creates a GET request
    * @returns {Promise<{ method: "GET", reqOptions: RequestOptions, raw: string, body: any,status: number, headers: IncomingHttpHeaders }>} A Promise containing response
    * @private Internal Function
    */
    function get(url: string, options?: RequestOptions): Promise<{ method: "GET", reqOptions: RequestOptions, raw: string, body: any,status: number, headers: IncomingHttpHeaders }>;

    export default Object.assign(lewd, {get})
}