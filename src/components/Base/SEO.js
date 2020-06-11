import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
function SEO({ description, lang, meta, keywords, metaTitle, siteTitle }) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription =
                    description || data.site.siteMetadata.description;
                const title = metaTitle || data.site.siteMetadata.title;
                return (
                    <Helmet
                        htmlAttributes={{
                            lang
                        }}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription
                            },
                            {
                                property: `og:title`,
                                content: title
                            },
                            {
                                property: `og:description`,
                                content: metaDescription
                            },
                            {
                                property: `og:type`,
                                content: `website`
                            },
                            {
                                name: `twitter:card`,
                                content: `summary`
                            },
                            {
                                name: `twitter:title`,
                                content: title
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription
                            },
                            {
                                name: `keywords`,
                                content: keywords
                            }
                        ]
                            // .concat(
                            //     keywords.length > 0
                            //         ? {
                            //             name: `keywords`,
                            //             content: keywords
                            //         }
                            //         : []
                            // )
                            .concat(meta)}
                    >
                        <title>{siteTitle}</title>
                    </Helmet>
                );
            }}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: []
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        url
      }
    }
  }
`;