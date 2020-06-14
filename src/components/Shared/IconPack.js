import React from "react"

export default function() {
  const socialIcons = [
    {
      name: "Linkedin",
      icon: "fa-linkedin",
      bg: "#2867B2",
      link:
        "https://www.linkedin.com/company/sheeranalyticsandinsightsprivatelimited/",
    },
    {
      name: "Facebook",
      icon: "fa-facebook-square",
      bg: "#4267B2",
      link: "https://www.facebook.com/Sheeranalyticsandinsights",
    },
    {
      name: "Twitter",
      icon: "fa-twitter-square",
      bg: "#1DA1F2",
      link: "https://twitter.com/SheerAnalytics",
    },
    {
      name: "YouTube",
      icon: "fa-youtube-play",
      bg: "#FF0000",
      link: "https://www.youtube.com/channel/UCLSMB1jn1MUFfFX9Ap1435A",
    },
    {
      name: "Instagram",
      icon: "fa-instagram",
      bg: "#E1306C",
      link: "https://www.instagram.com/sheeranalyticsandinsights/",
    },
  ]

  return socialIcons.map(e => {
    return (
      <a
        href={e.link}
        className="col-md-2 col-xs-4 p-2 m-2 text-center"
        style={{ backgroundColor: e.bg, color: "white" }}
      >
        <i className={`fa ${e.icon} fa-lg`}></i>
      </a>
    )
  })
}
