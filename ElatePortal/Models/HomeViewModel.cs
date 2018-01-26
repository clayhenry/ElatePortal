using ElatePortal.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElatePortal.Models
{
    public class HomeViewModel
    {

        public IQueryable<BlogModel> Posts { get; set; }
    }
}
