using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElatePortal.Modules
{
    public class Test : IModule
    {
   
        public string DoWork()
        {
            return "hello from test module";
           
        }
    }

}

