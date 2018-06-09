using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Mvc;
using ElatePortal.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using ElatePortal.DAL;
using System.Collections;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace ElatePortal.Extensions
{
    public static class ElateExtensions
    {
        public static string GetEmail (this HttpContext context ){

            var cList = context.User.Claims.ToList();
            return cList[11].Value;

        }

    }
}
