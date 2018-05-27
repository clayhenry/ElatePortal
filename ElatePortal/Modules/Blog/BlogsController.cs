using System;
using System.Collections.Generic;
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
            Helper helper)
        {
            this._blogcontext = BlogContext;
            this._portalreposirory = PortalRepository;
            this._commentcontext = CommentContext;
            this._helper = helper;
        }

        // GET: api/Blogs
        [HttpGet]
        public IEnumerable<Models.Blog> GetBlog()
        {
            return _blogcontext.Blog;
        }

        // GET: api/Blogs/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBlog([FromRoute] int id)
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


        [HttpPost("create/comment/{blogid}")]
        public async Task<IActionResult> CreateComment(int blogid, string Comment, Comments comments)
        {

            comments.BlogId = blogid;
            comments.ProfileId = _portalreposirory.GetProfileId(HttpContext.GetEmail());
            comments.Comment = Comment;
            comments.CreatedAt = DateTime.Now;

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
            
//            var departments = this._portalreposirory.GetDepartments();

            return View("~/Modules/Blog/Views/Create.cshtml");
        }

        [HttpPost("/Admin/Blog/Update/{id}")]
        public IActionResult Update(List<IFormFile> files)
        {
            
            return Content("gkjhkjhjk");
        }
        
        [HttpGet("/Admin/Blog/List")]
        public IActionResult List()
        {
            var Bloglist = this._portalreposirory.GetBlogList();
            
            var lists = new Dictionary<string, IQueryable>(){
            { "blogs" ,  Bloglist },
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