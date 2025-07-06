export const appLogs = (req, _, next) => {
  console.log({
    method: req.method,
    url: req.url
    // body: req.body,
    // query: req.query,
    // params: req.params
  })
  next()
}
