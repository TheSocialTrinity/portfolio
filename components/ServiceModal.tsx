'use client';

import React from 'react';

export const serviceDetailsData: Record<string, { title: string; summary: string; inclusions: string[] }> = {
  "01": {
    title: "Organic Growth",
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
    title: "Content Strategy",
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
    title: "Social Media Management",
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
    title: "Community Engagement",
    summary: "Automated direct-message funnels and personalized touchpoints that turn comments into genuine conversations and paying leads.",
    inclusions: [
      "ManyChat automated DM funnel architecture across Instagram and Facebook",
      "Automated comment-to-DM triggers for lead magnets and challenges",
      "Automated new-follower onboarding and qualification sequences",
      "Conversational nurture workflows that route warm leads directly to calendar bookings",
      "Real-time signal tracking to identify high-intent buyer inquiries"
    ]
  },
  "06": {
    title: "Branding & Positioning",
    summary: "A distinctive market position and commanding visual language that makes your brand immediately recognizable and impossible to ignore.",
    inclusions: [
      "Market differentiation strategy to carve out an uncontested category position",
      "Core messaging framework and brand point-of-view architecture",
      "Comprehensive typography, color system, and art direction guidelines",
      "Thumbnail design systems and social profile asset redesigns",
      "Seamless brand expansion strategy for creators pivoting into new horizons"
    ]
  },
  "07": {
    title: "Analytics & Reporting",
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

interface ServiceModalProps {
  serviceId: string | null;
  onClose: () => void;
}

export default function ServiceModal({ serviceId, onClose }: ServiceModalProps) {
  if (!serviceId) return null;
  const data = serviceDetailsData[serviceId];
  if (!data) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(13, 13, 13, 0.78)',
        backdropFilter: 'blur(10px)',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="service-modal-panel"
        style={{
          background: 'var(--paper)',
          maxWidth: '580px',
          width: '100%',
          padding: '42px 38px',
          borderRadius: '2px',
          boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="service-modal-close"
          aria-label="Close service modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            border: '1px solid var(--line)',
            background: 'transparent',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={onClose}
        >
          ×
        </button>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--terracotta)', fontWeight: 600 }}>{serviceId}</span>
        <h3 style={{ fontSize: '32px', margin: '12px 0', letterSpacing: '-0.04em' }}>{data.title}</h3>
        <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#433f3b', margin: '0 0 24px' }}>{data.summary}</p>
        <div className="service-modal-scope">
          <h4 style={{ font: '600 11px var(--mono)', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--terracotta)', marginBottom: '14px' }}>
            What this service includes:
          </h4>
          <ul>
            {data.inclusions.map((inc, i) => (
              <li key={i}>{inc}</li>
            ))}
          </ul>
        </div>
        <div className="service-modal-cta" style={{ marginTop: '32px' }}>
          <a href="#contact" className="button button-primary" onClick={onClose}>
            Discuss this service <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
