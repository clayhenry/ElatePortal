using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
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
        [HttpGet("/api/Blogs/{tag?}")]
        public JsonResult GetBlog(string tag)
        {
            var posts = this._portalreposirory.GetBlogList();
            
            if(! string.IsNullOrEmpty(tag)){
                
                var hh = new List<HomeViewModel>();
               
                foreach (var t in posts){
                    {
                        for (int i = 0; i < t.DepartmentsBlog.Count; i++)
                        {
                            if (tag.Contains(t.DepartmentsBlog[i].Departments.DepartmentName) )
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
                                    DepartmentsBlog = t.DepartmentsBlog
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
        public async Task<IActionResult> GetBlog([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var blog = await _blogcontext.Blog.SingleOrDefaultAsync(m => m.Id == id && m.Status == "Published");

            if (blog == null)
            {
                return NotFound();
            }

            return Ok(blog);
        }

        // PUT: api/Blogs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlog([FromRoute] int id, [FromBody] Models.Blog blog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != blog.Id)
            {
                return BadRequest();
            }

            _blogcontext.Entry(blog).State = EntityState.Modified;

            try
            {
                await _blogcontext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
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

        [HttpPost("/api/Blogs/create/comment/{blogid}")]
        public async Task<IActionResult> CreateComment(int blogid, Comments comments)
        {
            var request = HttpContext.Request;
            using (var reader = new StreamReader(request.Body))
            {
                var comment = await reader.ReadToEndAsync();
              
                comments.BlogId = blogid;
                comments.ProfileId = _portalreposirory.GetProfileId(HttpContext.GetEmail());
                comments.Comment = comment;
                comments.CreatedAt = DateTime.Now;
                comments.Status = 1;    

            _commentcontext.Update(comments);
            await _commentcontext.SaveChangesAsync();

            return Content(blogid.ToString());
            
        } }

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
                var filename = this._helper.UploadImages(files, 3 , 3); 
               
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
        public IActionResult Update(int Id, List<IFormFile> files, string title, string content, string status, List<int> tag)
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
                   var filename = this._helper.UploadImages(files, 3 , 3);
                    
                   var update = this._portalreposirory.UpdateBlogPost( new Models.Blog()
                    {
                        Id = Id,
                        Title = title,
                        CoverImage = filename[1],
                        UpdatedAt = DateTime.Now,
                        Status = status,
                        DepartmentsBlog = deps,
                        Content = content
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