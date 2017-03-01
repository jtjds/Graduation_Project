using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Graduation.Model;
using Graduation.BusinessLogic.UserManager;

namespace Graduation.Controllers.UserController
{
    public class UserController: Controller
    {
        [HttpPost]
        public JsonResult Login(Users user)
        {
            int msg = 0;
            UserLogin login = new UserLogin(user);
            msg=login.DoLogin();
            return Json(msg);
        }

        public JsonResult Register(Users user)
        {
            int msg = 0;
            UserRegister register = new UserRegister(user);
            msg=register.DoRegister();
            return Json(msg);
        }
    }
}