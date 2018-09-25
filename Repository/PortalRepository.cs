using ElatePortal.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using ElatePortal.Models;
using Microsoft.AspNetCore.Authorization;
using ElatePortal.Modules.Blog;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using ElatePortal.Controllers;
using ElatePortal.Modules.Hubs;
using Remotion.Linq.Clauses;
using SQLitePCL;

namespace ElatePortal.Repository
{

    public class PortalRepository
    {
        private readonly ProfileContext _profileContext;
        private readonly BlogContext _blogContext;
        private readonly CommentContext _commentContext;
        private readonly DepartmentsContext _departmentContext;
        private readonly PortalContext _portalContext;
  
        public PortalRepository(
            CommentContext CommentContext, 
            BlogContext BlogContext, 
            ProfileContext ProfileContext,
            DepartmentsContext DepartmentsContext,
            PortalContext portalContext
            
            )
        {
            this._commentContext = CommentContext;
            this._blogContext = BlogContext;
            this._profileContext = ProfileContext;
            this._departmentContext = DepartmentsContext;
            this._portalContext = portalContext;
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

        public List<Profile> GetCurrentProfile(string email)
        {

            try
            {
                var profile = _profileContext.Profile.Where(e => e.Email.Equals(email)).ToList();
                return profile;
            }
            catch (NullReferenceException e)
            {
                Console.WriteLine(e.Message);
                throw;
            }
 
        } 


        public List<CommentsViewModel> GetComments(int blogId)
        {
            var comments = (from p in _blogContext.Blog 
                    join t in _profileContext.Profile on p.ProfileId equals t.Id
                    where p.Id == blogId
                    select new CommentsViewModel()
                    {
                        Comments = _commentContext.Comments.Where(x => x.BlogId.Equals(blogId) && x.Status.Equals(1) )
                            
                            .Select(com => new Comments()
                            {
                                Preview = new HomeViewModel().TruncateString(com.Comment, 6),
                                Comment = com.Comment,
                                Author = _profileContext.Profile.Where(pr => pr.Id.Equals(com.ProfileId)).ToList(),
                                Status = com.Status,
                                CreatedAt = com.CreatedAt,
                                Id = com.Id
                            }).OrderByDescending(v=>v.CreatedAt).ToList()
                    }

                ).ToList();


            return comments;
        }


        public List<Comments> GetBlogComments(int blogId)
        {
            return _commentContext.Comments.Where(c => c.BlogId.Equals(blogId) && c.Status.Equals(1) ).ToList();

        }
        
        
        public int GetBlogCommentCount(int blogId)
        {
            return _commentContext.Comments.Where(c => c.BlogId.Equals(blogId) && c.Status.Equals(1)).Count();
        }

        public List<Blog> GetSelectedDepartments(int blogId)
        {

            var deps = _blogContext.Blog.Where(x => x.Id.Equals(blogId)).Select(c => new Blog()
            {
                DepartmentsBlog = c.DepartmentsBlog
                
            } );

            return deps.ToList();
        }


        public List<Profile> GetCommentAuthor(int profileId)
        {

            var author = _profileContext.Profile.Where(x => x.Id.Equals(profileId)).ToList();
            return author;
        }
        
        public IQueryable<HomeViewModel> GetCommentsAndBlogTitle()
        {

            var g = (from p in _blogContext.Blog.Include(c => c.DepartmentsBlog).ThenInclude(f => f.Departments) 
                    join t in _profileContext.Profile on p.ProfileId equals t.Id
                    orderby p.CreatedAt descending 
                    select new HomeViewModel
                    {
                        Content = p.Content,
                        BlogId = p.Id,
                        Title = p.Title,
                        Name = t.Name,
                        UserTitle = t.Title,
                        DepartmentsBlog = p.DepartmentsBlog,
                        CreatedAt = p.CreatedAt,
                        Status = p.Status,
                        Comments = _commentContext.Comments.Where(x => x.BlogId.Equals(p.Id)).Select(com => new Comments()
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
        
        public IQueryable<HomeViewModel> GetBlogList(int ?feature = null)
        {
   
            var g = (from f in _blogContext.Blog
                    .Include(c=> c.DepartmentsBlog).ThenInclude(h=> h.Departments )
                    .Include(v=>v.ReactionsPostProfile ).ThenInclude(v=>v.Reactions)
                    .Include(v=>v.ReactionsPostProfile ).ThenInclude(v=>v.Profile)
                join t in _profileContext.Profile on f.ProfileId equals t.Id 
                orderby f.CreatedAt descending 
              

                select new HomeViewModel {
                    Content = f.Content,
                    Name = t.Name,
                    Status = f.Status,
                    CoverImage = f.CoverImage,
                    BlogId = f.Id,
                    Title =  f.Title,
                    UserTitle = t.Title,
                    Preview =  new HomeViewModel().TruncateString(f.Content, 15),
                    //Comments =  GetBlogComments(f.Id),
                    DepartmentsBlog = f.DepartmentsBlog,
                    CommentsCount = GetBlogCommentCount(f.Id),
                    Reactions = f.ReactionsPostProfile,
                    Feature = f.Feature

                } );


            
            if ( feature !=null )
            {
                g = g.Where(x => x.Status == "Published" && x.Feature == feature);
            }
           
            else
            {
                g = g.Where(x => x.Status == "Published");
            }
            
            return g;

        }


        public IQueryable<Post> GetSingleBlogPost(int postId)
        {
            var post = (from f in _blogContext.Blog.Include(c=> c.DepartmentsBlog).ThenInclude(c=>c.Departments)
                    .Include(v=>v.ReactionsPostProfile ).ThenInclude(v=>v.Reactions)
                    .Include(v=>v.ReactionsPostProfile ).ThenInclude(v=>v.Profile)
                join t in _profileContext.Profile on f.ProfileId equals t.Id
                where  f.Id.Equals(postId) where f.Status.Equals("Published")
                select new Post() {
                            
                    Title = f.Title,
                    Content = f.Content,
                    CoverImage = f.CoverImage,
                    CreatedAt = f.CreatedAt,
                    Author = _profileContext.Profile.Where(pr => pr.Id.Equals(f.ProfileId)).ToList(),
                    DepartmentsBlog = f.DepartmentsBlog,
                    Reactions = f.ReactionsPostProfile,
                    Comments =  GetBlogComments(f.Id),
                    BlogId = f.Id,
                    CommentsCount = GetBlogCommentCount(f.Id),
                    ReactionsAggregate = new List<ReactionsData>() //not used
                        
                    {
                        new ReactionsData()
                        {
                            Like = new List<ReactionsMetadata>(){ new ReactionsMetadata()
                            {
                                Count = f.ReactionsPostProfile.Count,
                                Profile = generateReactionProfiles(f.ReactionsPostProfile)
                               
                            } }
                        }
                    }
                    
              });

            return post;
        }


        public List<Profile> generateReactionProfiles(List< ReactionsPostProfile> profiles)
        {
            var profileList = new List<Profile>();     
            foreach (var profile in profiles)
            {
                profileList.Add(profile.Profile); 
            }

            return profileList;
        }
        
        public IQueryable<HomeViewModel> GetBlogPost(int id)
        {  
            var post = (from f in _blogContext.Blog.Include(c=> c.DepartmentsBlog).ThenInclude(c=>c.Departments)
                    .Include(v=>v.ReactionsPostProfile ).ThenInclude(v=>v.Reactions)
                join t in _profileContext.Profile on f.ProfileId equals t.Id
                
                where  f.Id.Equals(id)
                select new HomeViewModel {
                    Content = f.Content,
                    Name = t.Name,
                    BlogId = f.Id,
                    Title =  f.Title,
                    CoverImage = f.CoverImage,
                    DepartmentsBlog = f.DepartmentsBlog,
                    Status = f.Status,
                    Preview =  new HomeViewModel().TruncateString(f.Content, 5),
                    Comments =  GetBlogComments(f.Id),
                    Reactions = f.ReactionsPostProfile,
                    Feature = f.Feature
                   });

            return post;
        }


        public IQueryable<Departments> GetDepartments()
        {
            var dep = from d in this._departmentContext.Departments select d;
            return dep;
        }


        public bool UpdateBlogPost( Blog payload )
        {

            var blogdb = _blogContext.Blog.Include(c=> c.DepartmentsBlog).FirstOrDefault(x =>x.Id.Equals(payload.Id ) );    
          
            blogdb.Title = payload.Title;
            blogdb.Content = payload.Content;
            
            if(!string.IsNullOrEmpty(payload.CoverImage) ){
                blogdb.CoverImage = payload.CoverImage;
            }
            blogdb.UpdatedAt = payload.UpdatedAt;
            blogdb.Status = payload.Status;
            blogdb.DepartmentsBlog = payload.DepartmentsBlog;
            blogdb.Feature = payload.Feature;
            this._blogContext.Blog.Update(blogdb);
            this._blogContext.SaveChanges();
                
            return true;

        }

        public Task PostReactionUpdate(int blogId, int reactionId, string type, int profileId)
        {
            switch (type)
            {
                    case "delete" : 
                        var reactions =
                            this._portalContext.ReactionsPostProfile.SingleOrDefault(x =>
                                x.ProfileId.Equals(profileId) && x.BlogId.Equals(blogId));

                        if(reactions !=null){
                            this._portalContext.ReactionsPostProfile.Remove(reactions);
                        }

                        break;
                    
                    case "add" :

                        var reaction =  new ReactionsPostProfile {BlogId = blogId, ProfileId = profileId, ReactionsId = reactionId};
                        this._portalContext.ReactionsPostProfile.Add(reaction);

                        break;
            }
            
            this._portalContext.SaveChanges();

            return Task.CompletedTask;
        }

        public List<Users> GetAllUsers()
        {
            var users = (from u in this._profileContext.Profile
                select new Users()
                {
                    Id = u.Id,
                    InternalId = u.InternalId,
                    Name = u.Name
                }).ToList();

            return users;

        }

        public void setChatMesage(Chat chat)
        {

            this._portalContext.Chat.Add(chat);
            this._portalContext.SaveChanges();

        }

        public IQueryable<Chat> GetAllMessages()
        {
            var chat = (from c in _portalContext.Chat.Include(p => p.Profile)
                select new Chat()
                {
                    Message = c.Message,
                    Date = c.Date,
                    Name = c.Name,
                    Profile = c.Profile
                }).OrderByDescending(c => c.Date).Take(10);

            return chat;

        }
        
        
        
    }
}
