import syndicateLogo from "../assets/syndicate.svg"
import customizedReportLogo from "../assets/customized.png"
import businessConsultingLogo from "../assets/consultancy_new.png"
import databaseSolutionsLogo from "../assets/databaseSolutions.svg"
import companyProfileLogo from "../assets/company-profile_new.png"
import itSolutionsLogo from "../assets/itsolutio.png"

export default function() {
  return [
    {
      itemSrc: syndicateLogo,
      title: "Syndicate Reports",
      link: "/syndicate-reports",
      borderColor: "rgb(122, 45, 150)",
      hoverHeading: "Buy Reports Online",
      hoverText:
        "Find best, in-depth and comprehensive business market research reports in the form of raw data, presentations and market reports. Buy reports online. Gain global market insight.",
    },
    {
      itemSrc: customizedReportLogo,
      title: "Customized Reports",
      link: "/passport-reports",
      borderColor: "rgb(0, 32, 96)",
      hoverHeading: "Order Customized Reports Online",
      hoverText:
        "Order customized reports online through our website and get tailor made approach for various market research topics. With the customized market reports you can frame the best strategies for your business.",
    },
    {
      itemSrc: businessConsultingLogo,
      title: "Business Consulting",
      link: "/consulting-solutions",
      borderColor: "rgb(0, 112, 192)",
      hoverHeading: "Best Consulting Services",
      hoverText:
        "Our best consulting services provides you with a cost-effective consultation session so that you can identify the various growth opportunities and focus on exploring the market.",
    },
    {
      itemSrc: databaseSolutionsLogo,
      title: "Database Solutions",
      link: "/data-market-monitoring",
      borderColor: "rgb(0, 176, 80)",
      hoverHeading: "Data Market Monitoring",
      hoverText:
        "With the help of our data market monitoring make the most of enterprise data analysis. Advanced data science landscape helps increase the growth opportunities for your business.",
    },
    {
      itemSrc: companyProfileLogo,
      title: "Company Profiles",
      link: "/company-profile",
      borderColor: "rgb(255, 192, 0)",
      hoverHeading: "Company Intelligence Analysis",
      hoverText:
        " The best market research company provides you with the best company intelligence analysis of your competitors in the market. Get business market intelligence and company profiling service.",
    },
    {
      itemSrc: itSolutionsLogo,
      title: "IT Solutions",
      link: "/it-solution-consulting",
      borderColor: "rgb(255, 0, 0)",
      hoverHeading: "IT Solutions & Service Consulting",
      hoverText:
        "End to end IT services for E-Commerce, Mobile App development, Software Development, Search Engine Optimization (SEO), Digital Marketing and Cloud Implementation.",
    },
  ]
}
