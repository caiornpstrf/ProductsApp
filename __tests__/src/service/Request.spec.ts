import { Request } from '../../../src/service/Request';

describe('Request tests', () => {
  const fetchSpy = jest.spyOn(global, 'fetch');

  beforeEach(() => {
    jest.clearAllMocks();
    fetchSpy.mockResolvedValue({
      status: 200,
      text: jest.fn().mockResolvedValue('{"key": "value"}'),
    } as any);
  });

  it('should initialize with default values', () => {
    const request = new Request('test');

    expect(request['url']).toBe('test');
    expect(request['method']).toBe('GET');
    expect(request['urlParams']).toEqual({});
    expect(request['headers']).toEqual({});
  });

  it('should initialize with provided values', () => {
    const urlParams = { key: 'value' };
    const request = new Request('test', urlParams, 'POST');

    expect(request['url']).toBe('test');
    expect(request['method']).toBe('POST');
    expect(request['urlParams']).toEqual(urlParams);
    expect(request['headers']).toEqual({});
  });

  it('should initialize with provided urlParams and default method', () => {
    const urlParams = { key: 'value' };
    const request = new Request('test', urlParams);

    expect(request['url']).toBe('test');
    expect(request['method']).toBe('GET');
    expect(request['urlParams']).toEqual(urlParams);
    expect(request['headers']).toEqual({});
  });

  it('should initialize with provided method and default urlParams', () => {
    const request = new Request('test', undefined, 'PUT');

    expect(request['url']).toBe('test');
    expect(request['method']).toBe('PUT');
    expect(request['urlParams']).toEqual({});
    expect(request['headers']).toEqual({});
  });

  it('should send request with default values', async () => {
    const request = new Request('test');
    await request.send();

    expect(fetchSpy).toHaveBeenCalledWith('https://dummyjson.com/test?', {
      headers: {},
      method: 'GET',
    });
  });

  it('should send request with provided values', async () => {
    const urlParams = { key: 'value' };
    const request = new Request('test', urlParams, 'POST');
    await request.send();

    expect(fetchSpy).toHaveBeenCalledWith(
      'https://dummyjson.com/test?key=value',
      { headers: {}, method: 'POST' },
    );
  });

  it('should throw error if no response', async () => {
    fetchSpy.mockResolvedValue(undefined as any);

    const request = new Request('test');
    await expect(request.send()).rejects.toThrow('No response');
  });

  it('should throw error if status is not 200', async () => {
    fetchSpy.mockResolvedValue({ status: 500 } as any);

    const request = new Request('test');
    await expect(request.send()).rejects.toThrow('Invalid status');
  });
});
