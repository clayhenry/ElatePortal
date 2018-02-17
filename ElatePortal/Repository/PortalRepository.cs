using ElatePortal.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElatePortal.Models;

namespace ElatePortal.Repository
{

    public class PortalRepository
    {
        private readonly ProfileContext _profileContext;
        private readonly BlogContext _blogContext;
        private readonly CommentContext _commentContext;
  
        public PortalRepository(CommentContext CommentContext, BlogContext BlogContext, ProfileContext ProfileContext)
        {
            this._commentContext = CommentContext;
            this._blogContext = BlogContext;
            this._profileContext = ProfileContext;
           }


        public int GetProfileId(string Email) {
            var Id = _profileContext.Profile.SingleOrDefault(x => x.Email == Email).Id;
            return Id;
        }

        public List<CommentModel> GetBlogComments(int blogId)
        {
            var comments =  _commentContext.Comment.Where(c => c.BlogId.Equals(blogId)).ToList();
            return comments;

        }


    }
}
