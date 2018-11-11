using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;

namespace ElatePortal.Models
{
    public class Helper
    {

        public string FilePath { get; set; }
        public string FileName { get; set; }

        private IHostingEnvironment _he;
        
        public Helper(IHostingEnvironment hostingEnvironment)
        {
            this._he = hostingEnvironment;
        }
 
        public string[] UploadImages (List<IFormFile> files, int x = 4, int y = 3)
        {
            long size = files.Sum(f => f.Length);
        
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    this.FileName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(formFile.FileName);
                    var uploadFilePath = Path.Combine(this._he.WebRootPath, "uploads", this.FileName);
                    this.FilePath = Path.GetTempFileName();
                    using (var stream = new FileStream(this.FilePath, FileMode.Create))
                    {
                         formFile.CopyTo(stream);
                    }

                    using (Image<Rgba32> image = Image.Load(this.FilePath))
                    {
                      
                        image.Mutate(ctx => ctx.Resize(image.Width, image.Height));
                        image.Save(uploadFilePath); 
                    } 

                }
            }
            
            return new string[]{FilePath = this.FilePath, FileName = this.FileName};

        }
            
        }
        
    }
