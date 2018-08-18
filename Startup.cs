using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElatePortal.DAL;
using ElatePortal.Middleware;
using ElatePortal.Models;
using ElatePortal.Modules;
using ElatePortal.Repository;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace ElatePortal
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration["App::ConnectionStrings:DefaultConnection"];

            services.AddDbContext<AuthorsContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddDbContext<BlogContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddDbContext<ProfileContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddDbContext<CommentContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddDbContext<GalleryContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddDbContext<DepartmentsContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddDbContext<PortalContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddAuthentication(sharedOptions =>
            {
                sharedOptions.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                sharedOptions.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            })
            .AddAzureAd(options => Configuration.Bind("AzureAd", options))
            .AddCookie();
            
            services.AddAuthorization(options =>
            {
                options.AddPolicy("AtLeast21", policy => policy.Requirements.Add(new MinimumAgeRequirement(21)) );
               
                
            });

        
            services.AddScoped<RegisterModel>();
            services.AddScoped<PortalRepository>();
            services.AddScoped<Helper>();

            services.AddMvc().AddSessionStateTempDataProvider().AddJsonOptions(
                options => options.SerializerSettings.ReferenceLoopHandling =            
                    Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );;
            services.AddSession();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

             
            app.UseSession();
            app.UseStaticFiles();
            app.UseAuthentication();

          //  app.UseRegisterMiddleware();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
                
                
//                routes.MapRoute(
//                    name: "spa-fallback",
//                    template: "{*url}",
//                    defaults: new { controller = "Home", action = "Index" }
//                    
//                    );

                
            });

            app.UseLoginMiddleware();
            

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";
                

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
