import React, { useState } from "react";
import SecondTemplateResume from "./resumeTemplates/SecondTemplateResume";

const DownloadAndShare = (props) => {
  return (
    <div className="cv-box-share">
      <div className="text-download-share">
        <h2>
          This resume was built <br /> by NAPA Automotive
        </h2>
      </div>

      <div className="box-for-resume-share">
        <div className="profile-cv" id="">
          <SecondTemplateResume />
        </div>
      </div>
    </div>
  );
};

export default DownloadAndShare;
