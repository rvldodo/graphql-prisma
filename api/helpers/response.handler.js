class ResponseHandler {
  constructor(res) {
    this.res = res;
  }

  handler(data, statusCode = 200) {
    return this.res.status(statusCode).json({ status: statusCode, data });
  }
}

export default ResponseHandler;
