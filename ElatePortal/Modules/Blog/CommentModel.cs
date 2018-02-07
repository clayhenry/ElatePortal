using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ElatePortal.Models
{
    public class CommentModel
    {

        [Key]
        public int Id { get; set; }
        public string Comment { get; set; }
        public int BlogId { get; set; }
        public int ProfileId { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime CreatedOn { get; set; }


    }
}
