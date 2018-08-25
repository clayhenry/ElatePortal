using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.Linq;
using System.Threading.Tasks;
using ElatePortal.Modules.Blog;
using Microsoft.EntityFrameworkCore;

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
        public DateTime? PublishAt { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        
        public int CategoryId { get; set; }
        public string Status { get; set; }
     
   
        public string CoverImage { get; set; }
        public int Feature { get; set; }

        public List<Comments> Comments { get; set; }

        public List<DepartmentsBlog> DepartmentsBlog { get; set; }
        public List<ReactionsPostProfile> ReactionsPostProfile { get; set; }
    
    }    


    public class DepartmentsBlog      
    {

        public int Id { get; set; }
      
        public int DepartmentsId { get; set; }
        public Departments Departments { get; set; }
        
        public int BlogId { get; set; }
 

    }
    
    
    public class Departments
    {
        [Key]
        public int Id { get; set; }

        public string DepartmentName { get; set; }
    
    }
    
    public class ReactionsPostProfile
    {
        [Key]     
        public int Id { get; set; }

        public int ProfileId { get; set; }
        public Profile Profile { get; set; }
        public Reactions Reactions { get; set; }
        public int BlogId { get; set; }
        public int ReactionsId { get; set; }
    }


    public class Reactions
    {
        [Key] 
        public int Id { get; set; }
        public string Name { get; set; }
     
    }

    
}
