"use client";
import { createProject } from "@/actions/project/project";

const CreatePost = () => {
  const onCreate = async () => {
    const result = await createProject();

    alert("project created");
  };
  return (
    <div>
      <button className="btn btn-lg" onClick={onCreate}>
        Post a Project
      </button>
    </div>
  );
};

export default CreatePost;
