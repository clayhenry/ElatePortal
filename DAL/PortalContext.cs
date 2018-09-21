using Microsoft.EntityFrameworkCore;
using ElatePortal.Models;
using ElatePortal.Modules.Hubs;


namespace ElatePortal.DAL
{
    public class PortalContext  : DbContext
    {
        public PortalContext(DbContextOptions<PortalContext> options) : base(options)
        {

        }
        public DbSet<Reactions> Reactions { get; set; }
        public DbSet<ReactionsPostProfile> ReactionsPostProfile { get; set; }
        public DbSet<Chat> Chat { get; set; }
    }
}
