const Config = {
  URL: 'https://dummyjson.com/',
};

export type Result<Error, Response> =
  | [Error, undefined]
  | [undefined, Response];

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export class Request<RequestResponse> {
  private baseUrl = Config.URL;

  private url: string;
  private method: Method;
  private headers: Record<string, string>;
  private urlParams: Record<string, string>;

  constructor(
    url: string,
    urlParams?: Record<string, string>,
    method?: Method,
  ) {
    this.url = url;
    this.method = method ?? 'GET';
    this.urlParams = urlParams ?? {};
    this.headers = {}; // No headers required;
  }

  public async send(): Promise<RequestResponse> {
    const options: RequestInit = {
      method: this.method,
      headers: this.headers,
    };

    const fullUrl = `${this.baseUrl}${this.url}?${new URLSearchParams(
      this.urlParams,
    )}`;
    const response = await fetch(fullUrl, options);

    try {
      if (!response) {
        throw new Error('No response');
      }

      if (response.status !== 200) {
        throw new Error('Invalid status');
      }

      return await JSON.parse(await response.text());
    } catch (error) {
      throw error;
    }
  }
}
