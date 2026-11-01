
const serviceDetails = {
  "01": {
    title: "Organic growth",
    summary: "Systematic multi-channel distribution that captures algorithm-driven organic discovery without paying for every impression.",
    inclusions: [
      "Multi-platform organic architecture across YouTube, Instagram, and TikTok",
      "Proprietary sound-off retention pacing engineered for mobile viewers",
      "Sequential A/B testing pipelines for high-CTR thumbnails and titles",
      "Algorithmic retention structures designed to surpass the 30-second drop-off curve",
      "Sustainable publishing schedules aligned with audience consumption habits"
    ]
  },
  "02": {
    title: "Content strategy",
    summary: "High-conviction content themes, formats, and editorial rhythms that build trust and convert passive observers into loyal regulars.",
    inclusions: [
      "Audience psychology and intent mapping tailored to your specific niche",
      "Breakout format development (deep dives, contrarian breakdowns, short-form drills)",
      "Long-term editorial publishing calendars with daily execution pipelines",
      "Competitor and market gap analysis to establish unfair brand authority",
      "Repeatable content pillars engineered to turn casual views into brand affinity"
    ]
  },
  "03": {
    title: "Social media management",
    summary: "Full-service management, scheduling, and distribution that maintains an always-on presence across every primary discovery channel.",
    inclusions: [
      "End-to-end channel operations across YouTube, Instagram, Facebook, and TikTok",
      "Optimal timing distribution and platform-native asset formatting",
      "YouTube SEO, description metadata, and pinned-comment lead routing",
      "Community moderation and scam-protection to safeguard brand trust",
      "Continuous performance tracking to double down on winning formats"
    ]
  },
  "04": {
    title: "Copywriting",
    summary: "Direct, personality-rich messaging that articulates value clearly, elevates brand voice, and prompts decisive reader action.",
    inclusions: [
      "High-retention video scripting and psychological hooks for long-form & Shorts",
      "Magnetic YouTube titles, descriptions, and thumbnail phrasing",
      "Weekly and bi-weekly email newsletters and automated nurture sequences",
      "Conversion-focused landing page and sales pitch copywriting",
      "Direct-response DM conversation scripts that feel authentic, not pushy"
    ]
  },
  "05": {
    title: "Website & landing pages",
    summary: "Bespoke, high-clarity digital homes and funnels engineered to convert curious clicks into paying clients and community members.",
    inclusions: [
      "Conversion-optimized landing pages and challenge launch hubs",
      "Interactive lead-capture quiz funnels with personalized report cards",
      "Modern editorial UI/UX design matching your unique visual identity",
      "Flawless mobile speed, typography, and responsive performance",
      "Seamless integration with CRM, email marketing, and payment processors"
    ]
  },
  "06": {
    title: "Community engagement",
    summary: "Automated direct-message funnels and personalized touchpoints that turn comments into genuine conversations and paying leads.",
    inclusions: [
      "ManyChat automated DM funnel architecture across Instagram and Facebook",
      "Automated comment-to-DM triggers for lead magnets and challenges",
      "Automated new-follower onboarding and qualification sequences",
      "Conversational nurture workflows that route warm leads directly to calendar bookings",
      "Real-time signal tracking to identify high-intent buyer inquiries"
    ]
  },
  "07": {
    title: "Branding & positioning",
    summary: "A distinctive market position and commanding visual language that makes your brand immediately recognizable and impossible to ignore.",
    inclusions: [
      "Market differentiation strategy to carve out an uncontested category position",
      "Core messaging framework and brand point-of-view architecture",
      "Comprehensive typography, color system, and art direction guidelines",
      "Thumbnail design systems and social profile asset redesigns",
      "Seamless brand expansion strategy for creators pivoting into new horizons"
    ]
  },
  "08": {
    title: "Analytics & reporting",
    summary: "Crystal-clear attribution, retention diagnostics, and actionable insights so every decision is backed by revenue, not vanity metrics.",
    inclusions: [
      "Multi-touch UTM tracking and tracked-link lead capture layers",
      "Minute-by-minute audience watch-time and drop-off diagnosis",
      "Revenue-per-click and conversion attribution by topic and platform",
      "Rapid 4-hour sequential A/B testing readouts on active uploads",
      "Honest monthly executive debriefs detailing what to double down on next"
    ]
  }
};
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))h(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&h(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const y=[{number:"01",title:"Organic growth",description:"A content rhythm and point of view that earns attention without paying for every impression."},{number:"02",title:"Content strategy",description:"The themes, formats, and ideas that keep your audience coming back."},{number:"03",title:"Social media management",description:"Always-on publishing, community care, and a feed that sounds like you."},{number:"04",title:"Copywriting",description:"Words that make the value clear, the voice memorable, and the next step easy."},{number:"05",title:"Website & landing pages",description:"High-clarity pages that turn a curious visit into a meaningful action."},{number:"06",title:"Community engagement",description:"Replies, conversations, and small moments that turn followers into regulars."},{number:"07",title:"Branding & positioning",description:"A sharper place in the market and a brand people can recognize in a second."},{number:"08",title:"Analytics & reporting",description:"Useful numbers, honest readouts, and a plan for what to do next."}],s=["Charlotte","Casa Forma","Jerry Wise","goodmood","kindred","SANS","Crypto Archie"],f=document.querySelector("#services-grid");f.innerHTML=y.map(e=>`
  <article class="service-card reveal">
    <span class="service-number">${e.number}</span>
    <h3>${e.title}</h3>
    <p>${e.description}</p>
    <span class="service-arrow" aria-hidden="true">↗</span>
  </article>
`).join("");const v=document.querySelector("#logo-carousel");let i=0;const g=()=>{const e=[...s.slice(i),...s.slice(0,i),...s.slice(i),...s.slice(0,i)];v.innerHTML=e.map(t=>`<div class="logo-card"><span>${t}</span></div>`).join("")};g();document.querySelectorAll("[data-carousel]").forEach(e=>{e.addEventListener("click",()=>{i=e.dataset.carousel==="next"?(i+1)%s.length:(i-1+s.length)%s.length,g()})});if("IntersectionObserver"in window){const e=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),e.unobserve(o.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(t=>e.observe(t))}else document.querySelectorAll(".reveal").forEach(e=>e.classList.add("visible"));const c=document.querySelector(".menu-toggle"),u=document.querySelector(".main-nav");c.addEventListener("click",()=>{const e=u.classList.toggle("is-open");c.classList.toggle("is-open",e),c.setAttribute("aria-expanded",String(e))});u.querySelectorAll("a").forEach(e=>e.addEventListener("click",()=>{u.classList.remove("is-open"),c.classList.remove("is-open"),c.setAttribute("aria-expanded","false")}));document.querySelector("#consultation-form").addEventListener("submit",e=>{e.preventDefault();const t=document.querySelector("#form-status"),o=new FormData(e.currentTarget).get("name");t.textContent=`Thanks${o?`, ${o}`:""} — your note is on its way.`,e.currentTarget.reset()});const b={"charlotte-hazelwood":{kicker:"Charlotte Hazelwood / 2025–2026",title:"From 3.5M to 108M+ views & a Multi-Channel Growth Engine.",summary:"Established mobility coach Charlotte Hazelwood partnered with The Social Trinity to expand into life coaching and nomadic lifestyle without losing credibility. Over 12 months, she scaled from 3.5M views to 108M+ views, gained 155,000 followers, generated 41,480 automated hot leads, and launched her first $35K challenge.",template:"case-charlotte-hazelwood",person:{name:"Charlotte Hazelwood",role:"Strength & Mobility Coach",photo:"/case-studies/charlotte-hazelwood/charlotte-hazelwood-thumb.png"}},"jerry-wise":{kicker:"Jerry Wise / 2025–2026",title:"The turnaround: what 20 months changed on a 7-year channel.",summary:"Jerry T. Wise started publishing in 2017. By late 2024 he had 158M impressions and under 0.1% regular viewers. Partnering with The Social Trinity transformed the channel: regular viewers reached 9.3%, total views hit 28.3M, and $821,641 in revenue was generated across 1,417 new paid members on zero ad spend.",template:"case-jerry-wise"},"crypto-archie":{kicker:"Crypto Archie / 2026",title:"A business rebuilt in five months.",summary:"Crypto Archie came to The Social Trinity in March 2026 with revenue down 89% from its peak, churn approaching 40% a month, and a channel losing subscribers despite still pulling views. Measured to 31 August 2026, in a crypto market that was flat to down throughout: recurring revenue more than doubled, churn fell 60%, and the channel went from shedding subscribers to adding them at scale.",template:"case-crypto-archie",person:{name:"Crypto Archie",role:"Founder & Content Creator",photo:"/case-studies/crypto-archie/crypto-archie-thumb.png"}},"field-notes":{kicker:"Field Notes / 2024",title:"Everyday goods, new rituals.",summary:"A heritage goods company needed a warmer, more curious way to meet a new generation of collectors.",challenge:"Make a familiar product feel worth discovering again.",made:"Positioning, identity, packaging direction, and a digital home for the collection.",result:"A flexible brand system built to turn everyday objects into keepsakes."},sol:{kicker:"Sol / 2024",title:"A brighter way to recharge.",summary:"Sol came to us with a good product and a quiet presence. We gave its energy somewhere to go.",challenge:"Stand out in a crowded category without shouting.",made:"Brand strategy, launch campaign, social direction, and a bright visual toolkit.",result:"A more optimistic point of view that made the product easy to share."},relay:{kicker:"Relay / 2023",title:"Momentum in every detail.",summary:"Relay helps people move through the city with less friction. The brand needed to feel just as fluid.",challenge:"Turn a useful service into a brand people actively choose.",made:"Naming, identity system, product storytelling, and a conversion-focused website.",result:"A modular identity that moves cleanly from app screen to street poster."}},a=document.querySelector("#case-modal"),l=document.querySelector("#case-modal-rich"),p=document.querySelector("#case-modal-columns"),m=()=>a.close();
  // Service modal handlers
  const sModal = document.querySelector("#service-modal");
  const sClose = document.querySelector(".service-modal-close");
  const sNum = document.querySelector("#service-modal-number");
  const sTitle = document.querySelector("#service-modal-title");
  const sSummary = document.querySelector("#service-modal-summary");
  const sFeatures = document.querySelector("#service-modal-features");

  if (sModal) {
    document.querySelectorAll(".service-card").forEach((card, idx) => {
      card.addEventListener("click", () => {
        const numStr = (idx + 1).toString().padStart(2, "0");
        const data = serviceDetails[numStr];
        if (!data) return;
        sNum.textContent = numStr;
        sTitle.textContent = data.title;
        sSummary.textContent = data.summary;
        sFeatures.innerHTML = data.inclusions.map(inc => `<li>${inc}</li>`).join("");
        sModal.showModal();
      });
    });

    if (sClose) sClose.addEventListener("click", () => sModal.close());
    sModal.addEventListener("click", (e) => { if (e.target === sModal) sModal.close(); });
  }

  document.querySelectorAll("[data-case-study]").forEach(e=>{e.addEventListener("click",()=>{const t=b[e.dataset.caseStudy];if(!t)return;document.querySelector("#case-modal-kicker").textContent=t.kicker,document.querySelector("#case-modal-title").textContent=t.title,document.querySelector("#case-modal-summary").textContent=t.summary;
const clientCard = document.querySelector("#case-modal-client-card");
const clientAvatar = document.querySelector("#case-modal-avatar");
const clientName = document.querySelector("#case-modal-person-name");
const clientRole = document.querySelector("#case-modal-person-role");
if (t.person && clientCard && clientAvatar && clientName && clientRole) {
  clientAvatar.src = t.person.photo;
  clientAvatar.alt = t.person.name;
  clientName.textContent = t.person.name;
  clientRole.textContent = t.person.role;
  clientCard.hidden = false;
} else if (clientCard) {
  clientCard.hidden = true;
}const o=t.template&&document.getElementById(t.template);o?(l.replaceChildren(o.content.cloneNode(!0)),l.hidden=!1,p.hidden=!0,a.classList.add("is-rich")):(l.replaceChildren(),l.hidden=!0,p.hidden=!1,a.classList.remove("is-rich"),document.querySelector("#case-modal-challenge").textContent=t.challenge,document.querySelector("#case-modal-made").textContent=t.made,document.querySelector("#case-modal-result").textContent=t.result),a.showModal(),a.scrollTop=0,requestAnimationFrame(()=>requestAnimationFrame(()=>a.classList.add("is-live")))})});a.addEventListener("close",()=>a.classList.remove("is-live"));document.querySelector(".case-modal-close").addEventListener("click",m);a.querySelectorAll('a[href^="#"]').forEach(e=>e.addEventListener("click",m));a.addEventListener("click",e=>{e.target===a&&m()});
