"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FamilyDetails({ biodata, setBiodata }: any) {
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setBiodata((prev: any) => ({
      ...prev,
      familyDetails: {
        ...prev.familyDetails,
        [name]: value,
      },
    }));
  };

  const handleSelect = (value: string) => {
    setBiodata((prev: any) => ({
      ...prev,
      familyDetails: {
        ...prev.familyDetails,
        familyType: value,
      },
    }));
  };

  return (
    <div className="space-y-4 border p-4 rounded-lg">
      <h2 className="text-lg font-semibold">Family Details</h2>

      {/* Father Name */}
      <div>
        <Label>Father Name</Label>
        <Input
          name="fatherName"
          placeholder="Enter father's name"
          onChange={handleChange}
        />
      </div>

      {/* Father Occupation */}
      <div>
        <Label>Father Occupation</Label>
        <Input
          name="fatherOccupation"
          placeholder="Enter occupation"
          onChange={handleChange}
        />
      </div>

      {/* Mother Name */}
      <div>
        <Label>Mother Name</Label>
        <Input
          name="motherName"
          placeholder="Enter mother's name"
          onChange={handleChange}
        />
      </div>

      {/* Siblings */}
      <div>
        <Label>Siblings</Label>
        <Input
          name="siblings"
          placeholder="e.g. 2 brothers, 1 sister"
          onChange={handleChange}
        />
      </div>

      {/* Family Type */}
      <div className="space-y-2">
        <Label>Family Type</Label>

        <Select onValueChange={handleSelect}>
          <SelectTrigger>
            <SelectValue placeholder="Select family type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="joint">Joint</SelectItem>
            <SelectItem value="nuclear">Nuclear</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
