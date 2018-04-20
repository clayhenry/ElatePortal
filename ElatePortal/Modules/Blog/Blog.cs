using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.Linq;
using System.Threading.Tasks;
using ElatePortal.Modules.Blog;

namespace ElatePortal.Models
{
    public class Blog
    {

        [Key]
        public int Id { get; set; }
        [Column(TypeName="text")]
        public string Content { get; set; }
        
      
        [ForeignKey("Profile")]
        public int ProfileId { get; set; }
        public virtual Profile Profile { get; set; }

        public string Title { get; set; }
        public DateTime PublishAt { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        
        public int CategoryId { get; set; }
        public string Status { get; set; }

        public List<Comments> Comments { get; set; }


    }
}
