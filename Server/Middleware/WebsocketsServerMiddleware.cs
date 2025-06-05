using System.Net.WebSockets;
using System.Reflection.Metadata;
using System.Text.Json;

namespace Server.Middleware;

public class WebsocketsServerMiddleware
{
    private readonly RequestDelegate _next;
    private readonly WebsocketConnectionManager _manager;
    public WebsocketsServerMiddleware(RequestDelegate next, WebsocketConnectionManager manager)
    {
        _next = next;
        _manager = manager;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        if (context.WebSockets.IsWebSocketRequest)
        {
            var ws = await context.WebSockets.AcceptWebSocketAsync();
            System.Console.WriteLine("connection open");

            string id = _manager.AddSocket(ws);

            while (ws.State == WebSocketState.Open)
            {
                var buffer = new byte[1024 * 4];
                var result = await ws.ReceiveAsync(buffer, CancellationToken.None);

                await ws.SendAsync(buffer, WebSocketMessageType.Text, true, CancellationToken.None);
            }
        }
        else await _next(context);
    }

    private async Task SendMessageAsync(string message)
    {
        var obj = JsonSerializer.Deserialize<dynamic>(message);
    }
}