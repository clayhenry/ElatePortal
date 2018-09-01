using System;
using System.Collections.Generic;
using ElatePortal.Models;

namespace ElatePortal.Modules.Blog
{
    public class Post
    {
        public string Name { get; set; }
        public int blogId { get; set; }
        public string Content { get; set; }
        public string Title { get; set; }
        public DateTime CreatedAt{ get; set; }
        public List<Profile> Author { get; set; }
        public string CoverImage { get; set; }  
        public List<DepartmentsBlog> DepartmentsBlog { get; set; }
        public List<Comments> Comments { get; set; }
        public int CommentsCount { get; set; }
        public List<ReactionsPostProfile> Reactions { get; set; }    
    }
}