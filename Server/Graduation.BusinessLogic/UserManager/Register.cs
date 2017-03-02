using Graduation.Data.Context;
using Graduation.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Graduation.BusinessLogic.UserManager
{
    public class UserRegister
    {
        private UsersDBContext _userDb = new UsersDBContext();
        private Users _user = new Users();
        public UserRegister()
        {

        }

        public UserRegister(Users user)
        {
            this._user = user;
        }

        public int DoRegister()
        {
            int Result = 0;
            Users u=_userDb.Users.Add(_user);
            if (u != null)
            {
                Result = 1;
            }
            else
            {
                Result = -1;
            }
            return Result;
        }
    }
}
