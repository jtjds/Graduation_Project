using Graduation.Common;
using Graduation.Data.Context;
using Graduation.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Graduation.BusinessLogic.UserManager
{
    public class UserRegister:IBusiness
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

        public UserRegister(){}

        public UserRegister(Users user)
        {
            this._user = user;
        }

        //注册接口
        public Status DoRegister()
        {
            Status status = new Status();
            Users u=_userDb.Users.Add(_user);
            if (u != null)
            {
                _userDb.SaveChanges();
                status.Code = 200;
                status.Msg = "Success";
            }
            else
            {
                status.Code = 404;
                status.Msg = "Fail";//服务器错误
            }
            return status;
        }

        //解析Json
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
