using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SixLabors.ImageSharp;

namespace ElatePortal.Models
{
    public class Helper
    {

        public string FilePath { get; set; }

        private IHostingEnvironment _he;
        
        public Helper(IHostingEnvironment hostingEnvironment)
        {
            this._he = hostingEnvironment;
        }

        public string[] UploadImages (List<IFormFile> files)
        {
            long size = files.Sum(f => f.Length);
        
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    var fileName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(formFile.FileName);
                    var uploadFilePath = Path.Combine(this._he.WebRootPath, "uploads", fileName);
                    this.FilePath = Path.GetTempFileName();
                    using (var stream = new FileStream(this.FilePath, FileMode.Create))
                    {
                         formFile.CopyTo(stream);
                    }

                    using (Image<Rgba32> image = Image.Load(this.FilePath))
                    {
                      
                        image.Mutate(ctx => ctx.Resize(image.Width / 2, image.Height / 2));
                        image.Save(uploadFilePath); 
                    } 

                }
            }
            
            return new string[]{FilePath = this.FilePath};

        }
            
        }
        
    }
