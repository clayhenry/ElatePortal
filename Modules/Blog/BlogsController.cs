﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElatePortal.DAL;
using ElatePortal.Models;
using ElatePortal.Repository;
using ElatePortal.Extensions;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;

namespace ElatePortal.Modules.Blog
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/Blogs")]
    public class BlogsController : Controller
    {
        private readonly BlogContext _blogcontext;
        private readonly PortalRepository _portalreposirory;
        private readonly CommentContext _commentcontext;
        private Helper _helper;
        

        public BlogsController(
            
            BlogContext BlogContext, 
            PortalRepository PortalRepository, 
            CommentContext CommentContext,  
            Helper helper
            
            )
        {
            this._blogcontext = BlogContext;
            this._portalreposirory = PortalRepository;
            this._commentcontext = CommentContext;
            this._helper = helper;
        }

        // GET: api/Blogs
        [HttpGet("/api/Blogs/{tag?}/{feature?}")]
        public JsonResult GetBlog(string tag, int feature)
        {
            var posts = this._portalreposirory.GetBlogList(feature);
            
            if(! string.IsNullOrEmpty(tag)){
                
                var hh = new List<HomeViewModel>();
               
                foreach (var t in posts){
                    {
                        for (int i = 0; i < t.DepartmentsBlog.Count; i++)
                        {
                            if (tag.Contains(t.DepartmentsBlog[i].Departments.DepartmentName ))
                            {   
                                hh.Add(new HomeViewModel()
                                {
                                    Content = t.Content,
                                    Name = t.Name,
                                    Status = t.Status,
                                    CoverImage = t.CoverImage,
                                    BlogId = t.BlogId,
                                    Title = t.Title,
                                    UserTitle = t.UserTitle,
                                    Preview = new HomeViewModel().TruncateString(t.Content, 15),
                                    CommentsCount = this._portalreposirory.GetBlogCommentCount(t.BlogId),
                                    DepartmentsBlog = t.DepartmentsBlog,
                                    Reactions = t.Reactions,
                                    UserImage = t.UserImage
                                    
                                });
           
                            }
                        }
                    }
                }
                
                return Json(hh);
            }
                 
         return Json(posts);
        }
        
        
        [HttpGet]
        [Route("/api/Blogs/Tags")]
        public JsonResult CurrentTags()
        {
            var tags = this._portalreposirory.GetDepartments();
            return Json(tags);

        }

        // GET: api/Blogs/5
        [HttpGet("{id}")]
        public JsonResult GetBlog([FromRoute] int id)
        {
   
            var blog = this._portalreposirory.GetSingleBlogPost(id);
            //var blog = await _blogcontext.Blog.SingleOrDefaultAsync(m => m.Id == id && m.Status == "Published");

           return Json(blog);
        }

        
        
        // POST: api/Blogs
        [HttpPost]
        public async Task<IActionResult> PostBlog([FromBody] Models.Blog blog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _blogcontext.Blog.Add(blog);
            await _blogcontext.SaveChangesAsync();

            return CreatedAtAction("GetBlog", new { id = blog.Id }, blog);
        }
        
        
        // DELETE: api/Blogs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlog([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var blog = await _blogcontext.Blog.SingleOrDefaultAsync(m => m.Id == id);
            if (blog == null)
            {
                return NotFound();
            }

            _blogcontext.Blog.Remove(blog);
            await _blogcontext.SaveChangesAsync();

            return Ok(blog);
        }

        private bool BlogExists(int id)
        {
            return _blogcontext.Blog.Any(e => e.Id == id);
        }


        [HttpGet("/api/Blogs/Comments/{blogId}")]
        public JsonResult GetComment(int blogId)
        {
            
            return Json(this._portalreposirory.GetComments(blogId));

        }
        
        [HttpPost("/api/Reaction/Update/{updatetype}/{reactionId}/{blogId}")]
        public async void  UpdateReaction(int blogId, int reactionId, string updatetype)
        {
            
            var email = HttpContext.User.Identity.Name;
            var profile = this._portalreposirory.GetCurrentProfile(email);
            
            await this._portalreposirory.PostReactionUpdate(blogId, reactionId, updatetype, profile[0].Id);
        }

        [HttpPost("/api/Blogs/create/comment/{blogid}")]
        public async Task<IActionResult> CreateComment(int blogid, Comments comments, [FromBody] string comment)
        {
             
                comments.BlogId = blogid;
                comments.ProfileId = _portalreposirory.GetProfileId(HttpContext.User?.FindFirst(ClaimTypes.Name)?.Value);
                comments.Comment = comment;
                comments.CreatedAt = DateTime.Now;
                comments.Status = 1;    

            _commentcontext.Update(comments);
            await _commentcontext.SaveChangesAsync();

            return Content(blogid.ToString());

        }

        [HttpGet("/Admin/Blog/Edit/{id}")]
        public IActionResult Post(int id)
        {
 
            var editBlog = new Dictionary<string, IQueryable>()
            {
                {"post", this._portalreposirory.GetBlogPost(id)},
                {"tags" , this._portalreposirory.GetDepartments() },
         
              };
            
            return View("~/Modules/Blog/Views/Post.cshtml", editBlog);

        }
        
        [HttpGet("/Admin/Blog/Create")]
        public IActionResult Create()
        {           
            var departments = this._portalreposirory.GetDepartments();
            return View("~/Modules/Blog/Views/Create.cshtml", departments);
        }

        [HttpPost("/Admin/Blog/Create/Post")]
        public async Task<IActionResult> CreatePost(Models.Blog blog,List<IFormFile> files, List<int> tag)
        {

         //fot this, all you need to do is bind model and evaluate the missing elements.
            if (ModelState.IsValid)
            {
                var filename = this._helper.UploadImages(files, 3 , 4); 
               
                var deps = new List<DepartmentsBlog>();
                
                blog.CoverImage = filename[1];
                blog.ProfileId = this._portalreposirory.GetProfileId(HttpContext.GetEmail());
                blog.CreatedAt =  Convert.ToDateTime(DateTime.Now) ;

                if (blog.Status == "Published")
                {
                    blog.PublishAt = Convert.ToDateTime(DateTime.Now) ;
                }
               
                foreach (var t in tag)
                {
                    deps.Add(new DepartmentsBlog(){ DepartmentsId= t, BlogId = blog.Id});
                }

                this._blogcontext.Blog.Add(blog);
               
                blog.DepartmentsBlog = deps;

                await this._blogcontext.SaveChangesAsync();

            }
            TempData["message"] = "Created";

             return RedirectToAction("List");


        }

        [HttpPost("/Admin/Blog/Update/{id}")]
        public IActionResult Update(int Id, List<IFormFile> files, string title, string content, string status, int Feature, List<int> tag)
        {

            var deps = new List<DepartmentsBlog>();
            foreach (var t in tag)
            {
                deps.Add(new DepartmentsBlog(){ DepartmentsId= t, BlogId = Id});
            }
            
            if (ModelState.IsValid)
            {
                
                try
                {
                   var filename = this._helper.UploadImages(files, 3 , 4);
                    
                   var update = this._portalreposirory.UpdateBlogPost( new Models.Blog()
                    {
                        Id = Id,
                        Title = title,
                        CoverImage = filename[1],
                        UpdatedAt = DateTime.Now,
                        Status = status,
                        DepartmentsBlog = deps,
                        Content = content,
                        Feature = Feature
                    });
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    throw;
                }
            }
               
            TempData["message"] = "Updated";
               
            return RedirectToAction("Post");
           
        }
        
        [HttpGet("/Admin/Blog/List")]
        public IActionResult List()
        {        
            var lists = new Dictionary<string, IQueryable>(){
         
            {"comments", this._portalreposirory.GetCommentsAndBlogTitle()}
              
            };
         
            return View("~/Modules/Blog/Views/List.cshtml", lists);

        }

        [HttpPost]
        [Route("/Admin/Blog/ModerateCommet")]
        public async Task<IActionResult> ModerateComments(List<int> commentId, string update)
        {
            if (ModelState.IsValid) {
            var updateComments = _commentcontext.Comments.Where(x => commentId.Contains(x.Id));

            foreach (var comment in updateComments)
            {
                if(update == "Approve"){
                    comment.Status = 1;
                }
                else
                {
                    comment.Status = 0;
                }
                _commentcontext.Comments.Update(comment);
            }
               await _commentcontext.SaveChangesAsync();
               TempData["message"] = "Updated";
               
                return RedirectToAction("List");
            }
            
            return Content("zsdkhkj");
            
        }
            }
}