using Microsoft.EntityFrameworkCore;
using ElatePortal.Models;


namespace ElatePortal.DAL
{
    public class PortalContext  : DbContext
    {
        public PortalContext(DbContextOptions<PortalContext> options) : base(options)
        {

        }
        public DbSet<Reactions> Reactions { get; set; }
        public DbSet<ReactionsPostProfile> ReactionsPostProfile { get; set; }
    }
}
