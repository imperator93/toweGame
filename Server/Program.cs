using Microsoft.AspNetCore.WebSockets;
using Server.Middleware;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddWebSockets(o =>
    {
        o.KeepAliveInterval = TimeSpan.FromMinutes(2);
    });

    builder.Services.AddSingleton<WebsocketConnectionManager>();
}

var app = builder.Build();
{
    app.UseWebSockets();
    app.UseMiddleware<WebsocketsServerMiddleware>();
    app.Run();
}