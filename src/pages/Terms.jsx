import AccordionItem from "../components/AccordionItem";

export default function Terms() {
  return (
    <main className="text-secondary">

      <header style={{ backgroundImage: 'url(/bgs/gray-bg.webp)' }} className=" h-80 bg-cover bg-center flex items-center justify-center">
        <span className="font-bold text-3xl">Terms & conditions</span>
      </header>
      <article className="max-w-7xl mx-auto py-16 px-4">

        <AccordionItem title={"Vangow Terms of Use"}>
          <p>These Terms and Conditions (“Terms”) govern your use of the Vangow.com website (the “Site”), the Vangow Platform, and the Vangow mobile applications and Services (collectively, the “Services”). By accessing or using the Services, you are entering into a legally binding agreement with Vangow, Inc., situated at Torres de Las Americas, Punta Pacifica, Panama, Panama (“Vangow”) based on these Terms and the Privacy Policy, incorporated herein by reference (collectively referred to as the “Agreement”). Your use of the Services is contingent upon your acceptance of and compliance with the Agreement. By accessing or using the Services, you agree to abide by the terms set forth in the Agreement.</p>
        </AccordionItem>

        <AccordionItem title={"1. Fundamental Terms"}>
          <p>Vangow facilitates a marketplace connecting real estate buyers with the opportunity to acquire a fraction of a home through a qualified company. The terms governing real estate transactions initiated via the Services are outlined in the respective real estate purchase agreement and associated documentation. Additionally, Vangow offers property management services accessible through the Vangow mobile app and platform, governed by your subscription agreement to the Vangow Property Management Services. Your use of the website and mobile app is subject to the terms of the Agreement. You are solely responsible for your use of the Services and any resulting consequences. You may utilize the Services only if you can enter into a binding contract with Vangow and are not barred from accessing the Services under the laws of Panama, the United States, or any other applicable jurisdiction. If you are under 18 years old, you may not access or use the Services. Please inform us if you become aware of any individual under 18 using the Services. Your use of the Services must comply with these Terms and all relevant local, state, national, and international laws, rules, and regulations. The content and opportunities presented by Vangow are not intended as offerings or solicitations for fractional ownership interests in jurisdictions where such actions are prohibited or require registration and/or regulatory approval. The Services may undergo changes without prior notice, and Vangow reserves the right to cease or modify the provision of Services at its discretion, without guaranteeing prior notice. Advertisements on the Services, subject to change, may be targeted based on content, information, or queries made through the Services. In consideration for accessing the Services, you agree that Vangow, third-party providers, and partners may display such advertising on the Services.</p>
        </AccordionItem>

        <AccordionItem title={"Privacy"}>
          <p>Any information provided to Vangow is subject to our Privacy Policy, governing the collection and use of your information. By using the Services, you consent to the collection and use of your information, as outlined in the Privacy Policy, including the transfer of this information to Panama, the United States, and/or other countries for storage, processing, and use by Vangow. As part of the Services, you may receive certain communications, such as service announcements and administrative messages, which are considered integral to the Services and cannot be opted out of. </p>
          <p>By submitting any form on the Website requesting your phone number or email, you agree to our Privacy Policy and consent to receive marketing-related text messages, emails, calls, and/or voicemails from Vangow, its affiliates, and/or service providers about your inquiry and other home-related matters. You are not obligated to grant consent as a condition of purchasing any property, goods, or services. Carrier charges may apply, and this consent remains valid even if you are on a do-not-call list.</p>
        </AccordionItem>

      </article>

    </main>
  )
}