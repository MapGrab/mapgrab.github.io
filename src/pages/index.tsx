import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const LogoSvg = require("@site/static/img/base-logo.svg").default;

  const frameworkList = [
    {
      title: "Playwright",
      Svg: require("@site/static/img/playwright.svg").default,
    },
    {
      title: "Cypress",
      Svg: require("@site/static/img/cypress.svg").default,
    },
    {
      title: "Selenium",
      Svg: require("@site/static/img/selenium.svg").default,
    },
  ];

  const mapEngines = [
    {
      title: "MapLibre",
      Svg: require("@site/static/img/maplibre.svg").default,
    },
    {
      title: "MapBox",
      Svg: require("@site/static/img/mapbox-logo-black.svg").default,
    },
  ];

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("background", styles.background)}></div>
      <div className={clsx("container", styles.container)}>
        <div className={clsx("map-engine--logo", styles.engineLogo)}>
          {mapEngines.map(({ Svg, title }, idx) => (
            <Svg role="img" alt={title}></Svg>
          ))}
        </div>
        <div className={clsx("text", styles.text)}>
          <LogoSvg
            role="img"
            style={{ width: "140px", height: "100px" }}
          ></LogoSvg>

          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Getting started
            </Link>
            <iframe src="https://github.com/sponsors/MapGrab/button" title="Sponsor MapGrab" height="32" width="114" style={{ marginTop: '16px', border: 0, borderRadius: '6px' }}></iframe>
          </div>
        </div>

        <div className={clsx("test-framework--logo", styles.testFrameworkLogo)}>
          {frameworkList.map(({ Svg, title }, idx) => (
            <Svg role="img" alt={title}></Svg>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`MapGrab Maps testing tool`}
      description="Tool to write automated tests to MapLibre GL JS and MapBox GL JS map library"
    >
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
