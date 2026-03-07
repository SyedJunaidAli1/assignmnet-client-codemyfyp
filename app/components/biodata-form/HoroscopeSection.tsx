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

export default function HoroscopeSection({ biodata, setBiodata }: any) {
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setBiodata((prev: any) => ({
      ...prev,
      horoscope: {
        ...prev.horoscope,
        [name]: value,
      },
    }));
  };

  const handleManglik = (value: string) => {
    setBiodata((prev: any) => ({
      ...prev,
      horoscope: {
        ...prev.horoscope,
        manglik: value,
      },
    }));
  };

  return (
    <div className="space-y-4 border p-4 rounded-lg">
      <h2 className="text-lg font-semibold">Horoscope Details</h2>

      {/* Rashi */}
      <div>
        <Label>Rashi</Label>
        <Input name="rashi" placeholder="Enter rashi" onChange={handleChange} />
      </div>

      {/* Nakshatra */}
      <div>
        <Label>Nakshatra</Label>
        <Input
          name="nakshatra"
          placeholder="Enter nakshatra"
          onChange={handleChange}
        />
      </div>

      {/* Manglik */}
      <div className="space-y-2">
        <Label>Manglik</Label>

        <Select onValueChange={handleManglik}>
          <SelectTrigger>
            <SelectValue placeholder="Select option" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
