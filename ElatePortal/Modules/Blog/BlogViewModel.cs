using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace ElatePortal.Modules.Blog
{
    public class BlogViewModel
    {

        public List<IFormFile> Files { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Status { get; set; }
        public List<int> Tags { get; set; }
            
        
    }
}