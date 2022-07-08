import Layout from "../../components/Layout";
import { SITE_META } from "../../lib/constants";
import { getCategories } from "../../lib/api";
export default function Terms({ categories }) {
  return (
    <>
      <Layout items={categories}>
        <div className="p-6 xl:mx-auto xl:w-[1120px]">
          <div className="text-xl font-bold">{SITE_META.name} Terms of Use</div>
          <p className="my-2">
            The {SITE_META.name} website located at {SITE_META.url} is a
            copyrighted work belonging to {SITE_META.name}. Certain features of
            the Site may be subject to additional guidelines, terms, or rules,
            which will be posted on the Site in connection with such features.
          </p>
          <p className="my-2">
            All such additional terms, guidelines, and rules are incorporated by
            reference into these Terms.
          </p>
          <p className="my-2">
            These Terms of Use described the legally binding terms and
            conditions that oversee your use of the Site.&nbsp;BY LOGGING INTO
            THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent
            that you have the authority and capacity to enter into these
            Terms.&nbsp;YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE
            SITE. IF YOU DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO
            NOT LOG INTO AND/OR USE THE SITE.
          </p>
          <p className="my-2">
            These terms require the use of arbitration Section 10.2 on an
            individual basis to resolve disputes and also limit the remedies
            available to you in the event of a dispute.
          </p>
          <h2 className="text-md my-3 font-bold">Access to the Site</h2>
          <p className="my-2">
            <strong>Subject to these Terms.</strong> Company grants you a
            non-transferable, non-exclusive, revocable, limited license to
            access the Site solely for your own personal, noncommercial use.
          </p>
          <p className="my-2">
            <strong>Certain Restrictions.</strong> The rights approved to you in
            these Terms are subject to the following restrictions: (a) you shall
            not sell, rent, lease, transfer, assign, distribute, host, or
            otherwise commercially exploit the Site; (b) you shall not change,
            make derivative works of, disassemble, reverse compile or reverse
            engineer any part of the Site; (c) you shall not access the Site in
            order to build a similar or competitive website; and (d) except as
            expressly stated herein, no part of the Site may be copied,
            reproduced, distributed, republished, downloaded, displayed, posted
            or transmitted in any form or by any means unless otherwise
            indicated, any future release, update, or other addition to
            functionality of the Site shall be subject to these Terms.&nbsp; All
            copyright and other proprietary notices on the Site must be retained
            on all copies thereof.
          </p>
          <p className="my-2">
            Company reserves the right to change, suspend, or cease the Site
            with or without notice to you.&nbsp; You approved that Company will
            not be held liable to you or any third-party for any change,
            interruption, or termination of the Site or any part.
          </p>
          <p className="my-2">
            <strong>No Support or Maintenance.</strong> You agree that Company
            will have no obligation to provide you with any support in
            connection with the Site.
          </p>
          <p className="my-2">
            Excluding any User Content that you may provide, you are aware that
            all the intellectual property rights, including copyrights, patents,
            trademarks, and trade secrets, in the Site and its content are owned
            by Company or Company’s suppliers. Note that these Terms and access
            to the Site do not give you any rights, title or interest in or to
            any intellectual property rights, except for the limited access
            rights expressed in Section 2.1. Company and its suppliers reserve
            all rights not granted in these Terms.
          </p>
          <h2 className="text-md my-3 font-bold">
            Third-Party Links &amp; Ads; Other Users
          </h2>
          <p className="my-2">
            <strong>Third-Party Links &amp; Ads.</strong> The Site may contain
            links to third-party websites and services, and/or display
            advertisements for third-parties.&nbsp; Such Third-Party Links &amp;
            Ads are not under the control of Company, and Company is not
            responsible for any Third-Party Links &amp; Ads.&nbsp; Company
            provides access to these Third-Party Links &amp; Ads only as a
            convenience to you, and does not review, approve, monitor, endorse,
            warrant, or make any representations with respect to Third-Party
            Links &amp; Ads.&nbsp; You use all Third-Party Links &amp; Ads at
            your own risk, and should apply a suitable level of caution and
            discretion in doing so. When you click on any of the Third-Party
            Links &amp; Ads, the applicable third party’s terms and policies
            apply, including the third party’s privacy and data gathering
            practices.
          </p>
          <p className="my-2">
            <strong>Other Users.</strong> Each Site user is solely responsible
            for any and all of its own User Content.&nbsp; Because we do not
            control User Content, you acknowledge and agree that we are not
            responsible for any User Content, whether provided by you or by
            others.&nbsp; You agree that Company will not be responsible for any
            loss or damage incurred as the result of any such
            interactions.&nbsp; If there is a dispute between you and any Site
            user, we are under no obligation to become involved.
          </p>
          <p className="my-2">
            You hereby release and forever discharge the Company and our
            officers, employees, agents, successors, and assigns from, and
            hereby waive and relinquish, each and every past, present and future
            dispute, claim, controversy, demand, right, obligation, liability,
            action and cause of action of every kind and nature, that has arisen
            or arises directly or indirectly out of, or that relates directly or
            indirectly to, the Site. If you are a California resident, you
            hereby waive California civil code section 1542 in connection with
            the foregoing, which states: “a general release does not extend to
            claims which the creditor does not know or suspect to exist in his
            or her favor at the time of executing the release, which if known by
            him or her must have materially affected his or her settlement with
            the debtor.”
          </p>
          <p className="my-2">
            <strong>Cookies and Web Beacons.</strong> Like any other website,
            {SITE_META.name} uses ‘cookies’. These cookies are used to store
            information including visitors’ preferences, and the pages on the
            website that the visitor accessed or visited. The information is
            used to optimize the users’ experience by customizing our web page
            content based on visitors’ browser type and/or other information.
          </p>
          <p className="my-2">
            <strong>Google DoubleClick DART Cookie.</strong> Google is one of a
            third-party vendor on our site. It also uses cookies, known as DART
            cookies, to serve ads to our site visitors based upon their visit to
            www.website.com and other sites on the internet. However, visitors
            may choose to decline the use of DART cookies by visiting the Google
            ad and content network Privacy Policy at the following URL –{" "}
            <a href="https://policies.google.com/technologies/ads">
              https://policies.google.com/technologies/ads
            </a>
          </p>
          <h2 className="text-md my-3 font-bold">Disclaimers</h2>
          <p className="my-2">
            The site is provided on an “as-is” and “as available” basis, and
            company and our suppliers expressly disclaim any and all warranties
            and conditions of any kind, whether express, implied, or statutory,
            including all warranties or conditions of merchantability, fitness
            for a particular purpose, title, quiet enjoyment, accuracy, or
            non-infringement.&nbsp; We and our suppliers make not guarantee that
            the site will meet your requirements, will be available on an
            uninterrupted, timely, secure, or error-free basis, or will be
            accurate, reliable, free of viruses or other harmful code, complete,
            legal, or safe.&nbsp; If applicable law requires any warranties with
            respect to the site, all such warranties are limited in duration to
            ninety (90) days from the date of first use.
          </p>
          <p className="my-2">
            Some jurisdictions do not allow the exclusion of implied warranties,
            so the above exclusion may not apply to you.&nbsp; Some
            jurisdictions do not allow limitations on how long an implied
            warranty lasts, so the above limitation may not apply to you.
          </p>
          <h2 className="text-md my-3 font-bold">Limitation on Liability</h2>
          <p className="my-2">
            To the maximum extent permitted by law, in no event shall company or
            our suppliers be liable to you or any third-party for any lost
            profits, lost data, costs of procurement of substitute products, or
            any indirect, consequential, exemplary, incidental, special or
            punitive damages arising from or relating to these terms or your use
            of, or incapability to use the site even if company has been advised
            of the possibility of such damages.&nbsp; Access to and use of the
            site is at your own discretion and risk, and you will be solely
            responsible for any damage to your device or computer system, or
            loss of data resulting therefrom.
          </p>
          <p className="my-2">
            To the maximum extent permitted by law, notwithstanding anything to
            the contrary contained herein, our liability to you for any damages
            arising from or related to this agreement, will at all times be
            limited to a maximum of fifty U.S. dollars (u.s. $50). The existence
            of more than one claim will not enlarge this limit.&nbsp; You agree
            that our suppliers will have no liability of any kind arising from
            or relating to this agreement.
          </p>
          <p className="my-2">
            Some jurisdictions do not allow the limitation or exclusion of
            liability for incidental or consequential damages, so the above
            limitation or exclusion may not apply to you.
          </p>
          <p className="my-2">
            <strong>Term and Termination.</strong> Subject to this Section,
            these Terms will remain in full force and effect while you use the
            Site.&nbsp; We may suspend or terminate your rights to use the Site
            at any time for any reason at our sole discretion, including for any
            use of the Site in violation of these Terms.&nbsp; Upon termination
            of your rights under these Terms, your Account and right to access
            and use the Site will terminate immediately.&nbsp; You understand
            that any termination of your Account may involve deletion of your
            User Content associated with your Account from our live
            databases.&nbsp; Company will not have any liability whatsoever to
            you for any termination of your rights under these Terms.&nbsp; Even
            after your rights under these Terms are terminated, the following
            provisions of these Terms will remain in effect: Sections 2 through
            2.5, Section 3 and Sections 4 through 10.
          </p>
          <h2 className="text-md my-3 font-bold">Copyright Policy.</h2>
          <p className="my-2">
            Company respects the intellectual property of others and asks that
            users of our Site do the same.&nbsp; In connection with our Site, we
            have adopted and implemented a policy respecting copyright law that
            provides for the removal of any infringing materials and for the
            termination of users of our online Site who are repeated infringers
            of intellectual property rights, including copyrights.&nbsp; If you
            believe that one of our users is, through the use of our Site,
            unlawfully infringing the copyright(s) in a work, and wish to have
            the allegedly infringing material removed, the following information
            in the form of a written notification (pursuant to 17 U.S.C. §
            512(c)) must be provided to our designated Copyright Agent:
          </p>
          <ul className="my-2 ml-4 list-outside list-disc">
            <li>your physical or electronic signature;</li>
            <li>
              identification of the copyrighted work(s) that you claim to have
              been infringed;
            </li>
            <li>
              identification of the material on our services that you claim is
              infringing and that you request us to remove;
            </li>
            <li>
              sufficient information to permit us to locate such material;
            </li>
            <li>your address, telephone number, and e-mail address;</li>
            <li>
              a statement that you have a good faith belief that use of the
              objectionable material is not authorized by the copyright owner,
              its agent, or under the law; and
            </li>
            <li>
              a statement that the information in the notification is accurate,
              and under penalty of perjury, that you are either the owner of the
              copyright that has allegedly been infringed or that you are
              authorized to act on behalf of the copyright owner.
            </li>
          </ul>
          <p className="my-2">
            Please note that, pursuant to 17 U.S.C. § 512(f), any
            misrepresentation of material fact in a written notification
            automatically subjects the complaining party to liability for any
            damages, costs and attorney’s fees incurred by us in connection with
            the written notification and allegation of copyright infringement.
          </p>
          <h2 className="text-md my-3 font-bold">General</h2>
          <p className="my-2">
            These Terms are subject to occasional revision, and if we make any
            substantial changes, we may notify you by sending you an e-mail to
            the last e-mail address you provided to us and/or by prominently
            posting notice of the changes on our Site.&nbsp; You are responsible
            for providing us with your most current e-mail address.&nbsp; In the
            event that the last e-mail address that you have provided us is not
            valid our dispatch of the e-mail containing such notice will
            nonetheless constitute effective notice of the changes described in
            the notice.&nbsp; Any changes to these Terms will be effective upon
            the earliest of thirty (30) calendar days following our dispatch of
            an e-mail notice to you or thirty (30) calendar days following our
            posting of notice of the changes on our Site.&nbsp; These changes
            will be effective immediately for new users of our Site.&nbsp;
            Continued use of our Site following notice of such changes shall
            indicate your acknowledgement of such changes and agreement to be
            bound by the terms and conditions of such changes. Dispute
            Resolution. Please read this Arbitration Agreement carefully. It is
            part of your contract with Company and affects your rights.&nbsp; It
            contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS
            ACTION WAIVER.
          </p>
          <p className="my-2">
            <strong>Applicability of Arbitration Agreement.</strong> All claims
            and disputes in connection with the Terms or the use of any product
            or service provided by the Company that cannot be resolved
            informally or in small claims court shall be resolved by binding
            arbitration on an individual basis under the terms of this
            Arbitration Agreement.&nbsp; Unless otherwise agreed to, all
            arbitration proceedings shall be held in English.&nbsp; This
            Arbitration Agreement applies to you and the Company, and to any
            subsidiaries, affiliates, agents, employees, predecessors in
            interest, successors, and assigns, as well as all authorized or
            unauthorized users or beneficiaries of services or goods provided
            under the Terms.
          </p>
          <p className="my-2">
            <strong>Notice Requirement and Informal Dispute Resolution.</strong>{" "}
            Before either party may seek arbitration, the party must first send
            to the other party a written Notice of Dispute describing the nature
            and basis of the claim or dispute, and the requested relief.&nbsp; A
            Notice to the Company should be sent to: Singapore. After the Notice
            is received, you and the Company may attempt to resolve the claim or
            dispute informally.&nbsp; If you and the Company do not resolve the
            claim or dispute within thirty (30) days after the Notice is
            received, either party may begin an arbitration proceeding.&nbsp;
            The amount of any settlement offer made by any party may not be
            disclosed to the arbitrator until after the arbitrator has
            determined the amount of the award to which either party is
            entitled.
          </p>
          <p className="my-2">
            <strong>Arbitration Rules.</strong> Arbitration shall be initiated
            through the American Arbitration Association, an established
            alternative dispute resolution provider that offers arbitration as
            set forth in this section.&nbsp; If AAA is not available to
            arbitrate, the parties shall agree to select an alternative ADR
            Provider.&nbsp; The rules of the ADR Provider shall govern all
            aspects of the arbitration except to the extent such rules are in
            conflict with the Terms.&nbsp; The AAA Consumer Arbitration Rules
            governing the arbitration are available online at adr.org or by
            calling the AAA at 1-800-778-7879.&nbsp; The arbitration shall be
            conducted by a single, neutral arbitrator.&nbsp; Any claims or
            disputes where the total amount of the award sought is less than Ten
            Thousand U.S. Dollars (US $10,000.00) may be resolved through
            binding non-appearance-based arbitration, at the option of the party
            seeking relief.&nbsp; For claims or disputes where the total amount
            of the award sought is Ten Thousand U.S. Dollars (US $10,000.00) or
            more, the right to a hearing will be determined by the Arbitration
            Rules.&nbsp; Any hearing will be held in a location within 100 miles
            of your residence, unless you reside outside of the United States,
            and unless the parties agree otherwise.&nbsp; If you reside outside
            of the U.S., the arbitrator shall give the parties reasonable notice
            of the date, time and place of any oral hearings. Any judgment on
            the award rendered by the arbitrator may be entered in any court of
            competent jurisdiction.&nbsp; If the arbitrator grants you an award
            that is greater than the last settlement offer that the Company made
            to you prior to the initiation of arbitration, the Company will pay
            you the greater of the award or $2,500.00.&nbsp; Each party shall
            bear its own costs and disbursements arising out of the arbitration
            and shall pay an equal share of the fees and costs of the ADR
            Provider.
          </p>
          <p className="my-2">
            <strong>
              Additional Rules for Non-Appearance Based Arbitration.
            </strong>{" "}
            If non-appearance based arbitration is elected, the arbitration
            shall be conducted by telephone, online and/or based solely on
            written submissions; the specific manner shall be chosen by the
            party initiating the arbitration.&nbsp; The arbitration shall not
            involve any personal appearance by the parties or witnesses unless
            otherwise agreed by the parties.
          </p>
          <p className="my-2">
            <strong>Time Limits.</strong> If you or the Company pursues
            arbitration, the arbitration action must be initiated and/or
            demanded within the statute of limitations and within any deadline
            imposed under the AAA Rules for the pertinent claim.
          </p>
          <p className="my-2">
            <strong>Authority of Arbitrator.</strong> If arbitration is
            initiated, the arbitrator will decide the rights and liabilities of
            you and the Company, and the dispute will not be consolidated with
            any other matters or joined with any other cases or parties.&nbsp;
            The arbitrator shall have the authority to grant motions dispositive
            of all or part of any claim.&nbsp; The arbitrator shall have the
            authority to award monetary damages, and to grant any non-monetary
            remedy or relief available to an individual under applicable law,
            the AAA Rules, and the Terms.&nbsp; The arbitrator shall issue a
            written award and statement of decision describing the essential
            findings and conclusions on which the award is based.&nbsp; The
            arbitrator has the same authority to award relief on an individual
            basis that a judge in a court of law would have.&nbsp; The award of
            the arbitrator is final and binding upon you and the Company.
          </p>
          <p className="my-2">
            <strong>Waiver of Jury Trial.</strong> THE PARTIES HEREBY WAIVE
            THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A
            TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all
            claims and disputes shall be resolved by arbitration under this
            Arbitration Agreement.&nbsp; Arbitration procedures are typically
            more limited, more efficient and less expensive than rules
            applicable in a court and are subject to very limited review by a
            court.&nbsp; In the event any litigation should arise between you
            and the Company in any state or federal court in a suit to vacate or
            enforce an arbitration award or otherwise, YOU AND THE COMPANY WAIVE
            ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be
            resolved by a judge.
          </p>
          <p className="my-2">
            <strong>Waiver of Class or Consolidated Actions.</strong> All claims
            and disputes within the scope of this arbitration agreement must be
            arbitrated or litigated on an individual basis and not on a class
            basis, and claims of more than one customer or user cannot be
            arbitrated or litigated jointly or consolidated with those of any
            other customer or user.
          </p>
          <p className="my-2">
            <strong>Confidentiality.</strong> All aspects of the arbitration
            proceeding shall be strictly confidential.&nbsp; The parties agree
            to maintain confidentiality unless otherwise required by law.&nbsp;
            This paragraph shall not prevent a party from submitting to a court
            of law any information necessary to enforce this Agreement, to
            enforce an arbitration award, or to seek injunctive or equitable
            relief.
          </p>
          <p className="my-2">
            <strong>Severability.</strong> If any part or parts of this
            Arbitration Agreement are found under the law to be invalid or
            unenforceable by a court of competent jurisdiction, then such
            specific part or parts shall be of no force and effect and shall be
            severed and the remainder of the Agreement shall continue in full
            force and effect.
          </p>
          <p className="my-2">
            <strong>Right to Waive.</strong> Any or all of the rights and
            limitations set forth in this Arbitration Agreement may be waived by
            the party against whom the claim is asserted.&nbsp; Such waiver
            shall not waive or affect any other portion of this Arbitration
            Agreement.
          </p>
          <p className="my-2">
            <strong>Survival of Agreement.</strong> This Arbitration Agreement
            will survive the termination of your relationship with Company.
          </p>
          <p className="my-2">
            <strong>Small Claims Court.</strong> Nonetheless the foregoing,
            either you or the Company may bring an individual action in small
            claims court.
          </p>
          <p className="my-2">
            <strong>Emergency Equitable Relief.</strong> Anyhow the foregoing,
            either party may seek emergency equitable relief before a state or
            federal court in order to maintain the status quo pending
            arbitration.&nbsp; A request for interim measures shall not be
            deemed a waiver of any other rights or obligations under this
            Arbitration Agreement.
          </p>
          <p className="my-2">
            <strong>Claims Not Subject to Arbitration.</strong> Notwithstanding
            the foregoing, claims of defamation, violation of the Computer Fraud
            and Abuse Act, and infringement or misappropriation of the other
            party’s patent, copyright, trademark or trade secrets shall not be
            subject to this Arbitration Agreement.
          </p>
          <p className="my-2">
            In any circumstances where the foregoing Arbitration Agreement
            permits the parties to litigate in court, the parties hereby agree
            to submit to the personal jurisdiction of the courts located within
            Netherlands County, California, for such purposes.
          </p>
          <p className="my-2">
            The Site may be subject to U.S. export control laws and may be
            subject to export or import regulations in other countries. You
            agree not to export, re-export, or transfer, directly or indirectly,
            any U.S. technical data acquired from Company, or any products
            utilizing such data, in violation of the United States export laws
            or regulations.
          </p>
          <p className="my-2">
            Company is located at the address in Section 10.8. If you are a
            California resident, you may report complaints to the Complaint
            Assistance Unit of the Division of Consumer Product of the
            California Department of Consumer Affairs by contacting them in
            writing at 400 R Street, Sacramento, CA 95814, or by telephone at
            (800) 952-5210.
          </p>
          <p className="my-2">
            <strong>Electronic Communications.</strong> The communications
            between you and Company use electronic means, whether you use the
            Site or send us emails, or whether Company posts notices on the Site
            or communicates with you via email. For contractual purposes, you
            (a) consent to receive communications from Company in an electronic
            form; and (b) agree that all terms and conditions, agreements,
            notices, disclosures, and other communications that Company provides
            to you electronically satisfy any legal obligation that such
            communications would satisfy if it were be in a hard copy writing.
          </p>
          <p className="my-2">
            <strong>Entire Terms.</strong> These Terms constitute the entire
            agreement between you and us regarding the use of the Site. Our
            failure to exercise or enforce any right or provision of these Terms
            shall not operate as a waiver of such right or provision. The
            section titles in these Terms are for convenience only and have no
            legal or contractual effect. The word “including” means “including
            without limitation”. If any provision of these Terms is held to be
            invalid or unenforceable, the other provisions of these Terms will
            be unimpaired and the invalid or unenforceable provision will be
            deemed modified so that it is valid and enforceable to the maximum
            extent permitted by law.&nbsp; Your relationship to Company is that
            of an independent contractor, and neither party is an agent or
            partner of the other.&nbsp; These Terms, and your rights and
            obligations herein, may not be assigned, subcontracted, delegated,
            or otherwise transferred by you without Company’s prior written
            consent, and any attempted assignment, subcontract, delegation, or
            transfer in violation of the foregoing will be null and void.&nbsp;
            Company may freely assign these Terms.&nbsp; The terms and
            conditions set forth in these Terms shall be binding upon assignees.
          </p>
          <p className="my-2">
            <strong>Your Privacy.</strong> Please read our{" "}
            <a href="./privacy-policy">Privacy Policy</a>.
          </p>
          <p className="my-2">
            <strong>Copyright/Trademark Information.</strong> Copyright ©. All
            rights reserved.&nbsp; All trademarks, logos and service marks
            displayed on the Site are our property or the property of other
            third-parties. You are not permitted to use these Marks without our
            prior written consent or the consent of such third party which may
            own the Marks.
          </p>
          <h2 className="text-md my-3 font-bold">Contact Information</h2>
          <p className="my-2">Address: Singapore</p>
          <p className="my-2">Email: biz@uptap.com</p>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const categories = await getCategories();

  return {
    props: {
      categories,
    },
  };
};
