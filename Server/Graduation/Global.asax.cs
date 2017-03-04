using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace Graduation
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            //启动时配置Log4Net
            log4net.Config.XmlConfigurator.Configure();
        }

        protected void Application_Error()
        {
            Common.LogHelper.WriteLog(HttpContext.Current.Error.Message, HttpContext.Current.Error);
        }
    }
}
