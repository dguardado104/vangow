import AccordionItem from "../components/AccordionItem";
import GetInTouch from "../components/GetInTouch";
import PublicLayout from "../layouts/PublicLayout";

export default function CandidatePrivacy() {

  const items = [
    {
      key: 1,
      title: "Vangow Terms of Use",
      content: "These Terms and Conditions (“Terms”) govern your use of the Vangow.com website (the “Site”), the Vangow Platform, and the Vangow mobile applications and Services (collectively, the “Services”). By accessing or using the Services, you are entering into a legally binding agreement with Vangow, Inc., situated at Torres de Las Americas, Punta Pacifica, Panama, Panama (“Vangow”) based on these Terms and the Privacy Policy, incorporated herein by reference (collectively referred to as the “Agreement”). Your use of the Services is contingent upon your acceptance of and compliance with the Agreement. By accessing or using the Services, you agree to abide by the terms set forth in the Agreement."
    },
    {
      key: 2,
      title: "1. Fundamental Terms",
      content: "Vangow facilitates a marketplace connecting real estate buyers with the opportunity to acquire a fraction of a home through a qualified company. The terms governing real estate transactions initiated via the Services are outlined in the respective real estate purchase agreement and associated documentation. Additionally, Vangow offers property management services accessible through the Vangow mobile app and platform, governed by your subscription agreement to the Vangow Property Management Services. Your use of the website and mobile app is subject to the terms of the Agreement. You are solely responsible for your use of the Services and any resulting consequences. You may utilize the Services only if you can enter into a binding contract with Vangow and are not barred from accessing the Services under the laws of Panama, the United States, or any other applicable jurisdiction. If you are under 18 years old, you may not access or use the Services. Please inform us if you become aware of any individual under 18 using the Services. Your use of the Services must comply with these Terms and all relevant local, state, national, and international laws, rules, and regulations. The content and opportunities presented by Vangow are not intended as offerings or solicitations for fractional ownership interests in jurisdictions where such actions are prohibited or require registration and/or regulatory approval. The Services may undergo changes without prior notice, and Vangow reserves the right to cease or modify the provision of Services at its discretion, without guaranteeing prior notice. Advertisements on the Services, subject to change, may be targeted based on content, information, or queries made through the Services. In consideration for accessing the Services, you agree that Vangow, third-party providers, and partners may display such advertising on the Services."
    },
    {
      key: 3,
      title: "Privacy",
      content: (<>
        <p>Any information provided to Vangow is subject to our Privacy Policy, governing the collection and use of your information. By using the Services, you consent to the collection and use of your information, as outlined in the Privacy Policy, including the transfer of this information to Panama, the United States, and/or other countries for storage, processing, and use by Vangow. As part of the Services, you may receive certain communications, such as service announcements and administrative messages, which are considered integral to the Services and cannot be opted out of. </p>
        <p>By submitting any form on the Website requesting your phone number or email, you agree to our Privacy Policy and consent to receive marketing-related text messages, emails, calls, and/or voicemails from Vangow, its affiliates, and/or service providers about your inquiry and other home-related matters. You are not obligated to grant consent as a condition of purchasing any property, goods, or services. Carrier charges may apply, and this consent remains valid even if you are on a do-not-call list.</p>
      </>)
    },
    {
      key: 4,
      title: "Passwords",
      content: "You are responsible for safeguarding the password or credentials used to access the Services and for any activities under your account. It is recommended to use 'strong' passwords. Vangow is not liable for any loss or damage resulting from non-compliance with these requirements. Notify us immediately of any security breaches or unauthorized use of your account. Usernames must not infringe on the rights of others or be offensive, vulgar, or obscene."
    },
    {
      key: 5,
      title: "Mobile Application Requirements",
      content: "To use the Vangow mobile app (the “App”), you need a compatible mobile device. Verify compatibility, as Vangow does not guarantee compatibility with all devices. Your use of the App may incur additional charges from your wireless provider, for which you are solely responsible. Vangow may update the app and automatically upgrade the version of any installed App on your mobile device. Installation of the App implies consent to all automatic upgrades, subject to these Terms of Use. Third-party open source software in the App is governed by applicable open-source licenses."
    },
    {
      key: 6,
      title: "Content on the Services",
      content: (
        <>
          <p>Be aware that Vangow does not verify the accuracy of information on the Services. Your use or reliance on information obtained through the
            Services is at your own risk. By using the Services, you may encounter content that is offensive, harmful, inaccurate, or deceptive. Vangow is not liable for any content posted on the Services or elsewhere. Upon registering on the Website and becoming a “Registrant,” you gain access to
            enhanced information about Vangow Homes and Prospects (the “Exclusive Content”). This Exclusive Content includes detailed pricing
            information and operating expense data for Vangow Homes and Prospects. Registrants can gain insights into how Vangow determines
            company share prices and provides services to company owners. By registering for Exclusive Content, Registrants agree to certain conditions:</p>
          <ol>
            <li>1. Exclusive Content is for personal, non-commercial use.</li>
            <li>2. Registrants must have a bona fide interest in real estate transactions.</li>
            <li>3. Redistribution or copying of Exclusive Content is not permitted, except for consideration of individual property transactions.</li>
            <li>4. For MLS listings, Registrants acknowledge the MLS ownership and copyright of the applicable MLS database of homes displayed in
              Exclusive Content.</li>
          </ol>
        </>
      )
    },
    {
      key: 7,
      title: "Vangow Rights",
      content: (
        <>
          <p>All rights, title, and interest in the Services and associated content belong exclusively to Vangow and its licensors. Services and content are
            protected by copyright, trademark, and other laws of Panama, the United States, and other countries. Vangow reserves all rights not expressly
            granted in these Terms. Feedback provided regarding Vangow or the Services is voluntary, and Vangow is free to use such feedback without
            any obligation.</p>
          <br />
          <p>COPYRIGHT INFRINGEMENT</p>
          <br />
          <p>
            Vangow takes copyright violations seriously. We may remove material from the Website or Services that appears to infringe upon the copyright
            or intellectual property rights of others. If you believe your copyrighted work has been posted without authorization or mistakenly removed,
            contact our copyright agent at the address provided below, and provide the following information:
          </p>
          <br />
          <ol>
            <li>(a) A physical or electronic signature of the authorized person acting on behalf of the copyright owner.</li>
            <li>(b) Identification of the copyrighted work claimed to be infringed or mistakenly removed.</li>
            <li>(c) Detailed description of the material claimed to be infringing or mistakenly removed, with information to locate it.</li>
            <li>(d) Your name, address, telephone number, and email address.</li>
            <li>(e) A statement that you believe in good faith that the use of the copyrighted material is unauthorized or mistaken.</li>
            <li>(f) A statement that the information provided is accurate and, under penalty of perjury, that you are authorized to act on behalf of the copyright
              owner.</li>
          </ol>
          <br />
          <p>To notify Vangow of claimed copyright infringement or file a counter-notice, contact us at:
            <br /><br />
            Vangow Inc.
            <br /><br />
            Torres de Las Americas, Punta Pacifica, Panama, Panama
            <br /><br />
            Email: info@vangow.com</p>
        </>
      )
    },
    {
      key: 8,
      title: "Restrictions On Use Of The Services",
      content: (
        <>
          <p>Vangow reserves the right to suspend, terminate users, or reclaim usernames without liability. While accessing the Services, users may not: (i)
            Access</p>

          <br />
          <ol>
            <li>(i) non-public areas of the Services, Vangow s computer systems, or technical delivery systems without authorization.</li>
            <li>(ii) Probe, scan, or test the vulnerability of any system or network, or circumvent security measures.</li>
            <li>(iii) Access or search the Services through means other than published interfaces provided by Vangow.</li>
            <li>(iv) Forge any TCP/IP packet header or manipulate source-identifying information.</li>
            <li>(v) Interfere with or disrupt the access of any user, host, or network.</li>
          </ol>
          <br />
          <p>Vangow may suspend or terminate accounts or cease providing all or part of the Services at any time for reasons including, but not limited to,
            violation of these Terms, creating risk or legal exposure, or if provision of the Services is no longer commercially viable. Efforts will be made to
            notify users of such actions.</p>
        </>
      )
    }
  ]

  return (
    <PublicLayout>
      <main className="text-secondary font-abc">
        <header style={{ backgroundImage: 'url(/bgs/gray-bg.webp)' }} className=" h-80 bg-cover bg-center flex items-center justify-center flex-col">
          <span className="font-bold text-3xl font-made-outer">Candidate privacy</span>
          <span>Updated February 5, 2024</span>
        </header>
        <article className="max-w-7xl mx-auto py-16 px-4">
          {
            items.length > 0 ?
              items.map(item => (
                <AccordionItem title={item.title} key={item.key}>
                  <p>{item.content}</p>
                </AccordionItem>
              ))
              : ''
          }
        </article>
        <GetInTouch />
      </main>
    </PublicLayout>

  )
}