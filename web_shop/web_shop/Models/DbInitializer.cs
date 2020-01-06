using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace web_shop.Models
{
    public class DbInitializer : DropCreateDatabaseAlways<PhoneContext>
    {
        protected override void Seed(PhoneContext context)
        {
            context.Phones.Add(new Phone() { Name = "Звонилка", Price = 40000, Producer = "Яндекс" });
            context.Phones.Add(new Phone() { Name = "Копалка", Price = 58000, Producer = "Мин. обороны" });
            context.Phones.Add(new Phone() { Name = "Платилка", Price = 37000, Producer = "Сбербанк" });

            base.Seed(context);
        }
    }
}