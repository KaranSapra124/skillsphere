import React, { useEffect, useRef, useState } from "react";
import Container from "../Components/Ui/Container";
import Card from "../Components/Course/Card";
import { gsap } from "gsap";

const Course = () => {
  const cardsRef = useRef();
  const [courses, setCourses] = useState([
    {
      course_id: "C001",
      title: "Introduction to Python Programming",
      description:
        "Learn the basics of Python programming, including syntax, data types, control structures, and how to write your first Python program. This course is designed for beginners and will guide you through hands-on exercises to solidify your understanding.",
      instructor: "John Doe",
      duration: "4 weeks",
      level: "Beginner",
      category: "Programming",
      enrollment_status: "Open",
      start_date: "2023-11-01",
      end_date: "2023-11-29",
      price: 99.99,
      image_url: "https://picsum.photos/200/300?random=1",
      enrolled_users: 150,
    },
    {
      course_id: "C002",
      title: "Data Science with R",
      description:
        "An in-depth course on data analysis and visualization using R programming. You will learn how to manipulate data, create visualizations, and apply statistical methods to derive insights from data. This course is perfect for those looking to enter the field of data science.",
      instructor: "Jane Smith",
      duration: "6 weeks",
      level: "Intermediate",
      category: "Data Science",
      enrollment_status: "Open",
      start_date: "2023-11-15",
      end_date: "2023-12-27",
      price: 149.99,
      image_url: "https://picsum.photos/200/300?random=2",
      enrolled_users: 200,
    },
    {
      course_id: "C003",
      title: "Web Development Bootcamp",
      description:
        "Become a full-stack web developer by learning HTML, CSS, JavaScript, and backend technologies. This comprehensive bootcamp covers everything from the basics to advanced topics, including responsive design and database management. Ideal for those looking to start a career in web development.",
      instructor: "Emily Johnson",
      duration: "12 weeks",
      level: "Advanced",
      category: "Web Development",
      enrollment_status: "Closed",
      start_date: "2023-09-01",
      end_date: "2023-11-24",
      price: 299.99,
      image_url: "https://picsum.photos/200/300?random=3",
      enrolled_users: 75,
    },
    {
      course_id: "C004",
      title: "Digital Marketing Fundamentals",
      description:
        "Understand the key concepts of digital marketing, including SEO, PPC, and social media marketing. This course will provide you with the tools and strategies needed to create effective marketing campaigns and measure their success. Perfect for beginners and marketing professionals alike.",
      instructor: "Michael Brown",
      duration: "8 weeks",
      level: "Beginner",
      category: "Marketing",
      enrollment_status: "Open",
      start_date: "2023-11-10",
      end_date: "2023-12-29",
      price: 199.99,
      image_url: "https://picsum.photos/200/300?random=4",
      enrolled_users: 120,
    },
    {
      course_id: "C005",
      title: "Machine Learning A-Z",
      description:
        "Master machine learning concepts and algorithms with hands-on projects and real-world applications. This course covers supervised and unsupervised learning, deep learning, and more, providing you with a solid foundation in machine learning techniques and their applications in various industries.",
      instructor: "Sarah Wilson",
      duration: "10 weeks",
      level: "Advanced",
      category: "Data Science",
      enrollment_status: "Open",
      start_date: "2023-11-20",
      end_date: "2024-01-29",
      price: 249.99,
      image_url: "https://picsum.photos/200/300?random=5",
      enrolled_users: 90,
    },
    {
      course_id: "C006",
      title: "Graphic Design Essentials",
      description:
        "Learn the principles of graphic design and how to use design software to create stunning visuals. This course covers design theory, typography, color theory, and practical skills in software like Adobe Photoshop and Illustrator. Ideal for aspiring graphic designers.",
      instructor: "David Lee",
      duration: "5 weeks",
      level: "Beginner",
      category: "Design",
      enrollment_status: "Open",
      start_date: "2023-11-05",
      end_date: "2023-12-10",
      price: 129.99,
      image_url: "https://picsum.photos/200/300?random=6",
      enrolled_users: 110,
    },
    {
      course_id: "C007",
      title: "Project Management Professional (PMP) Prep",
      description:
        "Prepare for the PMP certification exam with comprehensive coverage of project management principles, methodologies, and best practices. This course includes practice exams, study materials, and tips for passing the PMP exam, making it ideal for aspiring project managers.",
      instructor: "Laura Martinez",
      duration: "8 weeks",
      level: "Intermediate",
      category: "Business",
      enrollment_status: "Open",
      start_date: "2023-11-15",
      end_date: "2023-12-31",
      price: 199.99,
      image_url: "https://picsum.photos/200/300?random=7",
      enrolled_users: 65,
    },
    {
      course_id: "C008",
      title: "Cybersecurity Basics",
      description:
        "Learn the fundamentals of cybersecurity, including threats, vulnerabilities, and protective measures. This course covers essential concepts such as network security, encryption, and risk management, providing a solid foundation for anyone interested in pursuing a career in cybersecurity.",
      instructor: "Chris Taylor",
      duration: "6 weeks",
      level: "Beginner",
      category: "IT & Security",
      enrollment_status: "Open",
      start_date: "2023-11-01",
      end_date: "2023-12-13",
      price: 149.99,
      image_url: "https://picsum.photos/200/300?random=8",
      enrolled_users: 140,
    },
    {
      course_id: "C009",
      title: "Introduction to Cloud Computing",
      description:
        "Explore the fundamentals of cloud computing, including services, deployment models, and security. This course will help you understand how cloud technologies work and how they can be leveraged for business solutions, making it suitable for IT professionals and beginners alike.",
      instructor: "Alice Green",
      duration: "5 weeks",
      level: "Beginner",
      category: "Cloud Computing",
      enrollment_status: "Open",
      start_date: "2023-11-10",
      end_date: "2023-12-15",
      price: 119.99,
      image_url: "https://picsum.photos/200/300?random=9",
      enrolled_users: 130,
    },
    {
      course_id: "C010",
      title: "Introduction to Artificial Intelligence",
      description:
        "Get an overview of AI concepts, applications, and the future of artificial intelligence. This course covers machine learning, neural networks, and natural language processing, providing insights into how AI is transforming industries and everyday life.",
      instructor: "Robert King",
      duration: "7 weeks",
      level: "Intermediate",
      category: "Artificial Intelligence",
      enrollment_status: "Open",
      start_date: "2023-11-25",
      end_date: "2024-01-10",
      price: 179.99,
      image_url: "https://picsum.photos/200/300?random=10",
      enrolled_users: 85,
    },
    {
      course_id: "C011",
      title: "Introduction to SQL",
      description:
        "Learn the basics of SQL and how to manage databases effectively. This course covers data retrieval, manipulation, and database design, providing you with the skills needed to work with relational databases in various applications.",
      instructor: "Tom Harris",
      duration: "4 weeks",
      level: "Beginner",
      category: "Database",
      enrollment_status: "Open",
      start_date: "2023-11-01",
      end_date: "2023-11-29",
      price: 99.99,
      image_url: "https://picsum.photos/200/300?random=11",
      enrolled_users: 160,
    },
    {
      course_id: "C012",
      title: "Advanced JavaScript",
      description:
        "Deep dive into JavaScript, covering ES6 features, asynchronous programming, and more. This course is designed for those who have a basic understanding of JavaScript and want to enhance their skills to build complex web applications.",
      instructor: "Nina Patel",
      duration: "6 weeks",
      level: "Intermediate",
      category: "Programming",
      enrollment_status: "Open",
      start_date: "2023-11-15",
      end_date: "2023-12-27",
      price: 149.99,
      image_url: "https://picsum.photos/200/300?random=12",
      enrolled_users: 95,
    },
    {
      course_id: "C013",
      title: "Introduction to Blockchain Technology",
      description:
        "Understand the principles of blockchain technology and its applications. This course covers the fundamentals of blockchain, smart contracts, and decentralized applications, providing insights into how blockchain is revolutionizing various industries.",
      instructor: "Mark Thompson",
      duration: "5 weeks",
      level: "Beginner",
      category: "Blockchain",
      enrollment_status: "Open",
      start_date: "2023-11-10",
      end_date: "2023-12-15",
      price: 119.99,
      image_url: "https://picsum.photos/200/300?random=13",
      enrolled_users: 110,
    },
    {
      course_id: "C014",
      title: "User  Experience (UX) Design",
      description:
        "Learn the principles of UX design and how to create user-friendly interfaces. This course covers user research, prototyping, and usability testing, equipping you with the skills to design intuitive and engaging user experiences.",
      instructor: "Sophie Adams",
      duration: "6 weeks",
      level: "Intermediate",
      category: "Design",
      enrollment_status: "Open",
      start_date: "2023-11-20",
      end_date: "2024-01-01",
      price: 179.99,
      image_url: "https://picsum.photos/200/300?random=14",
      enrolled_users: 80,
    },
    {
      course_id: "C015",
      title: "Introduction to DevOps",
      description:
        "Explore the DevOps culture, practices, and tools for continuous integration and delivery. This course covers the principles of DevOps, automation, and collaboration between development and operations teams, making it essential for modern software development.",
      instructor: "Kevin Brown",
      duration: "8 weeks",
      level: "Intermediate",
      category: "DevOps",
      enrollment_status: "Open",
      start_date: "2023-11-15",
      end_date: "2023-12-31",
      price: 199.99,
      image_url: "https://picsum.photos/200/300?random=15",
      enrolled_users: 70,
    },
    {
      course_id: "C016",
      title: "Introduction to Mobile App Development",
      description:
        "Learn how to create mobile applications for iOS and Android platforms. This course covers the fundamentals of mobile app development, including user interface design, app architecture, and deployment, making it perfect for aspiring mobile developers.",
      instructor: "Laura White",
      duration: "10 weeks",
      level: "Beginner",
      category: "Mobile Development",
      enrollment_status: "Open",
      start_date: "2023-11-01",
      end_date: "2023-12-10",
      price: 249.99,
      image_url: "https://picsum.photos/200/300?random=16",
      enrolled_users: 120,
    },
    {
      course_id: "C017",
      title: "Introduction to Ethical Hacking",
      description:
        "Learn the basics of ethical hacking and penetration testing techniques. This course covers various hacking tools and methodologies, providing you with the skills to identify and mitigate security vulnerabilities in systems.",
      instructor: "Daniel Green",
      duration: "6 weeks",
      level: "Intermediate",
      category: "Cybersecurity",
      enrollment_status: "Open",
      start_date: "2023-11-10",
      end_date: "2023-12-22",
      price: 199.99,
      image_url: "https://picsum.photos/200/300?random=17",
      enrolled_users: 85,
    },
    {
      course_id: "C018",
      title: "Introduction to Game Development",
      description:
        "Learn the fundamentals of game development using Unity and C#. This course covers game design principles, programming, and asset creation, providing you with the skills to create your own games from scratch.",
      instructor: "Emma Wilson",
      duration: "8 weeks",
      level: "Beginner",
      category: "Game Development",
      enrollment_status: "Open",
      start_date: "2023-11-15",
      end_date: "2023-12-31",
      price: 199.99,
      image_url: "https://picsum.photos/200/300?random=18",
      enrolled_users: 90,
    },
    {
      course_id: "C019",
      title: "Introduction to Data Visualization",
      description:
        "Learn how to visualize data effectively using tools like Tableau and Power BI. This course covers       the principles of data visualization, best practices for creating impactful visuals, and how to use various tools to present data in a clear and engaging manner. Ideal for data analysts and anyone interested in making data-driven decisions.",
    instructor: "Olivia Martinez",
    duration: "5 weeks",
    level: "Beginner",
    category: "Data Science",
    enrollment_status: "Open",
    start_date: "2023-11-01",
    end_date: "2023-12-05",
    price: 129.99,
    image_url: "https://picsum.photos/200/300?random=19",
    enrolled_users: 115,
  },
  {
    course_id: "C020",
    title: "Introduction to Natural Language Processing",
    description:
      "Explore the basics of NLP and how to process and analyze text data. This course covers key concepts such as tokenization, sentiment analysis, and language models, providing you with the skills to work with text data in various applications.",
    instructor: "James Taylor",
    duration: "6 weeks",
    level: "Intermediate",
    category: "Data Science",
    enrollment_status: "Open",
    start_date: "2023-11-20",
    end_date: "2024-01-01",
    price: 179.99,
    image_url: "https://picsum.photos/200/300?random=20",
    enrolled_users: 80,
  },
  {
    course_id: "C021",
    title: "Introduction to Augmented Reality",
    description:
      "Learn the fundamentals of augmented reality and how to create AR applications. This course covers AR concepts, tools, and techniques, providing you with the skills to develop engaging AR experiences for various platforms.",
    instructor: "Sophia Johnson",
    duration: "6 weeks",
    level: "Intermediate",
    category: "AR Development",
    enrollment_status: "Open",
    start_date: "2023-11-25",
    end_date: "2024-01-06",
    price: 199.99,
    image_url: "https://picsum.photos/200/300?random=21",
    enrolled_users: 70,
  },
  {
    course_id: "C022",
    title: "Introduction to 3D Modeling",
    description:
      "Learn the basics of 3D modeling using Blender and create your own 3D assets. This course covers modeling techniques, texturing, and rendering, providing you with the skills to bring your creative ideas to life in 3D.",
    instructor: "Liam Brown",
    duration: "8 weeks",
    level: "Beginner",
    category: "3D Design",
    enrollment_status: "Open",
    start_date: "2023-11-10",
    end_date: "2023-12-31",
    price: 199.99,
    image_url: "https://picsum.photos/200/300?random=22",
    enrolled_users: 95,
  },
  {
    course_id: "C023",
    title: "Introduction to Digital Photography",
    description:
      "Learn the fundamentals of digital photography and how to take stunning photos. This course covers camera settings, composition, lighting, and post-processing techniques, making it perfect for beginners looking to improve their photography skills.",
    instructor: "Mia Davis",
    duration: "5 weeks",
    level: "Beginner",
    category: "Photography",
    enrollment_status: "Open",
    start_date: "2023-11-01",
    end_date: "2023-12-05",
    price: 129.99,
    image_url: "https://picsum.photos/200/300?random=23",
    enrolled_users: 110,
  },
  {
    course_id: "C024",
    title: "Introduction to Financial Analysis",
    description:
      "Learn how to analyze financial statements and make informed business decisions. This course covers key financial concepts, ratio analysis, and forecasting techniques, providing you with the skills to assess a company's financial health.",
    instructor: "Noah Wilson",
    duration: "6 weeks",
    level: "Intermediate",
    category: "Finance",
    enrollment_status: "Open",
    start_date: "2023-11-15",
    end_date: "2023-12-27",
    price: 149.99,
    image_url: "https://picsum.photos/200/300?random=24",
    enrolled_users: 85,
  },
  {
    course_id: "C025",
    title: "Introduction to Public Speaking",
    description:
      "Develop your public speaking skills and learn how to present effectively. This course covers techniques for overcoming anxiety, structuring presentations, and engaging       your audience. Ideal for anyone looking to improve their communication skills, whether for professional or personal purposes.",
    instructor: "Ella Martinez",
    duration: "4 weeks",
    level: "Beginner",
    category: "Communication",
    enrollment_status: "Open",
    start_date: "2023-11-01",
    end_date: "2023-11-29",
    price: 99.99,
    image_url: "https://picsum.photos/200/300?random=25",
    enrolled_users: 150,
  },
  {
    course_id: "C026",
    title: "Introduction to Social Media Marketing",
    description:
      "Learn how to leverage social media platforms for effective marketing strategies. This course covers content creation, audience engagement, and analytics, providing you with the skills to build a strong online presence for brands and businesses.",
    instructor: "Ava Thompson",
    duration: "5 weeks",
    level: "Beginner",
    category: "Marketing",
    enrollment_status: "Open",
    start_date: "2023-11-10",
    end_date: "2023-12-15",
    price: 129.99,
    image_url: "https://picsum.photos/200/300?random=26",
    enrolled_users: 120,
  },
  {
    course_id: "C027",
    title: "Introduction to Content Writing",
    description:
      "Learn the art of writing engaging content for blogs, websites, and social media. This course covers writing techniques, SEO best practices, and how to create compelling narratives that resonate with your audience.",
    instructor: "Lucas Harris",
    duration: "6 weeks",
    level: "Beginner",
    category: "Writing",
    enrollment_status: "Open",
    start_date: "2023-11-20",
    end_date: "2024-01-01",
    price: 149.99,
    image_url: "https://picsum.photos/200/300?random=27",
    enrolled_users: 100,
  },
  {
    course_id: "C028",
    title: "Introduction to SEO",
    description:
      "Learn the fundamentals of Search Engine Optimization and how to improve website visibility. This course covers keyword research, on-page and off-page SEO techniques, and analytics, providing you with the skills to drive organic traffic to websites.",
    instructor: "Zoe Clark",
    duration: "5 weeks",
    level: "Beginner",
    category: "Marketing",
    enrollment_status: "Open",
    start_date: "2023-11-01",
    end_date: "2023-12-05",
    price: 129.99,
    image_url: "https://picsum.photos/200/300?random=28",
    enrolled_users: 140,
  },
  {
    course_id: "C029",
    title: "Introduction to Agile Project Management",
    description:
      "Learn the principles of Agile project management and how to implement Agile methodologies. This course covers Scrum, Kanban, and Lean principles, providing you with the skills to manage projects effectively in a fast-paced environment.",
    instructor: "Ethan Lewis",
    duration: "6 weeks",
    level: "Intermediate",
    category: "Project Management",
    enrollment_status: "Open",
    start_date: "2023-11-15",
    end_date: "2023-12-27",
    price: 149.99,
    image_url: "https://picsum.photos/200/300?random=29",
    enrolled_users: 75,
  },
  {
    course_id: "C030",
    title: "Introduction to Data Ethics",
    description:
      "Explore the ethical considerations in data collection, analysis, and usage. This course covers data privacy, bias in data, and ethical frameworks, providing you with the knowledge to navigate the complex landscape of data ethics in today's world.",
    instructor: "Mason Young",
    duration: "4 weeks",
    level: "Beginner",
    category: "Data Science",
    enrollment_status: "Open",
    start_date: "2023-11-01",
    end_date: "2023-11-29",
    price: 99.99,
    image_url: "https://picsum.photos/200/300?random=30",
    enrolled_users: 90,
  },
]);
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        width: "0%",
        margin: "10%",
      },
      {
        width: "100%",
        margin: "0%",
      }
    );
  }, []);
  return (
    <Container>
      <div className="flex justify-center flex-col py-2 items-center text-center">
        <h1 className="text-4xl text-seconday-color font-bold">
          Explore Our{" "}
          <span className="text-primary-color font-extrabold">Courses</span>
        </h1>
        <div className="py-1">
          <h2 className="text-gray-700 font-semibold pt-2 ">
            Courses to get you started
          </h2>
          <h2 className="text-gray-700 pb-1 font-semibold">
            Explore courses from experienced, real-world experts.
          </h2>
        </div>
      </div>
      <div ref={cardsRef} className="flex flex-wrap justify-center">
        {courses?.map((elem, index) => {
          return (
            <Card
              category={elem?.category}
              duration={elem?.duration}
              image={elem?.image_url}
              price={elem?.price}
              title={elem?.title}
              key={elem?.course_id}
              item={elem}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Course;
