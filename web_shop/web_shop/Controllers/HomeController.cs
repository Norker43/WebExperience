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
            Random random = new Random();

            if (HttpContext.Session.IsNewSession)
            {
                Session["ip"] = HttpContext.Request.UserHostAddress;
            }
            Response.Cookies["id"].Value = Session.SessionID.ToString();

            IEnumerable<City> Cities = db.Cities;
            ViewBag.Cities = Cities;
            IEnumerable<Phone> phones = db.Phones;
            ViewBag.Phones = phones;
            IEnumerable<Producer> Producers = db.Producers;
            ViewBag.Producers = Producers;

            return View();
        }

        public void Buy()
        {
            if (!HttpContext.Session.IsNewSession)
            {
                Session["item"] = HttpContext.Items.Keys;
            }
        }
    }
}