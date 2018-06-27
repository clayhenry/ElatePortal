using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using ElatePortal.Models;
using ElatePortal.Repository;

namespace ElatePortal.Models
{
    public class Comments
    {

        [Key]
        public int Id { get; set; }
        public string Comment { get; set; }
        public int BlogId { get; set; }
        public int ProfileId { get; set; }
        public int Status { get; set; }

       
  
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime CreatedAt { get; set; }

        [NotMapped]
        public List<Profile> Author { get; set; }
        
        [NotMapped]
        public IQueryable Profile { get; set; }
        [NotMapped]
        public string Preview { get; set; }


    }
    
    
    
}
