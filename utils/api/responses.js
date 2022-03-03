const responseObj = {
  success: true,
  data: {},
  message: "",
  meta: {},
};

export const invalidResponse = (message = "", data = {}, meta = {}) => {
  responseObj.success = false;
  responseObj.message = message;
  responseObj.data = data;
  responseObj.meta = meta;
  return responseObj;
};

export const validResponse = (message = "", data = {}, meta = {}) => {
  responseObj.success = true;
  responseObj.message = message;
  responseObj.data = data;
  responseObj.meta = meta;
  return responseObj;
};
