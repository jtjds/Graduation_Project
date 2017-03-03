using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Graduation.Model
{
    [DataContract]
    [Serializable]
    public class Users
    {
        public Guid Id { get; set; }
        [DataMember]
        public string UserName { get; set; }
        [DataMember]
        public string PassWord { get; set; }
        [DataMember]
        public string Email { get; set; }
        public DateTime LastLoginTime { get; set; }

    }
}
