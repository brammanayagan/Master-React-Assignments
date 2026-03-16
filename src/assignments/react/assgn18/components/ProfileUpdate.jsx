import { useState } from "react";

const ProfileUpdate = () => {
  const [profile, setProfile] = useState({
    name: "Divya",
    role: "Developer",
    experience: 2,
  });

  const handlePromote = () => {
    setProfile({
      ...profile,
      role: "Senior Developer",
      experience: profile.experience + 1,
    });
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold mb-2">Profile</h2>

      <p>Name: {profile.name}</p>
      <p>Role: {profile.role}</p>
      <p>Experience: {profile.experience}</p>

      <button
        onClick={handlePromote}
        className="bg-orange-500 text-white px-3 py-1 rounded mt-2"
      >
        Promote
      </button>
    </div>
  );
};

export default ProfileUpdate;
