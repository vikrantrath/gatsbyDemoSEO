import React from "react"
import consultingBG from '../../assets/consultingBG.jpg'

export default function() {
  return (
    <section style={{margin: 0}}>
        <div
          className="col-md-12"
          style={{background: "#58b0da29",color: "#443636",paddingTop: "3em",paddingBottom: "2em"}}
        >
          <div style={{width: "100%"}}>
            <p>
              Business consultant services are aimed towards providing
              management consulting to enable organizations to achieve their
              goals and objectives by attaining improved efficiency and
              performance. Being among the best-consulting services providers,
              our business consulting professionals provide reliable business
              analysis and solutions, that help companies meet their
              organizational and business goals. <br />
              We are a business consulting company offering a wide array of
              consultation services for varied business houses. Check out our
              list of consulting services to know more about what to opt for.{" "}
              <br />
              • Identify problem
              <br />
              • Provide objective
              <br />
              • Eliminate staffs
              <br />
              • Create new business
              <br />
              • Expertise in a specific market
              <br />
              • Teach and train employees
              <br />
              • Recuperate an organization
              <br />
              • Influence on other people, such as lobbyists
              <br />
              The business consultant services generally add value in five
              important areas:
              <br />
              1. Management and Strategy: If a business owner wants to expand
              the business geographically, reorganize the efficiency and
              cost-effectiveness of the business, extend product portfolio, then
              there is a need to hire an experienced consultant.
              <br />
              2. Operations: If a business wants to improve the quality and
              efficiency of the process of production then an operation
              consultant can help create and implement new ways of doing that.{" "}
              <br />
              3. IT: The need of IT consultants is growing at a rapid pace. The
              demand for new technologies is creating an impact on the middle
              market companies which is increasing its demand. An IT consultant
              can help a business whether they want to develop a new system or
              integrate old systems.
              <br />
              4. HR: If a company wants to improve their overall employees’
              satisfaction, retain top performers, and recruit top talents, HR
              is mandatory. An HR can help improve performance-related feedback
              and evaluate the team.
              <br />
              5. Marketing: A market consultant can help the company in the
              various processes such as if the company needs a new logo, new
              strategy for social media for interacting with customers or new
              market positions for a brand. <br />
              So, what are you looking for? Let us know how we can be of
              service. <br />
            </p>
          </div>
        </div>
        <div
          className="row"
          style={{padding: "0",background: "white",marginTop: "0"}}
        >
          <div className="col-md-6" style={{padding: "0px"}}>
            <img
              src={consultingBG}
              style={{height: "auto",width: "100%"}}
            />
          </div>
          <div className="col-md-6 soldata">
            <div style={{marginTop: "1em"}}>
              <h3>REQUEST A CONSULTATION TODAY</h3>
              <p style={{marginTop: "1em",fontSize: "1.3em"}}>
                We help clients identify growth opportunities and support
                functions from strategy, finance, innovation and insights, to
                category and marketing teams.
                <br />
                In more than 8,000 projects, we have demonstrated our expertise
                in consumer goods categories, industrial sectors and B2B
                industries. We focus on building collaborative partnerships with
                clients, constructing studies exploring market sizing,
                competitive intelligence, trend analysis, market attractiveness
                and marketing claims. Our cost-effective research will change
                the way you think about, approach and take action in global
                markets.
              </p>
              <div className="consultant-section double-grid" style={{margin: "0px"}}>
                <a
                  href="/contact-us"
                  className="btn btn-lg btn-primary"
                  style={{margin: "0px"}}
                  role="button"
                >
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
