using Microsoft.EntityFrameworkCore;
using ElatePortal.Models;


namespace ElatePortal.DAL
{
    public class ProfileContext : DbContext
    {
        public ProfileContext(DbContextOptions<ProfileContext> options) : base(options)
        {

        }
        public DbSet<Profile> Profile { get; set; }
    }
}
