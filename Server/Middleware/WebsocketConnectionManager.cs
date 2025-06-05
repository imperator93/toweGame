using System.Collections.Concurrent;
using System.Net.WebSockets;

namespace Server.Middleware;

public class WebsocketConnectionManager
{
    private ConcurrentDictionary<string, WebSocket> _sockets = [];

    public ConcurrentDictionary<string, WebSocket> GetAllSockets()
    {
        return _sockets;
    }

    public string AddSocket(WebSocket socket)
    {
        string id = Guid.NewGuid().ToString();
        _sockets.TryAdd(id, socket);
        System.Console.WriteLine($"from {nameof(this.AddSocket)}: connection added!");
        return id;
    }
}