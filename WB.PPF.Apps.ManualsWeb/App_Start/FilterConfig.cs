using System.Web;
using System.Web.Mvc;

namespace WB.PPF.Apps.ManualsWeb
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
