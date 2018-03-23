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
        private readonly PortalRepository _protalreposirory;
        private readonly CommentContext _commentcontext;

        public BlogsController(BlogContext BlogContext, PortalRepository PortalRepository, CommentContext CommentContext)
        {
            this._blogcontext = BlogContext;
            this._protalreposirory = PortalRepository;
            this._commentcontext = CommentContext;
        }

        // GET: api/Blogs
        [HttpGet]
        public IEnumerable<BlogModel> GetBlog()
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
        public async Task<IActionResult> PutBlog([FromRoute] int id, [FromBody] BlogModel blog)
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
        public async Task<IActionResult> PostBlog([FromBody] BlogModel blog)
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
        public async Task<IActionResult> CreateComment(int blogid, string Comment, CommentModel commentModel)
        {

            commentModel.BlogId = blogid;
            commentModel.ProfileId = _protalreposirory.GetProfileId(HttpContext.GetEmail());
            commentModel.Comment = Comment;
            commentModel.CreatedAt = DateTime.Now;

            _commentcontext.Update(commentModel);
            await _commentcontext.SaveChangesAsync();

            return Content(blogid.ToString());
        }

        [HttpGet("post/{id}")]
        public IActionResult Post(int id)
        {
            var post = this._protalreposirory.GetBlogPost(id);
            return View("~/Modules/Blog/Views/Post.cshtml", post);

        }
   
    }
}