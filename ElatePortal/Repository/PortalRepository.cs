using ElatePortal.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using ElatePortal.Models;
using ElatePortal.Modules.Blog;
using Microsoft.EntityFrameworkCore;

namespace ElatePortal.Repository
{

    public class PortalRepository
    {
        private readonly ProfileContext _profileContext;
        private readonly BlogContext _blogContext;
        private readonly CommentContext _commentContext;
//        private readonly DepartmentsContext _departmentContext;
  
        public PortalRepository(
            CommentContext CommentContext, 
            BlogContext BlogContext, 
            ProfileContext ProfileContext
//            DepartmentsContext DepartmentsContext
            )
        {
            this._commentContext = CommentContext;
            this._blogContext = BlogContext;
            this._profileContext = ProfileContext;
//            this._departmentContext = DepartmentsContext;
        }


        public int GetProfileId(string email)
        {
           
            try
            {
                var id = _profileContext.Profile.SingleOrDefault(x => x.Email == email).Id;
                return id;
            }
            catch (NullReferenceException e)
            {
                Console.WriteLine(e.Message);
                throw;
            }
          
        }

        public List<Comments> GetBlogComments(int blogId)
        {
            var comments =  _commentContext.Comments.Where(c => c.BlogId.Equals(blogId) ).ToList();
            return comments;
        }


        public List<Profile> GetCommentAuthor(int profileId)
        {

            var author = _profileContext.Profile.Where(x => x.Id.Equals(profileId)).ToList();
            return author;
        }
        
        public IQueryable<HomeViewModel> GetCommentsAndBlogTitle()
        {

            var g = (from p in _blogContext.Blog.Include(c => c.DepartmentsBlog).ThenInclude(f => f.Departments)

                    select new HomeViewModel
                    {
                        Content = p.Content,
                        BlogId = p.Id,
                        Title = p.Title,
                        DepartmentsBlog = p.DepartmentsBlog,
        
                        Comments = _commentContext.Comments.Where(x => x.BlogId.Equals(p.Id))
                            .Select(com => new Comments()
                            {
                                Preview = new HomeViewModel().TruncateString(com.Comment, 6),
                                Comment = com.Comment,
                                Author = _profileContext.Profile.Where(pr => pr.Id.Equals(com.ProfileId)).ToList(),
                                Status = com.Status,
                                Id = com.Id
                            }).ToList()
                    }

                );

           
            return g;
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
                    Comments =  GetBlogComments(f.Id)
                    
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
                    Comments =  GetBlogComments(f.Id)
                    
                });

            return post;
        }


        public List<Blog> GetDepartments()
        {
            var dep = _blogContext.Blog.Include(c => c.DepartmentsBlog).ThenInclude(f => f.Departments).ToList();

            return dep;
        }
        
    }
}
