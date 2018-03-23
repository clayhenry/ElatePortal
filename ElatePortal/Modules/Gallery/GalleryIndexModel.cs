using System.Collections.Generic;

namespace ElatePortal.Models
{
    public class GalleryIndexModel
    {
        public IEnumerable<GalleryImages> Type { get; set; }
        public string SearchQuery { get; set; }
    }
}    