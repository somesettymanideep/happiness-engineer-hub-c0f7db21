import { TextTestimonial, VideoTestimonial, ContactSubmission, GalleryPhoto } from "@/types/testimonials";
import aviationTraining1 from "@/assets/gallery/aviation-training-1.jpeg";
import aviationTraining2 from "@/assets/gallery/aviation-training-2.jpeg";
import personalMarathon from "@/assets/gallery/personal-marathon.jpeg";
import personalPlayItFull from "@/assets/gallery/personal-playitfull.jpeg";
import personalFriends from "@/assets/gallery/personal-friends.jpeg";
import personalMovie from "@/assets/gallery/personal-movie.jpeg";
import personalBossWallah from "@/assets/gallery/personal-bosswallah.jpeg";
import personalCyber from "@/assets/gallery/personal-cyber.jpeg";
import personalBookGift from "@/assets/gallery/personal-bookgift.jpeg";

const GALLERY_VERSION = "v2";

const STORAGE_KEYS = {
  textTestimonials: "lifeengineer_text_testimonials",
  videoTestimonials: "lifeengineer_video_testimonials",
  contactSubmissions: "lifeengineer_contact_submissions",
  galleryPhotos: "lifeengineer_gallery_photos",
  galleryVersion: "lifeengineer_gallery_version",
  adminAuth: "lifeengineer_admin_auth",
};

// Default testimonials data
const defaultTextTestimonials: TextTestimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    designation: "Software Engineer",
    review: "The life coaching sessions transformed my perspective on work-life balance. I now feel more focused and fulfilled in both my career and personal life.",
    order: 1,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Priya Sharma",
    designation: "Business Owner",
    review: "Decoding Happiness opened my eyes to what was missing in my life. The six pillars framework is practical and life-changing.",
    order: 2,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Anil Reddy",
    designation: "Aviation Student",
    review: "As an aspiring aircraft engineer, the mentorship I received was invaluable. The combination of technical guidance and life lessons is unique.",
    order: 3,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Sunita Devi",
    designation: "Teacher",
    review: "The psychology-based guidance helped me understand my students better and improved my teaching methods significantly.",
    order: 4,
    status: "active",
    createdAt: new Date().toISOString(),
  },
];

const defaultVideoTestimonials: VideoTestimonial[] = [
  {
    id: "1",
    name: "Vikram Singh",
    designation: "Corporate Manager",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    order: 1,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Lakshmi Naidu",
    designation: "HR Professional",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    order: 2,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Karthik Rao",
    designation: "Entrepreneur",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    order: 3,
    status: "active",
    createdAt: new Date().toISOString(),
  },
];

const defaultGalleryPhotos: GalleryPhoto[] = [
  {
    id: "av1",
    title: "Aircraft Sheet Metal Training",
    description: "Hands-on training session with aviation students on sheet metal forming",
    imageUrl: aviationTraining1,
    category: "Aviation Training",
    order: 1,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "av2",
    title: "From Raw Book to Final Book",
    description: "The transformation journey of Decoding Happiness — from rough notes to published book",
    imageUrl: aviationTraining2,
    category: "Aviation Training",
    order: 2,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "p1",
    title: "Hyderabad Airport Run",
    description: "Completed the Hyderabad Airport Run with a finisher's medal",
    imageUrl: personalMarathon,
    category: "Personal",
    order: 3,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "p2",
    title: "Play It Full Event",
    description: "A memorable moment at the Play It Full event",
    imageUrl: personalPlayItFull,
    category: "Personal",
    order: 4,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "p3",
    title: "With Friends",
    description: "Cherished moments with friends at a community event",
    imageUrl: personalFriends,
    category: "Personal",
    order: 5,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "p4",
    title: "Krishna Gadi Prema Gaadha",
    description: "Produced Telugu short film — Krishna Gadi Prema Gaadha",
    imageUrl: personalMovie,
    category: "Personal",
    order: 6,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "p5",
    title: "Boss Wallah Academy Certification",
    description: "Certificate of Completion — Business Launchpad Program",
    imageUrl: personalBossWallah,
    category: "Personal",
    order: 7,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "p6",
    title: "Cyber Safety Participation",
    description: "Certificate of participation at Cyber Safety event with Telangana Police",
    imageUrl: personalCyber,
    category: "Personal",
    order: 8,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "p7",
    title: "Decoding Happiness — Reader Gift",
    description: "Sharing Decoding Happiness with readers at Mullapudi Dental",
    imageUrl: personalBookGift,
    category: "Personal",
    order: 9,
    status: "active",
    createdAt: new Date().toISOString(),
  },
];

// Initialize with default data if empty
function initializeStorage() {
  if (!localStorage.getItem(STORAGE_KEYS.textTestimonials)) {
    localStorage.setItem(STORAGE_KEYS.textTestimonials, JSON.stringify(defaultTextTestimonials));
  }
  if (!localStorage.getItem(STORAGE_KEYS.videoTestimonials)) {
    localStorage.setItem(STORAGE_KEYS.videoTestimonials, JSON.stringify(defaultVideoTestimonials));
  }
  if (!localStorage.getItem(STORAGE_KEYS.contactSubmissions)) {
    localStorage.setItem(STORAGE_KEYS.contactSubmissions, JSON.stringify([]));
  }
  if (
    !localStorage.getItem(STORAGE_KEYS.galleryPhotos) ||
    localStorage.getItem(STORAGE_KEYS.galleryVersion) !== GALLERY_VERSION
  ) {
    localStorage.setItem(STORAGE_KEYS.galleryPhotos, JSON.stringify(defaultGalleryPhotos));
    localStorage.setItem(STORAGE_KEYS.galleryVersion, GALLERY_VERSION);
  }
}

// Text Testimonials
export function getTextTestimonials(): TextTestimonial[] {
  initializeStorage();
  const data = localStorage.getItem(STORAGE_KEYS.textTestimonials);
  return data ? JSON.parse(data) : [];
}

export function saveTextTestimonial(testimonial: TextTestimonial): void {
  const testimonials = getTextTestimonials();
  const index = testimonials.findIndex((t) => t.id === testimonial.id);
  if (index >= 0) {
    testimonials[index] = testimonial;
  } else {
    testimonials.push(testimonial);
  }
  localStorage.setItem(STORAGE_KEYS.textTestimonials, JSON.stringify(testimonials));
}

export function deleteTextTestimonial(id: string): void {
  const testimonials = getTextTestimonials().filter((t) => t.id !== id);
  localStorage.setItem(STORAGE_KEYS.textTestimonials, JSON.stringify(testimonials));
}

// Video Testimonials
export function getVideoTestimonials(): VideoTestimonial[] {
  initializeStorage();
  const data = localStorage.getItem(STORAGE_KEYS.videoTestimonials);
  return data ? JSON.parse(data) : [];
}

export function saveVideoTestimonial(testimonial: VideoTestimonial): void {
  const testimonials = getVideoTestimonials();
  const index = testimonials.findIndex((t) => t.id === testimonial.id);
  if (index >= 0) {
    testimonials[index] = testimonial;
  } else {
    testimonials.push(testimonial);
  }
  localStorage.setItem(STORAGE_KEYS.videoTestimonials, JSON.stringify(testimonials));
}

export function deleteVideoTestimonial(id: string): void {
  const testimonials = getVideoTestimonials().filter((t) => t.id !== id);
  localStorage.setItem(STORAGE_KEYS.videoTestimonials, JSON.stringify(testimonials));
}

// Contact Submissions
export function getContactSubmissions(): ContactSubmission[] {
  initializeStorage();
  const data = localStorage.getItem(STORAGE_KEYS.contactSubmissions);
  return data ? JSON.parse(data) : [];
}

export function saveContactSubmission(submission: ContactSubmission): void {
  const submissions = getContactSubmissions();
  submissions.unshift(submission);
  localStorage.setItem(STORAGE_KEYS.contactSubmissions, JSON.stringify(submissions));
}

export function updateContactSubmission(submission: ContactSubmission): void {
  const submissions = getContactSubmissions();
  const index = submissions.findIndex((s) => s.id === submission.id);
  if (index >= 0) {
    submissions[index] = submission;
    localStorage.setItem(STORAGE_KEYS.contactSubmissions, JSON.stringify(submissions));
  }
}

// Gallery Photos
export function getGalleryPhotos(): GalleryPhoto[] {
  initializeStorage();
  const data = localStorage.getItem(STORAGE_KEYS.galleryPhotos);
  return data ? JSON.parse(data) : [];
}

export function saveGalleryPhoto(photo: GalleryPhoto): void {
  const photos = getGalleryPhotos();
  const index = photos.findIndex((p) => p.id === photo.id);
  if (index >= 0) {
    photos[index] = photo;
  } else {
    photos.push(photo);
  }
  localStorage.setItem(STORAGE_KEYS.galleryPhotos, JSON.stringify(photos));
}

export function deleteGalleryPhoto(id: string): void {
  const photos = getGalleryPhotos().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEYS.galleryPhotos, JSON.stringify(photos));
}

export function deleteContactSubmission(id: string): void {
  const submissions = getContactSubmissions().filter((s) => s.id !== id);
  localStorage.setItem(STORAGE_KEYS.contactSubmissions, JSON.stringify(submissions));
}

// Admin Authentication (simple localStorage-based)
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123", // In production, use proper auth
};

export function adminLogin(username: string, password: string): boolean {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    localStorage.setItem(STORAGE_KEYS.adminAuth, "true");
    return true;
  }
  return false;
}

export function isAdminLoggedIn(): boolean {
  return localStorage.getItem(STORAGE_KEYS.adminAuth) === "true";
}

export function adminLogout(): void {
  localStorage.removeItem(STORAGE_KEYS.adminAuth);
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
