using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ElatePortal.Models;
using ElatePortal.Modules;
using ElatePortal.Modules.Blog;

namespace ElatePortal.DAL
{
    public class CommentContext : DbContext
    {

        public CommentContext(DbContextOptions<CommentContext> options) : base(options)
        {

        }

        public DbSet<Comments> Comments { get; set; }
    }
}
