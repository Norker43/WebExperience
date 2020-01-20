using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace web_shop.Models
{
    public class PhoneContext : DbContext
    {
        public PhoneContext() : base("PhoneContext") { }

        public DbSet<Phone> Phones { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Producer> Producers { get; set; }
    }
}