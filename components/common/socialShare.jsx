import React, { useState } from 'react';
import Head from 'next/head';
import { FaFacebook, FaWhatsapp, FaInstagram, FaCopy } from 'react-icons/fa';

const SocialShareLink = ({ bokunWidgetUrl }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  if (!bokunWidgetUrl) {
    return null; // Return null if bokunWidgetUrl is not provided
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bokunWidgetUrl);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const url = bokunWidgetUrl;
  const title = url;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title)}`;
  // const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(url)}`;

  return (
    <div>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
      </Head>

      <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      {/* <a href={instagramShareUrl} target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a> */}
      <button onClick={copyToClipboard}>
        <FaCopy />
        {copySuccess ? <span>Link copied!</span> : <span>Copy Link</span>}
      </button>
    </div>
  );
};

export default SocialShareLink;
