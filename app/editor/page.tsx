"use client";

import { useState } from "react";
import PersonalDetails from "@/components/biodata-form/PersonalDetails";
import FamilyDetails from "@/components/biodata-form/FamilyDetails";
import EducationDetails from "@/components/biodata-form/EducationDetails";
import HoroscopeSection from "@/components/biodata-form/HoroscopeSection";
import PhotoUpload from "@/components/biodata-form/PhotoUpload";
import BiodataPreview from "@/components/preview/BiodataPreview";

export default function EditorPage() {
  const [biodata, setBiodata] = useState({
    personalDetails: {
      fullName: "",
      dob: "",
      age: "",
      height: "",
      religion: "",
      caste: "",
      location: "",
      contact: "",
    },
    familyDetails: {},
    educationProfession: {},
    horoscope: {},
    profilePhoto: "",
    template: "classic",
  });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* LEFT SIDE FORM */}
      <div className="w-full lg:w-1/2 p-6 space-y-6 overflow-y-auto">
        <h1 className="text-2xl font-bold">Create Biodata</h1>

        <PersonalDetails biodata={biodata} setBiodata={setBiodata} />

        <FamilyDetails biodata={biodata} setBiodata={setBiodata} />

        <EducationDetails biodata={biodata} setBiodata={setBiodata} />

        <HoroscopeSection biodata={biodata} setBiodata={setBiodata} />

        <PhotoUpload biodata={biodata} setBiodata={setBiodata} />
      </div>

      {/* RIGHT SIDE PREVIEW */}
      <div className="w-full lg:w-1/2 bg-muted p-6">
        <BiodataPreview biodata={biodata} />
      </div>
    </div>
  );
}
