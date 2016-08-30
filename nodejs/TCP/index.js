/*模块依赖*/
/*TODO 当用户输入enter回车后才将信息发送给服务器？*/

var net = require('net');
var count = 0;
var users = {};
/*创建服务器*/
var server = net.createServer(function(conn) {
	console.log('new connection!')
	/*在用户连接后的首次输入此时nickname为空，等第二次输入时由于nickname已存在
	均执行输出操作*/
	var nickname;
	conn.write(
		'\n > ' + count + ' other people are connected at this time' + '\n > please write your name and press enter:'
	);
	count++;
	/*显示客户端传过来的数据 默认是buffer格式*/
	conn.setEncoding('utf8');
	/*代表当前连接的昵称*/

	conn.on('data', function(data) {

		/*删除回车符*/
		data = data.replace('\r\n', '');
		if (!nickname) {/*第一次输入为昵称*/
			if (users[data]) {
				conn.write('nickname already in use,try again');
				return;
			} else {
				nickname = data;
				users[nickname] = conn;
				for (var i in users) {
					users[i].write(nickname + '  joined the room');
				}
			}
		}else{/*显示给其他用户的信息*/
			for(var i in users){
				/*确保信息发送给除了自己以外的用户*/
				if (i != nickname) {
					users[i].write(nickname+': '+  data);
				}	
			}
		}


	});
	/*当连接中断时执行 连接用户数--*/
	conn.on('close', function() {
			count--;
		})
		/*该回调在每次有新的连接时会执行*/

});
/*监听端口*/
server.listen(3000, function() {
	console.log('\033[96m sever listion on*:3000\033[39m')
})

/*追踪连接数*/



