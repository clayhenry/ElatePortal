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

        public DbSet<Blog> Blog { get; set; }

//        protected override void OnModelCreating(ModelBuilder modelBuilder)
//        {
//            {
//                modelBuilder.Entity<DepartmentsBlog>()
//                    .HasKey(t => new { t.BlogId, t.DepartmentsId });
//
//                modelBuilder.Entity<DepartmentsBlog>()
//                    .HasOne(pt => pt.Blog)
//                    .WithMany(p => p.DepartmentsBlog)
//                    .HasForeignKey(pt => pt.BlogId);
//
//                modelBuilder.Entity<DepartmentsBlog>()
//                    .HasOne(pt => pt.Departments)
//                    .WithMany(t => t.DepartmentsBlog)
//                    .HasForeignKey(pt => pt.DepartmentsId);
//            }
//        }


  
    }
}
