turnConfig = {
    iceServers: [{
        urls: [ "stun:tk-turn2.xirsys.com" ]
     }, {
        username: "JhgcAuPFYb3QShwif8a-YmiSqXwi-8t9jqgwIMfWbT-SfAUcwi7ps0ceYlXU7CnyAAAAAGF9WR9kYW50d2luZw==",
        credential: "2ed3cb4e-398f-11ec-a785-0242ac140004",
        urls: [
            "turn:tk-turn2.xirsys.com:80?transport=udp",
            "turn:tk-turn2.xirsys.com:3478?transport=udp",
            "turn:tk-turn2.xirsys.com:80?transport=tcp",
            "turn:tk-turn2.xirsys.com:3478?transport=tcp",
            "turns:tk-turn2.xirsys.com:443?transport=tcp",
            "turns:tk-turn2.xirsys.com:5349?transport=tcp"
        ]
     }]     
}