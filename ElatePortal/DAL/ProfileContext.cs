using Microsoft.EntityFrameworkCore;
using ElatePortal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
