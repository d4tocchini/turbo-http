const status = new Array(512)
const statusMessage = new Array(512)

set(100, 'Continue')
set(101, 'Switching Protocols')
set(102, 'Processing')
set(103, 'Early Hints')
set(200, 'OK')
set(201, 'Created')
set(202, 'Accepted')
set(203, 'Non-Authoritative Information')
set(204, 'No Content')
set(205, 'Reset Content')
set(206, 'Partial Content')
set(207, 'Multi-Status')
set(208, 'Already Reported')
set(226, 'IM Used')
set(300, 'Multiple Choices')
set(301, 'Moved Permanently')
set(302, 'Found')
set(303, 'See Other')
set(304, 'Not Modified')
set(305, 'Use Proxy')
set(307, 'Temporary Redirect')
set(308, 'Permanent Redirect')
set(400, 'Bad Request')
set(401, 'Unauthorized')
set(402, 'Payment Required')
set(403, 'Forbidden')
set(404, 'Not Found')
set(405, 'Method Not Allowed')
set(406, 'Not Acceptable')
set(407, 'Proxy Authentication Required')
set(408, 'Request Timeout')
set(409, 'Conflict')
set(410, 'Gone')
set(411, 'Length Required')
set(412, 'Precondition Failed')
set(413, 'Payload Too Large')
set(414, 'URI Too Long')
set(415, 'Unsupported Media Type')
set(416, 'Range Not Satisfiable')
set(417, 'Expectation Failed')
set(418, 'I\'m a teapot')
set(421, 'Misdirected Request')
set(422, 'Unprocessable Entity')
set(423, 'Locked')
set(424, 'Failed Dependency')
set(425, 'Unordered Collection')
set(426, 'Upgrade Required')
set(428, 'Precondition Required')
set(429, 'Too Many Requests')
set(431, 'Request Header Fields Too Large')
set(451, 'Unavailable For Legal Reasons')
set(500, 'Internal Server Error')
set(501, 'Not Implemented')
set(502, 'Bad Gateway')
set(503, 'Service Unavailable')
set(504, 'Gateway Timeout')
set(505, 'HTTP Version Not Supported')
set(506, 'Variant Also Negotiates')
set(507, 'Insufficient Storage')
set(508, 'Loop Detected')
set(509, 'Bandwidth Limit Exceeded')
set(510, 'Not Extended')
set(511, 'Network Authentication Required')

function set (code, msg) {
  status[code] = createHttpStatus(code, msg)
  statusMessage[code] = msg
}

function createHttpStatus (code, msg) {
  return Buffer.from('HTTP/1.1 ' + code + ' ' + msg + '\r\n')
}

exports.createHttpStatus = createHttpStatus
exports.httpStatus = status
exports.httpStatusMessage = statusMessage
