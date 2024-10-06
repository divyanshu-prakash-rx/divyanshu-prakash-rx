import React, { useState } from "react";
import { BookOpen, Calendar, User, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we build and interact with websites.",
    content:
      "Artificial Intelligence is rapidly transforming the landscape of web development...",
    author: "Jane Doe",
    date: "2024-10-02",
    readTime: "5 min read",
    category: "Technology",
  },
  {
    id: 2,
    title: "10 Essential CSS Tricks Every Developer Should Know",
    excerpt: "Boost your styling skills with these powerful CSS techniques...",
    content: "1. Mastering Flexbox for effortless layouts...",
    author: "John Smith",
    date: "2024-10-01",
    readTime: "8 min read",
    category: "Web Design",
  },
];

const BlogPost = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border rounded-lg p-4 mb-4 shadow-md"
    >
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <AnimatePresence mode="wait">
        <motion.p
          key={isExpanded ? "full" : "excerpt"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-600 mb-4"
        >
          {isExpanded ? post.content : post.excerpt}
        </motion.p>
      </AnimatePresence>
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
        <span className="flex items-center">
          <User size={16} className="mr-1" />
          {post.author}
        </span>
        <span className="flex items-center">
          <Calendar size={16} className="mr-1" />
          {post.date}
        </span>
        <span className="flex items-center">
          <BookOpen size={16} className="mr-1" />
          {post.readTime}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
        >
          {post.category}
        </motion.span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isExpanded ? "Read Less" : "Read More"}
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? (
              <ChevronUp className="ml-2" size={16} />
            ) : (
              <ChevronDown className="ml-2" size={16} />
            )}
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};
const BlogPage = (props) => {
  return (
    <div
      className={`flex flex-col min-h-screen `}
      
    >
      <div className="flex-grow">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold mb-8 text-center ${
        props.mode === "dark" ? "text-white" : "text-black"
      }`}
        >
          Our Latest Blog Posts
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4 py-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogPost post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
