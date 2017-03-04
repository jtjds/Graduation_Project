using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Graduation.HttpModules
{
    public class JsonHttpModules : IHttpModule
    {
        public void Dispose()
        {
            
        }

        public void Init(HttpApplication app)
        {
            app.PreSendRequestContent += App_PreSendRequestContent;
            app.PostAuthorizeRequest += App_PostAuthorizeRequest;
        }

        private void App_PostAuthorizeRequest(object sender, EventArgs e)
        {
            try
            {
                HttpApplication app = sender as HttpApplication;
                HttpContext context = app.Context;
                string json = app.Context.Request.Form[0];
                context.Items.Add("param", json);
                Common.LogHelper.WriteLog("get parameter success!");
            }
            catch (Exception ex)
            {
                Common.LogHelper.WriteLog("",ex);
            }
        }

        private void App_PreSendRequestContent(object sender, EventArgs e)
        {
            HttpApplication app = sender as HttpApplication;
            HttpContext context=app.Context;
            int state=context.Response.StatusCode;
            Common.LogHelper.WriteLog("state:"+state);
        }
    }
}