"use client";

import Image from "next/image";

export default function TemplateClassic({ biodata }: any) {
  const p = biodata.personalDetails || {};
  const f = biodata.familyDetails || {};
  const e = biodata.educationProfession || {};

  return (
    <div className="max-w-2xl mx-auto border border-black p-8">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold mb-6 tracking-wide">
        BIODATA
      </h1>

      {/* Photo */}
      {biodata.profilePhoto && (
        <div className="flex justify-end mb-6">
          <Image
            src={biodata.profilePhoto}
            alt="profile photo"
            width={120}
            height={120}
            className="border object-cover"
          />
        </div>
      )}

      {/* Personal Details */}
      <h2 className="font-bold text-lg underline mb-3">Personal Details</h2>

      <table className="w-full text-sm mb-6">
        <tbody>
          <tr>
            <td className="py-1 w-40 font-semibold">Name</td>
            <td>{p.fullName}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Age</td>
            <td>{p.age}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Height</td>
            <td>{p.height}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Religion</td>
            <td>{p.religion}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Caste</td>
            <td>{p.caste}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Location</td>
            <td>{p.location}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Contact</td>
            <td>{p.contact}</td>
          </tr>
        </tbody>
      </table>

      {/* Family Details */}
      <h2 className="font-bold text-lg underline mb-3">Family Details</h2>

      <table className="w-full text-sm mb-6">
        <tbody>
          <tr>
            <td className="py-1 w-40 font-semibold">Father</td>
            <td>{f.fatherName}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Father Occupation</td>
            <td>{f.fatherOccupation}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Mother</td>
            <td>{f.motherName}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Siblings</td>
            <td>{f.siblings}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Family Type</td>
            <td>{f.familyType}</td>
          </tr>
        </tbody>
      </table>

      {/* Education */}
      <h2 className="font-bold text-lg underline mb-3">
        Education & Profession
      </h2>

      <table className="w-full text-sm">
        <tbody>
          <tr>
            <td className="py-1 w-40 font-semibold">Qualification</td>
            <td>{e.highestQualification}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">College</td>
            <td>{e.college}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Profession</td>
            <td>{e.profession}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Company</td>
            <td>{e.company}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">Income</td>
            <td>{e.income}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
