using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace ElatePortal.Modules.Hubs
{
    public class MessageHub : Hub
    {

        public Task Send(string message)
        {
            return Clients.All.SendAsync("send", message);
        }
        
    }
}