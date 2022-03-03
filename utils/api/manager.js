import Cookies from "js-cookie";

class ApiManager {
  constructor(options = {}) {
    this.config = {
      apiUrl: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://royroodenburg.nl",
      ...options,
    };
  }

  post(url, data) {
    return this.request("POST", url, data);
  }

  get(url, accept = null) {
    return this.request("GET", url, null, accept);
  }

  put(url, data) {
    return this.request("PUT", url, data);
  }

  delete(url, data) {
    return this.request("DELETE", url, data);
  }

  request(method, url, body, accept) {
    const lang = "nl";

    // Default headers
    const headers = new Headers({
      "Accept-Language": lang.length ? lang.toLowerCase() : "nl",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
      Cookie: Cookies,
    });

    // if (tokenCookie) {
    //   headers.append("Authorization", `Bearer ${tokenCookie}`);
    // }

    if (accept) {
      headers.append("Accept", accept); // add accept header if it has been entered with the 'GET' method. for example for retrieving an html template
    }

    const options = {
      method,
      cache: "no-cache",
      mode: "cors",
      credentials: "same-origin",
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body); // stringify all data variables
    }

    // handle response, format in contentType and return to fetch API call
    const handleResponse = (response) => {
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json();
        }
        return response.text();
      }
      return Promise.reject(response);
    };

    const apiUrl = url.startsWith("/") ? this.config.apiUrl + url : url;

    return fetch(apiUrl, options)
      .then(handleResponse)
      .then((responseData) => responseData);
  }
}

export default ApiManager;
