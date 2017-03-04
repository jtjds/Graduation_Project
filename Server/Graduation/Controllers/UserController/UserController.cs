using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Graduation.Model;
using Graduation.BusinessLogic.UserManager;
using Graduation.BusinessLogic;
using Newtonsoft.Json;
using System.Web.Script.Serialization;
using Graduation.Common;
using System.IO;

namespace Graduation.Controllers.UserController
{
    public class UserController: Controller
    {
        [HttpPost]
        public JsonResult Login()
        {
            Status msg = new Status();
            UserLogin login = new UserLogin();
            string request=(HttpContext.Items["param"].ToString())==null?string.Empty: (HttpContext.Items["param"].ToString());
            string data = string.Empty;
            if (Request.IsAjaxRequest())
            {
                var stream = HttpContext.Request.InputStream;
                data = new StreamReader(stream).ReadToEnd();
            }
           
            if (string.IsNullOrEmpty(data))
            {
                msg.Code = 500;
                msg.Msg = Res.Resource.PARAMETERISNULL.ToString();
                return Json(msg, JsonRequestBehavior.AllowGet);
            }
            Users user = login.GetUserFromJson(data);
            login.User = user;
            msg=login.DoLogin();
            return Json(msg, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult Register()
        {
            Status msg = new Status();
            UserRegister register = new UserRegister();
            string data = string.Empty;
            if (Request.IsAjaxRequest())
            {
                var stream = HttpContext.Request.InputStream;
                data = new StreamReader(stream).ReadToEnd();
            }
            if (string.IsNullOrEmpty(data))
            {
                msg.Code = 500;
                msg.Msg = Res.Resource.PARAMETERISNULL.ToString();
                return Json(msg, JsonRequestBehavior.AllowGet);
            }
            Users user=register.GetUserFromJson(data);
            register.User = user;
            msg=register.DoRegister();
            return Json(msg, JsonRequestBehavior.AllowGet);//发布时去掉AllowGet
        }
    }
}