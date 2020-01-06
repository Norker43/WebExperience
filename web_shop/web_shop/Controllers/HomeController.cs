using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using web_shop.Models;

namespace web_shop.Controllers
{
    public class HomeController : Controller
    {
        PhoneContext db = new PhoneContext();

        public ActionResult Index()
        {
            IEnumerable<Phone> phones = db.Phones;
            ViewBag.Phones = phones;

            return View();
        }
    }
}