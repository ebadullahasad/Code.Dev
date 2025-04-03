import { useEffect, useState } from "react";
import BannerSection from "./Component/BannerSection";
import BlogCard from "./Component/BlogCard";
import FilterSection from "./Component/FilterSection";

const tagMapping = {
  design: "reactnative",
  business: "career",
  webdevelopment: "ai",
  qualityassurance: "mobiledevelopment",
};

const Blogs = () => {
  const [filteredCategory, setFilteredCategory] = useState("all");
  const [blog, setBlog] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=tiaeastwood&per_page=8"
        );
        const json = await response.json();
        setBlog(json);
        setFilteredBlogs(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchBlog();
  }, []);

  const handleFilterChange = (category) => {
    setFilteredCategory(category);

    if (category === "all") {
      setFilteredBlogs(blog);
    } else {
      const mappedTag = tagMapping[category] || category;
      const filtered = blog.filter((item) => item.tag_list.includes(mappedTag));
      setFilteredBlogs(filtered);
    }
  };

  return (
    <div className="bg-primaryColor">
      <BannerSection />
      <div className="md:w-[80%] w-[90%] mx-auto md:py-16 py-8">
        <FilterSection onFilterChange={handleFilterChange} />
        <BlogCard filteredBlogs={filteredBlogs} />
      </div>
    </div>
  );
};

export default Blogs;
