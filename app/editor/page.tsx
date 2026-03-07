"use client";

import { useState } from "react";
import PersonalDetails from "@/app/components/biodata-form/PersonalDetails";
import FamilyDetails from "@/app/components/biodata-form/FamilyDetails";
import EducationDetails from "@/app/components/biodata-form/EducationDetails";
import HoroscopeSection from "@/app/components/biodata-form/HoroscopeSection";
import PhotoUpload from "@/app/components/biodata-form/PhotoUpload";
import BiodataPreview from "@/app/components/preview/BiodataPreview";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Choose Template</h2>
          <Select
            value={biodata.template}
            onValueChange={(value) =>
              setBiodata((prev: any) => ({
                ...prev,
                template: value,
              }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Template" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="classic">Classic</SelectItem>
              <SelectItem value="modern">Modern</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
