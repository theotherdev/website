export default class CloudStorageClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request({ database, operation, key, value = null }) {
    const params = new URLSearchParams({ database, operation });
    if (key) params.append('key', key);
    if (value !== null) params.append('value', encodeURIComponent(value));

    const response = await fetch(`${this.baseURL}?${params.toString()}`);

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Error ${response.status}: ${text}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }

    return response.text();
  }

  get(database, key) {
    return this.request({ database, operation: 'get', key });
  }

  create(database, key, value) {
    return this.request({ database, operation: 'create', key, value });
  }

  update(database, key, value) {
    return this.request({ database, operation: 'update', key, value });
  }

  delete(database, key) {
    return this.request({ database, operation: 'delete', key });
  }

  list(database) {
    return this.request({ database, operation: 'list' });
  }
}