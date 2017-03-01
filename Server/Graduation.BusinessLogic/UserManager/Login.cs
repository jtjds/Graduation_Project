using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Graduation.Model;
using Graduation.Data.Context;

namespace Graduation.BusinessLogic.UserManager
{
    public class UserLogin
    {
        private UsersDBContext _userDb = new UsersDBContext();
        private Users _user = new Users();
        public UserLogin(Users user)
        {
            this._user = user;
        }

        public int DoLogin()
        {
            Users findUser = _userDb.Users.FirstOrDefault<Users>(a => a.UserName == _user.UserName && a.PassWord == _user.PassWord);
            if (findUser != null)
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
    }
}
