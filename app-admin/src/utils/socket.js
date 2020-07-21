import io from 'socket.io-client';
 
const socket = io('http://localhost:3000');
socket.on('connect', function(){

    console.log('常连接建立成功');
    
});

export default socket
