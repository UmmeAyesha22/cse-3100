import React from 'react';
import i1 from '../assets/1.jpeg';
import i2 from '../assets/2.jpeg';
import i3 from '../assets/3.jpeg';
import i4 from '../assets/4.jpeg';

// Sample team member data (replace with your actual data)
const teamMembers = [
  {
    name: 'Alice Johnson',
    title: 'Founder & CEO',
    imageUrl:i1,
    bio: 'Passionate about animal welfare and dedicated to finding homes for every cat.',
  },
  {
    name: 'Bob Williams',
    title: 'Head of Operations',
    imageUrl: i2,
    bio: 'Oversees daily operations and ensures the smooth running of the adoption process.',
  },
    {
    name: 'Eva Davis',
    title: 'Adoption Coordinator',
    imageUrl: i3,
    bio: 'Matches cats with their perfect families and provides post-adoption support.',
  },
    {
    name: 'David Lee',
    title: 'Veterinary Technician',
    imageUrl: i4,
    bio: 'Provides medical care for our cats and ensures they are healthy and ready for adoption.',
  },
  // Add more team members here
];

const AboutUs = () => {
  return (
    <div className="about-us-container"> {/* Added a container for styling */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide loving, forever homes for cats in need. We strive to rescue, rehabilitate, and rehome abandoned and neglected cats while promoting responsible pet ownership and spreading awareness about the joy and companionship that cats bring to our lives. Together, we aim to create a world where every cat is cherished and cared for.
        </p>
      </section>

      <section className="about-section">
        <h2>Our History</h2>
        <p>
          "Purrfect Adoption was founded with a simple yet powerful goal: to give every cat a chance at a loving home. What began as a small community effort to rescue stray and abandoned cats has grown into a dedicated organization committed to making a difference. Over the years, we have built partnerships with shelters, foster families, and volunteers to rescue cats in need, provide medical care, and match them with their perfect families. From humble beginnings to countless heartwarming success stories, our journey is driven by compassion and the unwavering belief that every cat deserves a second chance at life."
        </p>
      </section>

      <section className="about-section">
        <h2>Our Team</h2>
        <div className="team-members-container"> {/* Container for team members */}
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}> {/* Key is important for React lists */}
              <img src={member.imageUrl} alt={member.name} className="team-member-image" />
              <h3>{member.name}</h3>
              <p className="team-member-title">{member.title}</p>
              <p className="team-member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;