using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ElatePortal.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp;

namespace ElatePortal.Controllers
{
    public class UploadController : Controller
    {

        private IHostingEnvironment _he;

        public UploadController(IHostingEnvironment hostingEnvironment)
        {
            this._he = hostingEnvironment;

        }
        // GET
        public IActionResult Index()
        {
      
            var hikingTags = new List<ImageTag>()
            {
                new ImageTag()
                {
                    Id = 1,
                    Description = "from hiking trip"
                }
                
            };
            var cityTags = new List<ImageTag>()
            {          
                new ImageTag()
                {
                    Id = 1,
                    Description = "from the city"
                }
            };
            
            var imageList = new List<GalleryImage>()
            {
                
                new GalleryImage()
                {  
                    Title = "Hiking trip",
                    Url = "https://isastudentblog.files.wordpress.com/2017/02/dscf06711.jpg",
                    Created = DateTime.Now,
                    Tags =  hikingTags
                },
                new GalleryImage()
                {
                    Title = "Cirttrip",
                    Url = "https://sustainival.com/wp-content/uploads/2017/03/EventImage.jpg",
                    Created = DateTime.Now,
                    Tags =  cityTags
                },
                
            };
             
                                 
            var model = new GalleryIndexModel()
            {
               Images  =  imageList,
               SearchQuery = ""

            };
            
            return View("~/Modules/Gallery/Views/Gallery.cshtml", model);
        }


        [HttpPost]
        public async Task<IActionResult> Index(List<IFormFile> files)
        {
            long size = files.Sum(f => f.Length);
        
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {

                   var fileName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(formFile.FileName);
                   var uploadFilePath = Path.Combine(_he.WebRootPath, "uploads", fileName);
                   var filePath = Path.GetTempFileName();
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);
                    }

                     using (Image<Rgba32> image = Image.Load(filePath))
                    {
                      
                        image.Mutate(ctx => ctx.Resize(image.Width / 2, image.Height / 2));
                        image.Save(uploadFilePath); 
                    } 

                }
            }

            return Ok(new { count = files.Count, size });

        }


    }
}