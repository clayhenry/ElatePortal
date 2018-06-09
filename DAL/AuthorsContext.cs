using Microsoft.EntityFrameworkCore;
using ElatePortal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElatePortal.DAL
{
    public class AuthorsContext : DbContext
    {

        public AuthorsContext(DbContextOptions<AuthorsContext> options) : base(options)
        {

        }
        public DbSet<Author> Authors { get; set; }
    }
}
