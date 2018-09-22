using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ElatePortal.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace ElatePortal.Modules.Hubs
{
    public class Chat
    {
        public int _date;
 
        public int Id { get; set; }
        public string Message { get; set; }
        [NotMapped]
        public string Image { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd MMM yyyy HH:mm:ss}")]
        public DateTime Date { get; set; }
        [NotMapped]
        public string Name { get; set; }
        [NotMapped]
        public List<string> Ids { get; set; }
        public string ExternalIds { get; set; }
        public int ProfileId { get; set; }
        public int CompanyId { get; set; }
 
        public Profile Profile { get; set; }
    }
    
   
}