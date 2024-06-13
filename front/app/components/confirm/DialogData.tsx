import React, { useEffect } from 'react';
import Image from "next/image";
import { GHuntData } from '@/app/types/ghunt-data';
import { useGHuntDataState } from './GHuntContext';

const emailIcon = [["yahoo.ne.jp", "yahoomail-icon"], ["yahoo.co.jp", "yahoomail-icon"], ["ymobile.ne.jp", "ymobilemail-icon"], ["gmail.com", "gmail-icon"], ["ezweb.ne.jp", "aumail-icon"], ["au.com", "aumail-icon"], ["docomo.ne.jp", "docomomail-icon"], ["i.softbank.jp", "softbankmail-icon"], ["softbank.ne.jp", "softbankmail-icon"], ["hotmail.co.jp", "microsoftmail-icon"], ["hotmail.com", "microsoftmail-icon"], ["nict.go.jp", "nictmail-icon"], ["icloud.com", "icloudmail-icon"], ["outlook.jp", "outlookmail-icon"]]


const getEmailIconSrc = (email: string) => {
    if (!email) return null;
    const domain = email.split('@')[1];
    const icon = emailIcon.find(([emailDomain]) => emailDomain === domain);
    return icon ? `/${icon[1]}.png` : null;
  };
    
export const DialogGHuntData = () => {
    const context = useGHuntDataState();
    if (!context) { return null;}
    const { ghuntData, setGhuntData } = context;
    const emailIconSrc = getEmailIconSrc(ghuntData.email);
    console.log(emailIconSrc)
    return (
        <div style={{ padding: "10px" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <p style={{ marginRight: "20px" }}>{`To: ${ghuntData.email ? ghuntData.email : "--------"}`}</p>
          {emailIconSrc && <Image src={emailIconSrc} alt="Email Icon" width={70} height={40} />}
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
          <p style={{ marginRight: "20px",  }}>{`Profile: ${ghuntData.name ? ghuntData.name : "--------"}`}</p>
          <div style={{ width: "100px", height: "100px", overflow: "hidden", borderRadius: "50%" }}>
          {ghuntData.img && <Image src={ghuntData.img} alt="User Image" width={100} height={100} />}
          </div>
        </div>
        {ghuntData.profile &&
        <p style={{ marginBottom: "5px", wordWrap: "break-word", overflowWrap: "break-word" }}>
            GoogleMapProfile:{" "}
            <a href={ghuntData.profile} target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
            {ghuntData.profile}
            </a>
        </p>}
      </div>
      );
}
  
  



