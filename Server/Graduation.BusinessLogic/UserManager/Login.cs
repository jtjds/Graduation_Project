using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Graduation.Model;
using Graduation.Data.Context;
using Graduation.Common;


namespace Graduation.BusinessLogic.UserManager
{
    public class UserLogin:IBusiness
    {
        private UsersDBContext _userDb = new UsersDBContext();
        private Users _user = new Users();

        public Users User
        {
            get
            {
                return _user;
            }

            set
            {
                _user = value;
            }
        }

        public UserLogin()
        {

        }
        public UserLogin(Users user)
        {
            this._user = user;
        }

        //登录接口
        public Status DoLogin()
        {
            Users findUser = _userDb.Users.FirstOrDefault<Users>(a => a.UserName == _user.UserName && a.PassWord == _user.PassWord);
            Status status = new Status();
            if (findUser != null)
            {
                status.Code = 200;
                status.Msg = Res.Resource.SUCCESS.ToString();
            }
            else
            {
                status.Code = 404;
                status.Msg = Res.Resource.NOTFOUND.ToString();
            }
            LogHelper.WriteLog(status.Msg);
            return status;
        }

        public Users GetUserFromJson(string data)
        {
            Users u = JsonHelper.ParseFromJson<Users>(data);
            if (u != null)
            {
                u.Id = Guid.NewGuid();
                u.LastLoginTime = DateTime.Now;
            }
            return u;
        }
    }
}
