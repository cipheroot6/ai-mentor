import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge"> Start learning your way! </div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        {" "}
        Pick a name, subject, voice and personality - and start learning through
        voice conversations that feels natual and fun.
      </p>
      <Image src="/images/cta.svg" alt="cta" width={400} height={400} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="arrow" width={12.5} height={12.5} />
        <Link href="/companions/new">
          <p>Build a New Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default CTA;
