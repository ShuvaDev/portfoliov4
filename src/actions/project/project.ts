"use server";

import { db } from "@/lib/db";

const data = {
  project_type: "Full Stack Website",
  project_name: "DEV AI",
  live_link: "https://dev-ai-bay.vercel.app",
  github_link: "https://github.com/monirhabderabby/dev_ai",
  thumbnail_url:
    "https://utfs.io/f/fa1b3e88-153d-4b84-8848-987e6bb5ac2c-n3ch5g.png",
  description:
    "<p>Welcome to <strong>DEV AI</strong>, an innovative AI tool developed through collaboration between myself and Seam. This project is a joint effort aimed at honing our skills in crafting cutting-edge educational solutions. DEV AI serves as a testament to our dedication to pushing the boundaries of artificial intelligence for the betterment of learning experiences.</p><p><br></p><h2><strong>Features:</strong></h2><ul><li>Conversation:</li></ul><p>Immerse in natural and dynamic chats with DEV AI, catering to diverse topics and contexts, providing an engaging conversational experience.</p><p><br></p><ul><li>Music Generation:</li></ul><p>Unleash DEV AI's creative prowess to compose original music, tailoring melodies to match various moods and preferences.</p><p><br></p><ul><li>Image Generation:</li></ul><p>Translate ideas into visuals effortlessly—describe your vision, and DEV AI brings it to life through unique and personalized image generation.</p><p><br></p><ul><li>Video Generation:</li></ul><p>Elevate storytelling with DEV AI's video generation. Describe scenes or scenarios, and watch as the AI transforms them into customized, visually compelling videos.</p><p><br></p><ul><li>Code Generation:</li></ul><p>Enhance coding efficiency with DEV AI. Describe the functionality needed, and the AI autonomously generates precise code snippets, streamlining the development process.</p>",
  images: [
    "https://utfs.io/f/ab059209-cdb8-40e4-9518-245a789e4073-n3ch5g.png",
    "https://utfs.io/f/d1fe8ef0-c51c-4af2-82bc-f9444e10d48e-uht785.png",
    "https://utfs.io/f/a7e1119d-b37e-4bcb-95a4-b5b172774e84-c8o2v7.png",
    "https://utfs.io/f/f9a53211-3884-40b4-a113-475b9e1499f5-hbvaek.png",
    "https://utfs.io/f/ee6cd11f-cd91-4ab9-8822-9b041b88b886-1nq2cb.png",
    "https://utfs.io/f/e8b95d02-1b58-4e2d-93b5-d03790b0e9e6-1q2q05.png",
    "https://utfs.io/f/67fe3fce-fc69-4bac-8d59-bafeef78ef0c-1uswaj.png",
  ],
  techs: [
    "Next JS",
    "Mongo DB",
    "Tailwind",
    "React",
    "Prisma",
    "Node JS",
    "JavaScript",
  ],
  visited: 0,
  position: 4,
};

export const createProject = async () => {
  try {
    await db.project.create({
      data: data,
    });
    return {
      success: true,
    };
  } catch (error) {
    console.log("PROJECT_CREATE_ERROR", error);
    return {
      error: true,
    };
  }
};
