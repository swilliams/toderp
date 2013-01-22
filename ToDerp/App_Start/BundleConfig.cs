using System.Web;
using System.Web.Optimization;

namespace ToDerp
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/derp").Include(
                        "~/Scripts/lib/jquery-1.8.3.js", 
                        "~/Scripts/lib/underscore.js",
                        "~/Scripts/lib/handlebars-1.0.rc.1.js",
                        "~/Scripts/lib/bootstrap.js",
                        "~/Scripts/lib/backbone.js",
                        "~/Scripts/app.js"));


            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/lib/modernizr-*"));

            bundles.Add(new StyleBundle("~/bundles/style").Include(
                "~/Content/bootstrap.css",
                "~/Content/app.css"
                ));

        }
    }
}