using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Graduation.Startup))]
namespace Graduation
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
