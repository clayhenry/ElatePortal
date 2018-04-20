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
        [NotMapped]
        public List<Comments> Comments { get; set; }
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
    
    

}
