import React, { useState } from "react";
import Container from "../Components/Ui/Container";
import Card from "../Components/Course/Card";

const Course = () => {
  const [courses, setCourses] = useState([
    {
        "course_id": "C001",
        "title": "Introduction to Python Programming",
        "description": "Learn the basics of Python programming, including syntax, data types, and control structures.",
        "instructor": "John Doe",
        "duration": "4 weeks",
        "level": "Beginner",
        "category": "Programming",
        "enrollment_status": "Open",
        "start_date": "2023-11-01",
        "end_date": "2023-11-29",
        "price": 99.99,
        "image_url": "https://picsum.photos/200/300?random=1"
    },
    {
        "course_id": "C002",
        "title": "Data Science with R",
        "description": "An in-depth course on data analysis and visualization using R programming.",
        "instructor": "Jane Smith",
        "duration": "6 weeks",
        "level": "Intermediate",
        "category": "Data Science",
        "enrollment_status": "Open",
        "start_date": "2023-11-15",
        "end_date": "2023-12-27",
        "price": 149.99,
        "image_url": "https://picsum.photos/200/300?random=2"
    },
    {
        "course_id": "C003",
        "title": "Web Development Bootcamp",
        "description": "Become a full-stack web developer by learning HTML, CSS, JavaScript, and backend technologies.",
        "instructor": "Emily Johnson",
        "duration": "12 weeks",
        "level": "Advanced",
        "category": "Web Development",
        "enrollment_status": "Closed",
        "start_date": "2023-09-01",
        "end_date": "2023-11-24",
        "price": 299.99,
        "image_url": "https://picsum.photos/200/300?random=3"
    },
    {
        "course_id": "C004",
        "title": "Digital Marketing Fundamentals",
        "description": "Understand the key concepts of digital marketing, including SEO, PPC, and social media marketing.",
        "instructor": "Michael Brown",
        "duration": "8 weeks",
        "level": "Beginner",
        "category": "Marketing",
        "enrollment_status": "Open",
        "start_date": "2023-11-10",
        "end_date": "2023-12-29",
        "price": 199.99,
        "image_url": "https://picsum.photos/200/300?random=4"
    },
    {
        "course_id": "C005",
        "title": "Machine Learning A-Z",
        "description": "Master machine learning concepts and algorithms with hands-on projects and real-world applications.",
        "instructor": "Sarah Wilson",
        "duration": "10 weeks",
        "level": "Advanced",
        "category": "Data Science",
        "enrollment_status": "Open",
        "start_date": "2023-11-20",
        "end_date": "2024-01-29",
        "price": 249.99,
        "image_url": "https://picsum.photos/200/300?random=5"
    },
    {
        "course_id": "C006",
        "title": "Graphic Design Essentials",
        "description": "Learn the principles of graphic design and how to use design software to create stunning visuals.",
        "instructor": "David Lee",
        "duration": "5 weeks",
        "level": "Beginner",
        "category": "Design",
        "enrollment_status": "Open",
        "start_date": "2023-11-05",
        "end_date": "2023-12-10",
        "price": 129.99,
        "image_url": "https://picsum.photos/200/300?random=6"
    },
    {
        "course_id": "C007",
        "title": "Project Management Professional (PMP) Prep",
        "description": "Prepare for the PMP certification exam with comprehensive coverage of project management principles.",
        "instructor": "Laura Martinez",
        "duration": "8 weeks",
        "level": "Intermediate",
        "category": "Business",
        "enrollment_status": "Open",
        "start_date": "2023-11-15",
        "end_date": "2023-12-31",
        "price": 199.99,
        "image_url": "https://picsum.photos/200/300?random=7"
    },
    {
        "course_id": "C008",
        "title": "Cybersecurity Basics",
        "description": "Learn the fundamentals of cybersecurity, including threats, vulnerabilities, and protective measures.",
        "instructor": "Chris Taylor",
        "duration": "6 weeks",
        "level": "Beginner",
        "category": "IT & Security",
        "enrollment_status": "Open",
        "start_date": "2023-11-01",
        "end_date": "2023-12-13",
        "price": 149.99,
        "image_url": "https://picsum.photos/200/300?random=8"
    },
    {
        "course_id": "C009",
        "title": "Introduction to Cloud Computing",
        "description": "Explore the fundamentals of cloud computing, including services, deployment models, and security.",
        "instructor": "Alice Green",
        "duration": "5 weeks",
        "level": "Beginner",
        "category": "Cloud Computing",
        "enrollment_status": "Open",
        "start_date": "2023-11-10",
        "end_date": "2023-12-15",
        "price": 119.99,
        "image_url": "https://picsum.photos/200/300?random=9"
    },
    {
        "course_id": "C010",
        "title": "Introduction to Artificial Intelligence",
        "description": "Get an overview of AI concepts, applications, and the future of artificial intelligence.",
        "instructor": "Robert King",
        "duration": "7 weeks",
        "level": "Intermediate",
        "category": "Artificial Intelligence",
        "enrollment_status": "Open",
        "start_date": "2023-11-25",
        "end_date": "2024-01-10",
        "price": 179.99,
        "image_url": "https://picsum.photos/200/300?random=10"
    },
    {
        "course_id": "C011",
        "title": "Introduction to SQL",
        "description": "Learn the basics of SQL and how to manage databases effectively.",
        "instructor": "Tom Harris",
        "duration": "4 weeks",
        "level": "Beginner",
        "category": "Database",
        "enrollment_status": "Open",
        "start_date": "2023-11-01",
        "end_date": "2023-11-29",
        "price": 99.99,
        "image_url": "https://picsum.photos/200/300?random=11"
    },
    {
        "course_id": "C012",
        "title": "Advanced JavaScript",
        "description": "Deep dive into JavaScript, covering ES6 features, asynchronous programming, and more.",
        "instructor": "Nina Patel",
        "duration": "6 weeks",
        "level": "Intermediate",
        "category": "Programming",
        "enrollment_status": "Open",
        "start_date": "2023-11-15",
        "end_date": "2023-12-27",
        "price": 149.99,
        "image_url": "https://picsum.photos/200/300?random=12"
    },
    {
        "course_id": "C013",
        "title": "Introduction to Blockchain Technology",
        "description": "Understand the principles of blockchain technology and its applications.",
        "instructor": "Mark Thompson",
        "duration": "5 weeks",
        "level": "Beginner",
        "category": "Blockchain",
        "enrollment_status": "Open",
        "start_date": "2023-11-10",
        "end_date": "2023-12-15",
        "price": 119.99,
        "image_url": "https://picsum.photos/200/300?random=13"
    },
    {
        "course_id": "C014",
        "title": "User  Experience (UX) Design",
        "description": "Learn the principles of UX design and how to create user-friendly interfaces.",
        "instructor": "Sophie Adams",
        "duration": "6 weeks",
        "level": "Intermediate",
        "category": "Design",
        "enrollment_status": "Open",
        "start_date": "2023-11-20",
        "end_date": "2024-01-01",
        "price": 179.99,
        "image_url": "https://picsum.photos/200/300?random=14"
    },
    {
        "course_id": "C015",
        "title": "Introduction to DevOps",
        "description": "Explore the DevOps culture, practices, and tools for continuous integration and delivery.",
        "instructor": "Kevin Brown",
        "duration": "8 weeks",
        "level": "Intermediate",
        "category": "DevOps",
        "enrollment_status": "Open",
        "start_date": "2023-11-15",
        "end_date": "2023-12-31",
        "price": 199.99,
        "image_url": "https://picsum.photos/200/300?random=15"
    },
    {
        "course_id": "C016",
        "title": "Introduction to Mobile App Development",
        "description": "Learn how to create mobile applications for iOS and Android platforms.",
        "instructor": "Laura White",
        "duration": "10 weeks",
        "level": "Beginner",
        "category": "Mobile Development",
        "enrollment_status": "Open",
        "start_date": "2023-11-01",
        "end_date": "2023-12-10",
        "price": 249.99,
        "image_url": "https://picsum.photos/200/300?random=16"
    },
    {
        "course_id": "C017",
        "title": "Introduction to Ethical Hacking",
        "description": "Learn the basics of ethical hacking and penetration testing techniques.",
        "instructor": "Daniel Green",
        "duration": "6 weeks",
        "level": "Intermediate",
        "category": "Cybersecurity",
        "enrollment_status": "Open",
        "start_date": "2023-11-10",
        "end_date": "2023-12-22",
        "price": 199.99,
        "image_url": "https://picsum.photos/200/300?random=17"
    },
    {
        "course_id": "C018",
        "title": "Introduction to Game Development",
        "description": "Learn the fundamentals of game development using Unity and C#.",
        "instructor": "Emma Wilson",
        "duration": "8 weeks",
        "level": "Beginner",
        "category": "Game Development",
        "enrollment_status": "Open",
        "start_date": "2023-11-15",
        "end_date": "2023-12-31",
        "price": 199.99,
        "image_url": "https://picsum.photos/200/300?random=18"
    },
    {
        "course_id": "C019",
        "title": "Introduction to Data Visualization",
        "description": "Learn how to visualize data effectively using tools like Tableau and Power BI.",
        "instructor": "Olivia Martinez",
        "duration": "5 weeks",
        "level": "Beginner",
        "category": "Data Science",
        "enrollment_status": "Open",
        "start_date": "2023-11-01",
        "end_date": "2023-12-05",
        "price": 129.99,
        "image_url": "https://picsum.photos/200/300?random=19"
    },
    {
        "course_id": "C020",
        "title": "Introduction to Natural Language Processing",
        "description": "Explore the basics of NLP and how to process and analyze text data.",
        "instructor": "James Taylor",
        "duration": "6 weeks",
        "level": "Intermediate",
        "category": "Data Science",
        "enrollment_status": "Open",
        "start_date": "2023-11-20",
        "end_date": "2024-01-01",
        "price": 179.99,
        "image_url": "https://picsum.photos/200/300?random=20"
    },
    {
        "course_id": "C021",
        "title": "Introduction to Augmented Reality",
        "description": "Learn the fundamentals of augmented reality and how to create AR applications.",
        "instructor": "Sophia Johnson",
        "duration": "6 weeks",
        "level": "Intermediate",
        "category": "AR Development",
        "enrollment_status": "Open",
        "start_date": "2023-11-25",
        "end_date": "2024-01-06",
        "price": 199.99,
        "image_url": "https://picsum.photos/200/300?random=21"
    },
    {
        "course_id": "C022",
        "title": "Introduction to 3D Modeling",
        "description": "Learn the basics of 3D modeling using Blender and create your own 3D assets.",
        "instructor": "Liam Brown",
        "duration": "8 weeks",
        "level": "Beginner",
        "category": "3D Design",
        "enrollment_status": "Open",
        "start_date": "2023-11-10",
        "end_date": "2023-12-31",
        "price": 199.99,
        "image_url": "https://picsum.photos/200/300?random=22"
    },
    {
        "course_id": "C023",
        "title": "Introduction to Digital Photography",
        "description": "Learn the fundamentals of digital photography and how to take stunning photos.",
        "instructor": "Mia Davis",
        "duration": "5 weeks",
        "level": "Beginner",
        "category": "Photography",
        "enrollment_status": "Open",
        "start_date": "2023-11-01",
        "end_date": "2023-12-05",
        "price": 129.99,
        "image_url": "https://picsum.photos/200/300?random=23"
    },
    {
        "course_id": "C024",
        "title": "Introduction to Financial Analysis",
        "description": "Learn how to analyze financial statements and make informed business decisions.",
        "instructor": "Noah Wilson",
        "duration": "6 weeks",
        "level": "Intermediate",
        "category": "Finance",
        "enrollment_status": "Open",
        "start_date": "2023-11-15",
        "end_date": "2023-12-27",
        "price": 149.99,
        "image_url": "https://picsum.photos/200/300?random=24"
    },
    {
        "course_id": "C025",
        "title": "Introduction to Public Speaking",
        "description": "Develop your public speaking skills and learn how to present effectively.",
        "instructor": "Ella Martinez",
        "duration": "4 weeks",
        "level": "Beginner",
        "category": "Communication",
        "enrollment_status": "Open",
        "start_date": "2023-11-01",
        "end_date": "2023-11-29",
        "price": 99.99,
        "image_url": "https://picsum.photos/200/300?random=25"
    },
    {
        "course_id": "C026",
        "title": "Introduction to Social Media Marketing",
        "description": "Learn how to leverage social media platforms for effective marketing strategies.",
        "instructor": "Ava Thompson",
        "duration": "5 weeks",
        "level": "Beginner",
        "category": "Marketing",
        "enrollment_status": "Open",
        "start_date": "2023-11-10",
        "end_date": "2023-12-15",
        "price": 129.99,
        "image_url": "https://picsum.photos/200/300?random=26"
    },
    {
        "course_id": "C027",
        "title": "Introduction to Content Writing",
        "description": "Learn the art of writing engaging content for blogs, websites, and social media.",
        "instructor": "Lucas Harris",
        "duration": "6 weeks",
        "level": "Beginner",
        "category": "Writing",
        "enrollment_status": "Open",
        "start_date": "2023-11-20",
        "end_date": "2024-01-01",
        "price": 149.99,
        "image_url": "https://picsum.photos/200/300?random=27"
    },
    {
        "course_id": "C028",
        "title": "Introduction to SEO",
        "description": "Learn the fundamentals of Search Engine Optimization and how to improve website visibility.",
        "instructor": "Zoe Clark",
        "duration": "5 weeks",
        "level": "Beginner",
        "category": "Marketing",
        "enrollment_status": "Open",
        "start_date": "2023-11-01",
        "end_date": "2023-12-05",
        "price": 129.99,
        "image_url": "https://picsum.photos/200/300?random=28"
    },
    {
        "course_id": "C029",
        "title": "Introduction to Agile Project Management",
        "description": "Learn the principles of Agile project management and how to implement Agile methodologies.",
        "instructor": "Ethan Lewis",
        "duration": "6 weeks",
        "level": "Intermediate",
        "category": "Project Management",
        "enrollment_status": "Open",
        "start_date": "2023-11-15",
        "end_date": "2023-12-27",
        "price": 149.99,
        "image_url": "https://picsum.photos/200/300?random=29"
    },
    {
        "course_id": "C030",
        "title": "Introduction to Data Ethics",
        "description": "Explore the ethical considerations in data collection, analysis, and usage.",
        "instructor": "Mason Young",
        "duration": "4 weeks",
        "level": "Beginner",
        "category": "Data Science",
        "enrollment_status": "Open",
        "start_date": "2023-11-01",
        "end_date": "2023-11-29",
        "price": 99.99,
        "image_url": "https://picsum.photos/200/300?random=30"
    }
])
  return (
    <Container>
      <div>
        <h1 className="text-4xl text-seconday-color font-bold">
          Explore Our{" "}
          <span className="text-primary-color font-extrabold">Courses</span>
        </h1>
        <div className="py-2">
          <h2 className="text-gray-700 font-semibold pt-2 ">
            Courses to get you started
          </h2>
          <h2 className="text-gray-700 pb-1 font-semibold">
            Explore courses from experienced, real-world experts.
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {courses?.map((elem, index) => {
          return (
            <Card
              category={elem?.category}
              duration={elem?.duration}
              image={elem?.image_url}
              price={elem?.price}
              title={elem?.title}
              key={elem?.course_id}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Course;
