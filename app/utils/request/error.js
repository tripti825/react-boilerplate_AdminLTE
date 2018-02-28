import ExtendableError from 'es6-error';

function isSuccess(response) {
  return ((response.status >= 200 && response.status < 300));
}

function isClientError(response) {
  return (response.status >= 400 && response.status < 500);
}

function isServerError(response) {
  return (response.status >= 500 && response.status < 600);
}

function isAuthError(response) {
  return (response.status === 401);
}

export class RequestError extends ExtendableError {
  constructor(message, response) {
    super(message);

    this.response = response;
    this.message = null;

  }

  get status() {
    return this.response.status;
  }

  isServerError() {
    return isServerError(this.response);
  }

  isClientError() {
    return isClientError(this.response);
  }

  isAuthError() {
    return isAuthError(this.response);
  }

  getResponse() {
    if (this.message) {
      return new Promise((resolve) => resolve(this.message));
    }

    return parseJSON(this.response)
      .then((message) => {
        this.message = message;
        return message;
      });
  }

}

function parseJSON(response) {
  return response.json();
}

export function handleResponse(response) {
  if (isSuccess(response)) {
    return parseJSON(response)
      .then((data) => data);
  }

  throw new RequestError('Request error', response);
}
