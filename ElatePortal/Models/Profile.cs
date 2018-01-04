using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ElatePortal.Models
{
    public class Profile
    {
        [Key]
        public int Id { get; set; }
        public Guid ExternalId { get; set; } 
        public string Name { get; set; }
        public string Email { get; set; }
        public string About { get; set; }
        public bool Editor { get; set; }
        public bool Registered { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}

