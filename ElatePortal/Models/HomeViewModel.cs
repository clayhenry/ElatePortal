using ElatePortal.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElatePortal.Models
{
    public class HomeViewModel
    {

        public string Content { get; set; }
        public string Name { get; set; }
        public int BlogId { get; set; }
        public string Comment { get; set; }
        public string Title { get; set; }
        public List<CommentModel> Comments { get; set; }
        public string Preview { get; set; }
       

      
        public string TruncateString(string content, int wordCount)
        {
           var contentArray = content.Split(" ");
            var preview = "";
            
            for (int i = 0; i < wordCount; i++)
            {
                preview += contentArray[i] + " ";
            }
          return preview;
        }
        
        
    }
    
    

}
