using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ElatePortal.Models
{
    public class BlogModel
    {

        [Key]
        public int Id { get; set; }
        [Column(TypeName="text")]
        public string Content { get; set; }
        
      
        [ForeignKey("Profile")]
        public int ProfileId { get; set; }
        public DateTime PublishAt { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int CategoryId { get; set; }
        public string Status { get; set; }



    }
}
