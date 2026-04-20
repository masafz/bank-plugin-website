import { useState, useRef, useEffect } from "react";

export default function TncModal({ isOpen = false, onAgree, onClose }) {
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [shake, setShake] = useState(false)
  const scrollRef = useRef(null);

  const handleBackdropClick = () => {
  setShake(true);
  setTimeout(() => setShake(false), 500);
};

  useEffect(() => {
    if (isOpen) setScrolledToBottom(false);
  }, [isOpen]);

  const handleScroll = (e) => {
    const el = e.target;
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 40) {
      setScrolledToBottom(true);
    }
  };

  if (!isOpen) return null;

  return (
    <>
    <style>{`
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    15%  { transform: translateX(-8px); }
    30%  { transform: translateX(8px); }
    45%  { transform: translateX(-6px); }
    60%  { transform: translateX(6px); }
    75%  { transform: translateX(-3px); }
    90%  { transform: translateX(3px); }
  }
`}</style>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-6" onClick={handleBackdropClick}>
  <div
    className="w-full max-w-3xl bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden max-h-[92vh]"
    onClick={(e) => e.stopPropagation()}
    style={shake ? { animation: "shake 0.5s ease" } : {}}
  >

        {/* Scrollable body */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 text-sm text-gray-700 leading-relaxed"
        >
          <h2 className="text-center text-xl font-bold text-gray-900 mb-2">
            ICICI Bank Limited
          </h2>
          <h3 className="text-center text-sm font-semibold underline text-gray-800 mb-5 tracking-wide">
            TERMS &amp; CONDITIONS – BANK PLUGIN ON ERP PLATFORM
          </h3>

          <p className="mb-6 text-justify text-gray-600 text-[13px] leading-6">
            These terms and conditions ("Terms and Conditions") shall govern the use of Bank Plugin (defined below)
            offered by ICICI Bank Limited ("ICICI Bank") in association with third party service providers. These
            Terms and Conditions shall be in addition to any other terms as stipulated by ICICI Bank from time to
            time on its Website (defined below) whether pertaining to Bank Plugin or in relation to other products
            like current accounts, services or offers provided by ICICI Bank.
          </p>

          <SectionTitle>I. DEFINITIONS</SectionTitle>
          <p className="mb-3 text-[13px] text-gray-600">
            For the purpose of these terms and conditions, these terms shall have the following meanings ascribed to them:
          </p>
          <OrderedList>
            <ListItem>
              <Term>"Affiliate"</Term> to ICICI Bank means and includes:
              <ul className="list-disc pl-6 mt-1 mb-1 space-y-0.5">
                <li>any company which is the holding or subsidiary company of ICICI Bank, or</li>
                <li>a Person under the Control of or under common Control with ICICI Bank, or</li>
                <li>any Person, in 26% or more of the voting securities of which, ICICI Bank has a direct or beneficial interest or Control.</li>
              </ul>
              For the purpose of the definition of Affiliate, "Control" when used with respect to any Person, means the power to direct the management and policies of such Person, directly or indirectly, whether through the ownership of the vote carrying securities, by contract or otherwise howsoever and "Person" means any individual, company, firm, corporation, a partnership, trust or any other entity or organization or other natural or legal person.
            </ListItem>
            <ListItem>
              <Term>"Bank Plugin"</Term> means an extension software program which provides additional features to the host program without altering the host program itself. In this case the Bank Plugin will be an extension to the Customers' ERP software (E.g. – Tally and Busy). Bank Plugin will be able to establish a connection between the Customers' ERP software and their CIB platform / InstaBiz Application and through this plugin, the Customer will be able to initiate Payment Instructions to CIB from within their ERP Platform.
            </ListItem>
            <ListItem>
              <Term>"Bank Plugin Onboarding Platform"</Term> refers to a website,{" "}
              <a href="https://www.bankplugin.com" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800">https://www.bankplugin.com</a>{" "}
              hosted on the platform of a third party service provider; offered, operated and maintained by ICICI Bank in association with third party service providers, for the purpose of registration of Customers who are interested in availing the service of Bank Plugin for their ERP Platform.
            </ListItem>
            <ListItem><Term>"Corporate Internet Banking" / "CIB"</Term> refers to ICICI Bank's corporate internet banking platform.</ListItem>
            <ListItem><Term>"Customer" or "ERP User"</Term> means a customer of ICICI Bank having a current account with ICICI Bank and availing CIB and/or InstaBIZ who is also a licensed user of the ERP platform in concern for which the Bank Plugin is offered.</ListItem>
            <ListItem><Term>"ERP Platform"</Term> or "Enterprise Resource Planning Platform" means the business process management software of any enterprise resource planning software provider used by the Customer.</ListItem>
            <ListItem><Term>"ERP Software Provider"</Term> means the software provider who owns the ERP Platform.</ListItem>
            <ListItem><Term>"InstaBIZ"</Term> refers to ICICI Bank Mobile Banking application developed by ICICI Bank and whose intellectual property rights are vested with ICICI Bank.</ListItem>
            <ListItem><Term>"Payment Instructions"</Term> means the instructions to make payments given by the Customer to ICICI Bank through Bank Plugin.</ListItem>
            <ListItem><Term>"Services"</Term> includes but is not limited to initiating payment transactions, receiving payments, fetching current account balance and reconciliation functionalities of Bank Plugin.</ListItem>
            <ListItem><Term>"Website"</Term> refers to the website owned, established and maintained by ICICI Bank at <a href="https://www.icicibank.in" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800">www.icicibank.in</a>.</ListItem>
            <ListItem><Term>"Account Aggregator Module"</Term> means the module which is an extension of the Bank Plugin, that facilitates the Customer in extracting financial information of Other Accounts by providing the consent on Account Aggregator website and displaying the information within the ERP Platform for various purposes as a part of Bank Plugin.</ListItem>
            <ListItem><Term>"Account Aggregator"</Term> means the RBI Approved entities that provides the service of retrieving or collecting financial information pertaining to its customer.</ListItem>
            <ListItem><Term>"Other Accounts"</Term> means all other bank accounts except ICICI Bank Accounts.</ListItem>
            <ListItem><Term>"ICICI Bank Accounts"</Term> means all those bank accounts opened with ICICI Bank having CIB access functionality.</ListItem>
          </OrderedList>

          <SectionTitle>II. INTERPRETATION</SectionTitle>
          <p className="mb-3 text-[13px] text-gray-600">For the purpose of these Terms and Conditions, a reference to:</p>
          <OrderedList>
            <ListItem>An "amendment" includes a supplement, modification, novation, replacement or reenactment and "amended" is to be construed accordingly; an "authorization" or "approval" includes an authorization, consent, clearance, approval, permission, resolution, license, exemption, filing and registration;</ListItem>
            <ListItem>The "law" includes any constitution, statute, law, rule, regulation, ordinance, judgment, order, decree, authorization, or any published directive, guideline, requirement or governmental restriction having the force of law, or any determination by, or interpretation of any of the foregoing by, any judicial authority, whether in effect as of the date of signing/submission of the application or thereafter and each as amended from time to time.</ListItem>
            <ListItem>The singular includes the plural (and vice versa);</ListItem>
            <ListItem>The headings in these Terms and Conditions are inserted for convenience of reference only and are to be ignored in construing and interpreting the Terms and Conditions;</ListItem>
            <ListItem>Reference to the words "include" or "including" shall be construed without limitation;</ListItem>
            <ListItem>Reference to a gender shall include references to the female, male and neuter genders;</ListItem>
            <ListItem>All approvals, permissions, consents or acceptance required from ICICI Bank for any matter shall require the prior, written approval, permission, consent or acceptance.</ListItem>
            <ListItem>In the event of any disagreement or dispute between ICICI Bank and the Customer regarding the materiality of any matter, the opinion of ICICI Bank as to the materiality of any of the foregoing shall be final and binding on the Customer.</ListItem>
          </OrderedList>

          <SectionTitle>III. ACCEPTANCE OF TERMS AND CONDITIONS</SectionTitle>
          <OrderedList>
            <ListItem>Upon successful completion of the registration process on the Bank Plugin Onboarding Platform for availing the Services, the Customer acknowledges and agrees to abide by these Terms and Conditions. These Terms and Conditions constitute the legal, valid and binding obligations of the Customer, enforceable against the Customer in accordance with applicable law.</ListItem>
            <ListItem>The Customer hereby agrees to link its account on the ERP Platform with his current account held with ICICI Bank through Bank Plugin.</ListItem>
            <ListItem>The Customer understands and agrees that it is granting permission to ICICI Bank to embed Bank Plugin within its ERP Platform to avail Services and accord Payment Instructions.</ListItem>
            <ListItem>The Customer agrees and understands that its use of Bank Plugin and the various Services on the ERP Platform is subject to these Terms and Conditions and are offered at the sole discretion of ICICI Bank.</ListItem>
          </OrderedList>

          <SectionTitle>IV. GENERAL TERMS AND CONDITIONS</SectionTitle>
          <OrderedList>
            <ListItem>Customers acknowledge that they are responsible for ensuring the accuracy of information provided to ICICI Bank, including but not limited to the purpose of registration, activation, providing Payment Instructions and availing Services. Information includes but is not limited to, beneficiary name, account number, IFSC code and beneficiary details sent to ICICI Bank through Bank Plugin.</ListItem>
            <ListItem>The Customer shall ensure that details including but not limited to ERP Serial no./ License no. provided to ICICI Bank at the time of registration are correct and belong to the Customer.</ListItem>
            <ListItem>The Customer understands that its proper and uninterrupted use of Bank Plugin is subject to it meeting the minimum system requirements (which includes but is not limited to the Customer having, operating software – Microsoft Windows XP or above and ERP Platform – Busy Accounting software version 21 Rel 7.0 &amp; above; Tally Prime version 2.1 &amp; above; Tally ERP 9 version 6.6.3 &amp; above) as updated from time to time.</ListItem>
            <ListItem>Transaction limits and timelines for different modes of transactions will be applicable as per CIB limit. These Terms and Conditions are in addition to and not in derogation to the Terms and Conditions of Current Accounts, as may be applicable from time to time. In case of any inconsistency between these Terms and Conditions and Terms and Conditions of Current Accounts, then these Terms and Conditions shall prevail.</ListItem>
            <ListItem>Authorization workflow and limits will be applicable as per authorization matrix defined for the Customers' current account with ICICI Bank and can be accessed by logging on to CIB Platform.</ListItem>
            <ListItem>The Customers shall bear goods and services tax and any other statutory levies as may be applicable from time to time. In case of multiple ICICI Bank Accounts linked to Bank Plugin, GST certificate will be issued against the GST number mapped to the ICICI Bank Account which is debited to charge the subscription fees.</ListItem>
            <ListItem>The Customer/s hereby authorize ICICI Bank to accept and act upon any and all Payment Instructions and collection instructions received by ICICI Bank through the Bank Plugin as though the same were given through CIB/Insta BIZ by the authorized users of the respective registered current account of the Customer/s on CIB/Insta BIZ.</ListItem>
            <ListItem>
              The Customer/s agree to defend, hold harmless and indemnify ICICI Bank, its directors and employees, representatives, agents and/or its Affiliates, as the case may be, at their own expense, without any delay or demur against any and all suits, costs, claims, proceedings, actions, losses, damages, liabilities, demands, and expenses arising out of or in relation to:
              <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1 text-[13px]">
                <li>breach of any of these Terms and Conditions.</li>
                <li>ICICI Bank executing any instructions of the Customer received by ICICI Bank through Bank Plugin.</li>
                <li>ICICI Bank acting on or omitting or refusing to act on any instructions given by such Customer/s or otherwise for use of the Services.</li>
                <li>failure to provide the Services or any delay in providing the Services due to any failure, issue, error or discrepancy in the technology network of ICICI Bank and/or any service provider.</li>
                <li>such Customer/s permitting any third party to use/avail the Services.</li>
                <li>breach of any intellectual property rights of ICICI Bank or any confidentiality obligations.</li>
                <li>discontinuation of Services pursuant to non-payment of applicable fees and charges by the Customer.</li>
                <li>any unauthorized use of the Services / Bank Plugin.</li>
                <li>acts done by ICICI Bank on the instruction by any person impersonating as a Customer.</li>
                <li>any false, incorrect or fraudulent information provided by the Customer.</li>
                <li>the exercise by ICICI Bank of its right to terminate the Bank Plugin and/or the Plugin Onboarding Platform.</li>
                <li>malfunction / alteration / disruption of ERP for any reason whatsoever.</li>
                <li>malfunction / alteration / disruption of Customer's computer systems / software.</li>
                <li>hacking / fraud / loss or theft of data or any other items which may or may not have monetary value, in relation to the Client's use of Bank Plugin.</li>
              </ol>
            </ListItem>
            <ListItem>Customer/s hereby agree and authorize ICICI Bank to share their personal information (address, email ID, corporate ID, user ID, ICICI Bank account number and mobile number, all registered with ICICI Bank) with any third party service providers for the purpose of registering such Customer/s as a user of Bank Plugin on the Bank Plugin On-boarding Platform. ICICI Bank shall have no liability or responsibility whatsoever for any misuse/usage, or any loss, harm or damage arising to such Customers from the usage or misuse of such data by the third party service providers.</ListItem>
            <ListItem>The Customer/s hereby accept and agree that, all acts done and activities taking place on ERP Platform shall be governed by the terms and conditions and privacy policy of ERP Platform. ICICI Bank does not control or endorse the same or any other services provided or product sold on the ERP Platform and bears no responsibility or liability pertaining to or arising from such products or offers or policies.</ListItem>
            <ListItem>In no event shall ICICI Bank be liable to the Customer/s for any liability including but not limited to special, incidental, direct, indirect, punitive or consequential damages whatsoever arising out of the use of, or inability to use or access of the Bank Plugin or for any security breach or any virus, bug, unauthorized intervention, defect, or technical malfunctioning of Bank Plugin and/or ICICI Bank systems.</ListItem>
            <ListItem>The Customer agrees and undertakes to hold ICICI Bank harmless in case Bank Plugin alters / modifies / disrupts the ERP Platform or its use of the ERP Platform at any time.</ListItem>
            <ListItem>ICICI Bank reserves all rights in Bank Plugin and can modify/discontinue/limit the Services, offerings and pricing from time to time at its own discretion.</ListItem>
            <ListItem>ICICI Bank reserves the right to change any of these Terms and Conditions. ICICI Bank may communicate the amended Terms and Conditions by hosting the same on its Website via SMS or email or in any other manner as decided by ICICI Bank, which amended terms will be binding on the Customer. The Customer shall be responsible for regularly reviewing these Terms and Conditions including amendments thereto as may be communicated by ICICI Bank from time to time.</ListItem>
          </OrderedList>

          <SectionTitle>V. FEES AND CHARGES</SectionTitle>
          <OrderedList>
            <ListItem>The Customer understands that its use of the Services and Bank Plugin is subject to payment of the applicable fees and charges.</ListItem>
            <ListItem>The applicable fees and charges as amended from time to time may be viewed by the Customer at the user dashboard in the logged in section of Bank Plugin post completion of registration.</ListItem>
          </OrderedList>

          <div className="my-4 overflow-x-auto rounded border border-gray-300">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  {["Product", "Subscription Fees (Yearly)", "NEFT Transaction Charges", "IMPS per Transaction Charges", "RTGS Transaction Charges", "FT Transaction Charges"].map((h) => (
                    <th key={h} className="border border-gray-300 px-3 py-2 text-left font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="align-top bg-white">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Bank Plugin</td>
                  <td className="border border-gray-300 px-3 py-2">Rs 1200 per year*</td>
                  <td className="border border-gray-300 px-3 py-2">Nil</td>
                  <td className="border border-gray-300 px-3 py-2 space-y-0.5">
                    <div>a) Rs. 0 to Rs. 1000: <strong>Rs. 1.5</strong></div>
                    <div>b) Rs. 1001 to Rs. 25000: <strong>Rs. 2.5</strong></div>
                    <div>c) Rs. 25001 and above: <strong>Rs. 6.5</strong></div>
                  </td>
                  <td className="border border-gray-300 px-3 py-2">Nil</td>
                  <td className="border border-gray-300 px-3 py-2">Nil</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-gray-500 italic mb-3">* Non-refundable fees (debited Rs. 100 + GST per month)</p>

          <OrderedList start={3}>
            <ListItem>ICICI Bank may at any time, without any notice, revise the charges and the Customer shall have to refer the above mentioned user dashboard for any updated charges. After the end of its current billing cycle / subscription period, the Customer shall pay the fees and charges applicable from time to time in order to keep enjoying the Services and Bank Plugin.</ListItem>
            <ListItem>The Customer understands that in case multiple ICICI Bank Accounts are linked with Bank Plugin, ICICI Bank at its own discretion may debit the subscription fees charges from any linked ICICI Bank Account.</ListItem>
            <ListItem>Any payment debited towards the subscription/renewal of Bank Plugin <strong>SHALL BE NON-REFUNDABLE.</strong></ListItem>
          </OrderedList>

          <SectionTitle>VI. RENEWAL &amp; TERMINATION</SectionTitle>
          <OrderedList>
            <ListItem>The Bank Plugin and Services shall be active for a period of 1 year from subscription date. In order to continue access to Bank Plugin, post the 1 year period, the Customer shall renew the subscription for a period of another year from the user dashboard in the logged in section of Bank Plugin Onboarding Platform.</ListItem>
            <ListItem>
              The Customer acknowledges that access of the Bank Plugin services may be discontinued if any of the following events occur:
              <ol className="list-[lower-alpha] pl-6 mt-1 space-y-0.5 text-[13px]">
                <li>Freezing or restriction of the Customer's ICICI Bank Accounts,</li>
                <li>Termination of access to CIB/Instabiz by ICICI Bank,</li>
                <li>Non-compliance with mandatory security upgrades, or Non-renewal of the subscription.</li>
              </ol>
              <span className="block mt-2">In the event that the Customer fails to upgrade to the required software version necessary to maintain the API's security integrity, ICICI Bank shall continue to deduct the agreed subscription fee. Such failure to upgrade will not constitute a valid reason for refund or waiver of charges.</span>
            </ListItem>
            <ListItem>The Customer may stop the usage of Bank Plugin and services by uninstalling the configured Bank Plugin file from the ERP Platform. Customer shall also de-register all CorpID/UserID registered with Bank Plugin on CIB Platform. However, subscription charges may still be applicable and debited monthly if the due subscription charges have not been collected as per Section No. V – Fee &amp; Charges.</ListItem>
          </OrderedList>

          <SectionTitle>VII. MISCELLANEOUS</SectionTitle>
          <OrderedList>
            <ListItem>The Customer understands that all Payment Instructions shall be relayed to ICICI Bank through the Bank Plugin. ICICI Bank shall solely act on the transaction information and details provided by the Customer through Bank Plugin. ICICI Bank disclaims all liability in relation to execution of Payment Instructions pursuant to any erroneous instructions / incorrect information provided by the Customer.</ListItem>
            <ListItem>The Customer understands and agrees that in order to avail the Services and use Bank Plugin, the Customer must have an active current account with ICICI Bank along with active CIB / Insta BIZ access linked to the current account. The Customer may visit any ICICI Bank branch in order to get the same activated.</ListItem>
            <ListItem>The Customer understands that Bank Plugin is being offered by ICICI Bank, having its registered office at ICICI Bank Tower, Near Chakli Circle, Old Padra Road, Vadodara 390007 and its corporate office at ICICI Bank Towers, Bandra Kurla Complex, Bandra, Mumbai 400051, in association with other third party service providers.</ListItem>
            <ListItem>Nothing contained herein shall constitute or be deemed to constitute an advice, invitation or solicitation to purchase or use any products/services of third party service providers / ERP Platform.</ListItem>
            <ListItem>Misuse / distortion of any intellectual property, or any other content displayed herein is strictly prohibited.</ListItem>
            <ListItem>The Bank Plugin and the Services are being provided on an "as is" basis and ICICI Bank specifically disclaims all implied warranties of merchantability, fitness for a particular purpose and non-infringement.</ListItem>
            <ListItem>The subscription to Bank Plugin will be automatically discontinued if not renewed within 1 year from date of subscription as per the prevailing pricing campaign from time to time.</ListItem>
            <ListItem>ICICI Bank shall not be held responsible for any liability regarding registration and activation of Customer's current account with Bank Plugin done by any user stated in the current account MOP of the Customer.</ListItem>
            <ListItem>ICICI Bank shall not be held responsible for any acts / omissions / deficiency in service on part of the ERP Software Provider / any other third party service provider.</ListItem>
            <ListItem>All information provided by Customers to ICICI Bank are true and correct. Customer shall promptly notify ICICI Bank on the occurrence of any event leading to any information subsequently becoming untrue or incorrect.</ListItem>
            <ListItem>ICICI Bank reserves the right to modify, withdraw or discontinue the provision of Services, or any part thereof without assigning any reasons whatsoever.</ListItem>
            <ListItem>In all matters relating to the Services and/or Bank Plugin, the decision of ICICI Bank shall be final and binding on all parties including the Customer. These Terms and Conditions shall be governed by the laws of India and any disputes shall be referred to the exclusive jurisdiction of the competent courts at Mumbai.</ListItem>
            <ListItem>ICICI Bank may assign, in whole or in part, the benefits or obligations of these Services / Terms and Conditions to its Affiliates, or any other entity, for any other reason whatsoever, without requiring the approval or consent of the Customers.</ListItem>
            <ListItem>The Customers shall not assign, in whole or in part, the benefits or obligations pursuant to these Terms and Conditions.</ListItem>
            <ListItem>Customers shall act in good faith at all times in relation to all dealings with ICICI Bank.</ListItem>
            <ListItem>Customers agree to be vigilant regarding the payment transactions happening through their Bank Plugin Platform integrated with the ERP and shall intimate ICICI Bank any misuse, fraud or theft, as soon as the same is discovered.</ListItem>
            <ListItem>
              ICICI Bank follows a three level grievance redressal mechanism that is available on the website of the Bank. For details, please visit{" "}
              <a href="https://www.icicibank.in" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800">www.icicibank.in</a>{" "}
              and navigate to: Home &gt; Contact Us &gt; Queries/Complaints.
            </ListItem>
          </OrderedList>

          <SectionTitle>VIII. ADDITIONAL TERMS AND CONDITIONS FOR ACCOUNT AGGREGATOR MODULE UNDER BANK PLUGIN</SectionTitle>
          <p className="mb-3 text-[13px] text-gray-600">
            In case Customers use the Account Aggregator Module within Bank Plugin, the following additional clauses shall apply in addition to Terms &amp; Conditions – Bank Plugin on ERP Platform:
          </p>
          <OrderedList>
            <ListItem>The Customer understands that the Account Aggregator Module acts solely as an intermediary between the Customer and the Account Aggregator. The Customer further understands that the Services provided by ICICI Bank under Account Aggregator Module are performed on a best efforts basis and the same is subject to multiple external factors that are beyond the reasonable control of ICICI Bank. ICICI Bank shall not be liable in case of any modification or incorrect processing due to actions of Customer or Account Aggregator.</ListItem>
            <ListItem>The criteria for linking of Other Accounts to the Bank Plugin through the Account Aggregator Module shall be subject to the requirements and terms and conditions of the specific Account Aggregator. The Customer understands that before linking/adding/e-banking enabling any new account in Account Aggregator Module for fetching the financial information, one has to acknowledge and consent that he/she will be redirected to the website of Account Aggregator, which is an independent entity not owned, controlled, or endorsed by ICICI Bank.</ListItem>
            <ListItem>The Customer understands that financial information details, once fetched, will be shared with ICICI Bank and its technology service providers and these details may be stored on technology service provider's cloud/server for the purpose of consolidating, organizing and presenting the financial information to him/her. The financial information of the Customer shall not be used by ICICI Bank or its technology service providers for any other purpose.</ListItem>
            <ListItem>The Customer acknowledges and agrees that ICICI Bank shall not be liable for the accuracy, completeness, or the correctness of the information as displayed by Account Aggregator/technology service providers.</ListItem>
          </OrderedList>

          <div className="h-2" />
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 border-t border-gray-200 bg-gray-50 px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            {scrolledToBottom
              ? "You have read all the terms and conditions."
              : "Please scroll to the bottom before accepting."}
          </p>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-6 py-2 border rounded bg-white text-[#DB620A] text-sm font-medium transition-colors"
            >
              Close
            </button>
            <button
              onClick={scrolledToBottom ? onAgree : undefined}
              disabled={!scrolledToBottom}
              className={`flex-1 sm:flex-none px-6 py-2 rounded bg-[#DB620A] text-white text-sm font-medium transition-colors ${
                scrolledToBottom
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              I Agree ✓
            </button>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

function SectionTitle({ children }) {
  return (
    <h4 className="text-[13px] font-bold text-[#DB620A] mt-6 mb-2 tracking-wide">
      {children}
    </h4>
  );
}

function Term({ children }) {
  return <span className="font-semibold text-gray-900">{children}</span>;
}

function OrderedList({ children, start = 1 }) {
  return (
    <ol
      start={start}
      className="list-decimal pl-7 space-y-2.5 text-[13px] text-gray-700 leading-6 mb-4"
    >
      {children}
    </ol>
  );
}

function ListItem({ children }) {
  return <li className="text-justify pl-1">{children}</li>;
}