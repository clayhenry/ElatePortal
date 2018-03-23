using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using ElatePortal.DAL;
using System.Threading.Tasks;
using static Microsoft.AspNetCore.Hosting.Internal.HostingApplication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using ElatePortal.Extensions;

namespace ElatePortal.Models
{
    public class RegisterModel
    {
        readonly ProfileContext _profileContext;

        public RegisterModel(ProfileContext profileContext)
        {
            this._profileContext = profileContext;
        }

        public void CheckIfRegistered(HttpContext httpContext, PathString Path)
        {   
            List<Claim> Profile = httpContext.User.Claims.ToList();

            if (Path != "/Register")
            {
                var currentProfile = _profileContext.Profile.SingleOrDefault(x => x.Email == Profile[10].Value);

                if (currentProfile == null)
                {
                    httpContext.Response.Redirect("/Register");
                }
         
                
            }


        }

    }
}
