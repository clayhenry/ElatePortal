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


        public int GetProfileId(string email)
        {
           
            try
            {
                var id = _profileContext.Profile.SingleOrDefault(x => x.Email == email).Id;
                return id;
            }
            catch (ArgumentNullException e)
            {
                Console.WriteLine(e.Message);
                throw;
            }
          
        }

        public List<CommentModel> GetBlogComments(int blogId)
        {
            var comments =  _commentContext.Comment.Where(c => c.BlogId.Equals(blogId)).ToList();
            return comments;
        }

        public IQueryable<HomeViewModel> GetBlogList()
        {  
            var g = (from f in _blogContext.Blog
                join t in _profileContext.Profile on f.ProfileId equals t.Id
                select new HomeViewModel {
                    Content = f.Content,
                    Name = t.Name,
                    BlogId = f.Id,
                    Title =  f.Title,
                    Preview =  new HomeViewModel().TruncateString(f.Content, 5),
                    Comments =  this.GetBlogComments(f.Id)
                    
                });

            return g;
        }
        
        public IQueryable<HomeViewModel> GetBlogPost(int id)
        {  
            var post = (from f in _blogContext.Blog
                join t in _profileContext.Profile on f.ProfileId equals t.Id
                where  f.Id.Equals(id)
                select new HomeViewModel {
                    Content = f.Content,
                    Name = t.Name,
                    BlogId = f.Id,
                    Title =  f.Title,
                    Preview =  new HomeViewModel().TruncateString(f.Content, 5),
                    Comments =  this.GetBlogComments(f.Id)
                    
                });

            return post;
        }


    }
}
