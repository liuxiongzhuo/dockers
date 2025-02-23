const net = require('net');
const exec = require("child_process").exec
// 创建一个 TCP 服务器监听客户端请求
const server = net.createServer((clientSocket) => {
  // 创建与目标服务器的连接
  const targetSocket = net.createConnection({ host: '127.0.0.1', port: 3000 }, () => {
    // 将数据从客户端转发到目标服务器
    clientSocket.pipe(targetSocket);
    targetSocket.pipe(clientSocket);
  });

  targetSocket.on('error', (err) => {
    console.error('Target server error:', err);
  });

  clientSocket.on('error', (err) => {
    console.error('Client socket error:', err);
  });
});
console.log("start");
exec("nohup ./xray run -c server.json &", function (err, stdout, stderr) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
    console.log(stderr);
});
console.log("end");
server.listen(5000, () => {
  console.log('TCP代理服务器已启动');
});
