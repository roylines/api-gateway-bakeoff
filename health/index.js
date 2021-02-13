"use strict";
const { info } = require("lambda-log");

exports.handler = async (event) => {
  info("event received", event);
  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "max-age=1", // 1 second cache
    },
    body: JSON.stringify({ status: "OK" }),
  };
};
