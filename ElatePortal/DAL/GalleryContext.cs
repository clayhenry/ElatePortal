using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ElatePortal.Models;
using ElatePortal.Modules;

namespace ElatePortal.DAL
{
    public class GalleryContext : DbContext
    {

        public GalleryContext(DbContextOptions<GalleryContext> options) : base(options)
        {

        }

        public DbSet<ImageTag> ImageTags { get; set; }
        public DbSet<GalleryImage> GalleryImages { get; set; }
    }
}
    