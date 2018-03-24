using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ElatePortal.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Hosting.Internal;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp;

namespace ElatePortal.Controllers
{
    public class UploadController : Controller
    {

        private IHostingEnvironment _he;
        private Helper _helper;
    
            
        public UploadController(IHostingEnvironment hostingEnvironment, Helper helper)
        {
            this._he = hostingEnvironment;
            this._helper = helper;

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
        public IActionResult Index(List<IFormFile> files)
        {

            
          var uploadedFile = this._helper.UploadImages(files);

            return Ok(new { count = uploadedFile });

        }


    }
}