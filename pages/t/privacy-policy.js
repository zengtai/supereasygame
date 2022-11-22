import Layout from "@/components/Layout";
import { SITE_META } from "@/lib/constants";
import { getGames } from "@/lib/api";
import Head from "next/head";
export default function PrivacyPolicy({ categories }) {
  return (
    <>
      <Head>
        <title>{`${SITE_META.NAME} Privacy Policy`}</title>
      </Head>
      <Layout items={categories}>
        <div className="page">
          <h1>{SITE_META.NAME} Privacy Policy</h1>
          <p>
            At {SITE_META.NAME}, accessible from {SITE_META.URL}, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by {SITE_META.NAME} and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>
          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in {SITE_META.NAME}. This policy is
            not applicable to any information collected offline or via channels
            other than this website.
          </p>
          <h2>Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
          <h2>Information we collect</h2>
          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </p>
          <p>
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </p>
          <h2>How we use your information</h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
          <h2>Log Files</h2>
          <p>
            {SITE_META.NAME} follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services{`’`} analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users{`’`} movement on the
            website, and gathering demographic information.
          </p>
          <h2>Cookies and Web Beacons</h2>
          <p>
            Like any other website, {SITE_META.NAME} uses ‘cookies{`’`}. These
            cookies are used to store information including visitors{`’`}
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users{`’`}
            experience by customizing our web page content based on visitors
            {`’`}
            browser type and/or other information.
          </p>
          <p>
            For more general information on cookies, please read{" "}
            <a href="https://www.privacypolicyonline.com/what-are-cookies/">
              “What Are Cookies”
            </a>
            .
          </p>
          <h2>Analytics</h2>
          <p>
            We may use third-party Service Providers to monitor and analyze the
            use of our Service.
          </p>
          <ul>
            <li>
              <strong>Google Analytics</strong>
              <p>
                Google Analytics is a web analytics service offered by Google
                that tracks and reports website traffic. Google uses the data
                collected to track and monitor the use of our Service. This data
                is shared with other Google services. Google may use the
                collected data to contextualize and personalize the ads of its
                own advertising network.
              </p>
              <p>
                For more information on the privacy practices of Google, please
                visit the Google Privacy & Terms web page:{" "}
                <a href="http://www.google.com/intl/en/policies/privacy/">
                  http://www.google.com/intl/en/policies/privacy/
                </a>
              </p>
            </li>
            <li>
              <strong>Firebase</strong>
              <p>Firebase is analytics service provided by Google Inc.</p>
              <p>
                You may opt-out of certain Firebase features through your mobile
                device settings, such as your device advertising settings or by
                following the instructions provided by Google in their Privacy
                Policy:{" "}
                <a href="http://www.google.com/intl/en/policies/privacy/">
                  http://www.google.com/intl/en/policies/privacy/
                </a>
              </p>
              <p>
                We also encourage you to review the Google{`'`}s policy for
                safeguarding your data:{" "}
                <a href="https://support.google.com/analytics/answer/6004245">
                  https://support.google.com/analytics/answer/6004245
                </a>
                . For more information on what type of information Firebase
                collects, please visit please visit the Google Privacy & Terms
                web page:{" "}
                <a href="http://www.google.com/intl/en/policies/privacy/">
                  http://www.google.com/intl/en/policies/privacy/
                </a>
              </p>
            </li>
          </ul>
          <h2>Google DoubleClick DART Cookie</h2>
          <p>
            Google is one of a third-party vendor on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to www.website.com and other sites on the
            internet. However, visitors may choose to decline the use of DART
            cookies by visiting the Google ad and content network Privacy Policy
            at the following URL –{" "}
            <a href="https://policies.google.com/technologies/ads">
              https://policies.google.com/technologies/ads
            </a>
          </p>
          <h2>Advertising Partners Privacy Policies</h2>
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of {SITE_META.NAME}.
          </p>
          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on {SITE_META.NAME},
            which are sent directly to users{`’`} browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
          </p>
          <ul>
            <li>
              <strong>AdMob by Google</strong>
              <p>AdMob by Google is provided by Google Inc.</p>
              <p>
                You can opt-out from AdMob by Google service by following the
                instructions described by Google:{" "}
                <a href="https://support.google.com/ads/answer/2662922?hl=en">
                  https://support.google.com/ads/answer/2662922?hl=en
                </a>
              </p>
              <p>
                For more information on how Google uses the collected
                information, please visit the {`"`}How Google uses data when you
                use our partners{`'`} sites or app{`"`} page:{" "}
                <a href="http://www.google.com/policies/privacy/partners/">
                  http://www.google.com/policies/privacy/partners/
                </a>
                or visit the Privacy Policy of Google:{" "}
                <a href="http://www.google.com/policies/privacy/">
                  http://www.google.com/policies/privacy/
                </a>
              </p>
            </li>
          </ul>
          <p>
            Note that {SITE_META.NAME} has no access to or control over these
            cookies that are used by third-party advertisers.
          </p>
          <h2>Third Party Privacy Policies</h2>
          <p>
            {SITE_META.NAME}
            {`’`}s Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.
          </p>
          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers{`’`}
            respective websites.
          </p>
          <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </p>
          <p>
            Request that a business that collects a consumer{`’`}s personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </p>
          <p>
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </p>
          <p>
            Request that a business that sells a consumer{`’`}s personal data,
            not sell the consumer{`’`}s personal data.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
          <h2>GDPR Data Protection Rights</h2>
          <p>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <p>
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </p>
          <p>
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </p>
          <p>
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
          </p>
          <p>
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </p>
          <p>
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
          </p>
          <p>
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
          <h2>Children{`’`}s Information</h2>
          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>
          <p>
            {SITE_META.NAME} does not knowingly collect any Personal
            Identifiable Information from children under the age of 13. If you
            think that your child provided this kind of information on our
            website, we strongly encourage you to contact us immediately and we
            will do our best efforts to promptly remove such information from
            our records.
          </p>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const categories = await getGames().then((res) => res.categories);

  return {
    props: {
      categories,
    },
  };
};
