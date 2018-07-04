using ElatePortal.DAL;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using ElatePortal.Modules.Blog;

namespace ElatePortal.Models
{
    public class HomeViewModel
    {

        public string Content { get; set; }
        public string Name { get; set; }
        public int BlogId { get; set; }
        public string Comment { get; set; }
        public string Title { get; set; }
        public string CoverImage { get; set; }
        public string Status { get; set; }
        public string UserTitle { get; set; }
        public DateTime CreatedAt { get; set; }
        [NotMapped]
        public List<Comments> Comments { get; set; }
//        public List<Departments> Departments { get; set; }
        public List<DepartmentsBlog> DepartmentsBlog { get; set; }
        public int CommentsCount { get; set; }

        
        public string Preview { get; set; }
       
        public string TruncateString(string content, int wordCount)
        {
           
           var contentArray = content.Trim().Split(" ");
            var preview = "";
            if(wordCount < contentArray.Length){
                for (int i = 0; i < wordCount; i++)
                {
                    preview += contentArray[i] + " ";
                }
            }
            else
            {

                preview = content;
            }
          return preview;
        }
        
        
    }

    public class CommentsViewModel
    {
        public List<Comments> Comments { get; set; }
        
        
    }
    
    

}
