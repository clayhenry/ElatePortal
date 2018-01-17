using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ElatePortal.DAL;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ElatePortal.Middleware
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class RegisterMiddleware : Controller
    {
        private readonly RequestDelegate _next;
        

        public RegisterMiddleware(RequestDelegate next)
        {
            _next = next;

        }

        public async Task Invoke(HttpContext httpContext, ProfileContext profileContext)
        {
             List<Claim> Profile = httpContext.User.Claims.ToList();

        var currentProfile = profileContext.Profile.SingleOrDefault(x => x.Email == Profile[9].Value);
            var path = httpContext.Request.PathBase;

            if (currentProfile == null)
            {

                httpContext.Response.StatusCode = 200;

            } else
            {

                HttpContext.Session.SetString("Email", Profile[9].Value);
                
            }

            await _next(httpContext);
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class RegisterMiddlewareExtensions
    {
        public static IApplicationBuilder UseRegisterMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<RegisterMiddleware>();
        }
    }
}
