
export const RecentPosts = () => {
  const posts = [
    {
      date: "Aug 18, 2024",
      title: "Markdown Style Guide",
      tags: ["Markdown", "Guide"]
    },
    {
      date: "Aug 17, 2023",
      title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
      tags: ["Lorem Ipsum", "Devolio"]
    },
    {
      date: "Aug 16, 2023",
      title: "Sagittis Purus Sit Amet Volutpat. Netus Et Malesuada Fames Ac Turpis Egestas",
      tags: ["Lorem Ipsum"]
    },
    {
      date: "Jul 22, 2022",
      title: "Third Post: How To Become A Successful Software Developer",
      tags: ["Dummy Tag"]
    },
    {
      date: "Jul 15, 2022",
      title: "Second Post - Devolio Is Awesome",
      tags: ["Devolio", "Dummy Tag"]
    }
  ];

  return (
    <section id="posts" className="py-16 border-t border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-medium text-gray-900">Recent Posts</h2>
        <a 
          href="#" 
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          All posts →
        </a>
      </div>
      
      <div className="space-y-6">
        {posts.map((post, index) => (
          <article key={index} className="group">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <time className="text-sm text-gray-500 whitespace-nowrap">
                {post.date}
              </time>
              
              <div className="flex-1">
                <h3 className="text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  <a href="#" className="hover:underline">
                    {post.title}
                  </a>
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
