using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Graduation.Model;

namespace Graduation.Data
{
    public class BooksDBContext:DbContext
    {
        public DbSet<Book> Books { get; set; }
    }
}
