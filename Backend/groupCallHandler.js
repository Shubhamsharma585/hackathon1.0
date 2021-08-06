const createPeerServerListeners = (peerServer) => {
  peerServer.on('connection', (client) => {
    console.log('successfully connecter to peer js server');
    console.log(client.id);
  });
};

module.exports = {
  createPeerServerListeners
};