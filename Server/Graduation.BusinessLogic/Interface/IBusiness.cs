using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Graduation.Model;

namespace Graduation.BusinessLogic
{
    interface IBusiness
    {
        Users GetUserFromJson(string data);
    }
}
