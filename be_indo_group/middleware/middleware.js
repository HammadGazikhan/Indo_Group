// middlewares/logger.middleware.js
import chalk from "chalk";

export const apiLogger = (req, res, next) => {
  const methodColor = {
    GET: chalk.cyan,
    POST: chalk.green,
    PUT: chalk.yellow,
    DELETE: chalk.red,
    PATCH: chalk.magenta,
  };

  const method = methodColor[req.method]
    ? methodColor[req.method](req.method)
    : chalk.white(req.method);

  const url = chalk.white(req.originalUrl);
  const time = chalk.gray(`[${new Date().toISOString()}]`);

  // Initial request log
  console.log(`${time} ${method} ${url}`);

  // Log when response finishes
  res.on("finish", () => {
    const status =
      res.statusCode >= 500
        ? chalk.bgRed.white(res.statusCode)
        : res.statusCode >= 400
        ? chalk.red(res.statusCode)
        : res.statusCode >= 300
        ? chalk.yellow(res.statusCode)
        : chalk.green(res.statusCode);

    console.log(`${chalk.gray("[RESP]")} ${method} ${url} → ${status}`);
  });

  next();
};
