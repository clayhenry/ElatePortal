using Microsoft.EntityFrameworkCore;
using ElatePortal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElatePortal.DAL
{
    public class BlogContext : DbContext
    {
        public BlogContext(DbContextOptions<BlogContext> options) : base(options)
        {

        }

        public DbSet<BlogModel> Blog { get; set; }

    }
}
