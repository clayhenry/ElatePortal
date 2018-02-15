using ElatePortal.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElatePortal.Models
{
    public class HomeViewModel
    {

        public string Content { get; set; }
        public string Name { get; set; }
        public int BlogId { get; set; }
        public string Comment { get; set; }

    }
}
